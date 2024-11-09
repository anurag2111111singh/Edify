import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import '../Signup/signup.css';
import { useNavigate } from 'react-router-dom/';
import { auth } from '../../config/firebase-config';

export function Signin() {
  const navigation = useNavigate();
  const [Loading, setLoading] = useState(false);

  const [errormsg, seterrormsg] = useState("")
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const userCredentials = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      console.log('Login Successful');
      console.log(userCredentials.user);
      setLoading(false);
      navigation('/');
    } catch (err) {
      // seterrormsg(err.message || err.toString());
      setLoading(false);
      if (err.code === 'auth/invalid-login-credentials') {
        seterrormsg('Invalid login credentials. Please check your email and password.');
      } else {
        seterrormsg(err.message || err.toString());
      }

      console.error(err);
    }
  };

  return (
    <div>
      <div className="signupPage">
        <div className="signupPage-left">
          <h2>Signin</h2>
          {/* Set the method to "post" to ensure form data is sent in the request body */}
          <form onSubmit={handleSubmit} method="post">
            <input
              className="inputfield"
              placeholder="Email"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <br />

            <input
              className="inputfield"
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
            <br />
            <p className='errormessage'>{errormsg}</p>

            {/* Submit Button */}
            <input className={Loading ? "btnLoading" : "submitbtn"} type="submit" value="SIGN IN" />
          </form>

        </div>
        <div className="signupPage-right">
          <h1>Hello, Friend!</h1>
          <h3>Register with your personal detail to use all of the site features.</h3>
          <button onClick={() => { navigation('/signup') }}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}