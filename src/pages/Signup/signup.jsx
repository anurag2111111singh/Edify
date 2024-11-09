import { useState } from "react";
import React from 'react';
import './signup.css';
import { auth, db } from '../../config/firebase-config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from 'react-router-dom/';

export function Signup() {
  const navigation = useNavigate();
  const [Loading, setLoading] = useState(false);
  const [errormsg, seterrormsg] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    signupType: 'student',
  });

  const handleButtonClick = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      signupType: value,
    }));
  };

  const userRef = collection(db, "users");

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      seterrormsg("Password didn't match!");
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = res.user;

      await updateProfile(user, { displayName: formData.name });

      const docRef = await addDoc(userRef, {
        name: formData.name,
        email: formData.email,
        signupType: formData.signupType
      });

      setLoading(false);
      console.log("Document written with ID: ", docRef.id);
      navigation('/');

    } catch (err) {
      setLoading(false);
      if (err.code === 'auth/email-already-in-use') {
        seterrormsg('Email already in use, login or try another.');
      }
      else if (err.code === "auth/weak-password") {
        seterrormsg('Weak password, use strong with atlead 8 charecters.');
      } else {
        seterrormsg(err.message || err.toString());
      }

    }
  };

  return (
    <div className="signupPage">
      <div className="signupPage-left">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="inputfield"
            placeholder="Name"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <br />
          <input
            className="inputfield"
            placeholder="email"
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
          <input
            className="inputfield"
            placeholder="Confirm Password"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            required
          />
          <br />
          <p>Continue as </p>
          <label>
            <input
              type="radio"
              id="student"
              name="signupType"
              value="student"
              checked={formData.signupType === 'student'}
              onChange={() => handleButtonClick('student')}
              style={{ display: 'none' }}
            />
            <div
              className={`button-label ${formData.signupType === 'student' ? 'active' : ''}`}
              onClick={() => handleButtonClick('student')}
            >
              Student
            </div>
          </label>
          <label>
            <input
              type="radio"
              id="recruiter"
              name="signupType"
              value="recruiter"
              checked={formData.signupType === 'recruiter'}
              onChange={() => handleButtonClick('recruiter')}
              style={{ display: 'none' }}
            />
            <div
              className={`button-label ${formData.signupType === 'recruiter' ? 'active' : ''}`}
              onClick={() => handleButtonClick('recruiter')}
            >
              Recruiter
            </div>
          </label>
          <br />
          <p className="errormessage">{errormsg}</p>
          {/* Submit Button */}
          <input className={Loading ? "btnLoading" : "submitbtn"} type="submit" value="SIGN UP" />
        </form>
      </div>
      <div className="signupPage-right">
        <h1>Hello, Friend!</h1>
        <h3>Login with your personal detail to use all of the site features.</h3>
        <button onClick={() => { navigation("/signin") }}>Sign In</button>
      </div>
    </div>
  );
}
