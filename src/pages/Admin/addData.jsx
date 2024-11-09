import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import "./addData.css"; // Assuming you have a CSS file named AddData.css
import Select from "react-select";
import { db, storage } from "../../config/firebase-config"; // Import storage along with db

export function AddData() {
  const [title, setTitle] = useState("");
  const [intro, setIntro] = useState("");
  const [contentFile, setContentFile] = useState(null);
  const articlesCollectionRef = collection(db, "articles");
  const jobsRef = collection(db, "jobs");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Upload the content file to Firebase Storage
      const storageRef = storage.ref();
      const fileRef = storageRef.child(`articles/${contentFile.name}`);
      await fileRef.put(contentFile);

      // Get the download URL of the uploaded file
      const downloadURL = await fileRef.getDownloadURL();

      // Create a new document in Firestore with serverTimestamp
      await addDoc(articlesCollectionRef, {
        title,
        intro,
        contentURL: downloadURL, // Store the download URL of the content
        createdAt: serverTimestamp(),
      });

      // Document successfully added to Firestore
      console.log("Document added successfully");

      // Clear the form inputs
      setTitle("");
      setIntro("");
      setContentFile(null);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const [jobData, setJobData] = useState({
    title: "",
    location: "",
    salary: "",
    link: "",
    lastDate: "",
    skills: [],
  });

  const skillOptions = [
    "reactjs",
    "javascript",
    "python",
    "nodejs",
    "figma",
    "php",
    "c++",
    "django",
    "Linux",
    "Data",
    "Network",
  ]; // Add more skills as needed

  const addJobToFirestore = async (jobData) => {
    try {
      const jobWithTimestamp = {
        ...jobData,
        created_at: serverTimestamp(),
      };
      await addDoc(jobsRef, jobWithTimestamp);
      console.log("Document added successfully");
    } catch (err) {
      console.log("Error adding document:", err);
    }
  };

  const handleSubmitJob = (e) => {
    e.preventDefault();

    // Call your Firestore helper function to add job data
    addJobToFirestore(jobData);

    // Reset the form after submission
    setJobData({
      title: "",
      location: "",
      salary: "",
      lastDate: "",
      skills: [],
    });
  };

  const handleSkillsChange = (selectedSkills) => {
    setJobData({ ...jobData, skills: selectedSkills });
  };

  return (
    <>
      <div className="addData">
        <div className="add-data-container">
          <h2>Add Data to Articles Collection</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Title:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Intro:</label>
              <input
                type="text"
                value={intro}
                onChange={(e) => setIntro(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Content File:</label>
              <input
                type="file"
                onChange={(e) => setContentFile(e.target.files[0])}
                className="form-control"
                accept=".md" // Accept only Markdown files
              />
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>

        {/* <div className=''> */}
        <div className="add-data-container">
          <h2>Add Job Opening</h2>
          <form onSubmit={handleSubmitJob}>
            <div className="form-group">
              <label>Title:</label>
              <input
                type="text"
                value={jobData.title}
                onChange={(e) =>
                  setJobData({ ...jobData, title: e.target.value })
                }
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Location:</label>
              <input
                type="text"
                value={jobData.location}
                onChange={(e) =>
                  setJobData({ ...jobData, location: e.target.value })
                }
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Salary (lpa):</label>
              <input
                type="number"
                value={jobData.salary}
                onChange={(e) =>
                  setJobData({ ...jobData, salary: e.target.value })
                }
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Last Date:</label>
              <input
                type="date"
                value={jobData.lastDate}
                onChange={(e) =>
                  setJobData({ ...jobData, lastDate: e.target.value })
                }
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Skills:</label>
              <Select
                isMulti
                options={skillOptions.map((skill) => ({
                  value: skill,
                  label: skill,
                }))}
                value={jobData.skills}
                onChange={handleSkillsChange}
                className="form-control, react-select__option"
              />
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
