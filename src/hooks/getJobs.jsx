import { useState, useEffect } from "react";
import { db } from "../config/firebase-config";
import { collection, getDocs } from "firebase/firestore";

const useFetchJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobCollection = collection(db, "jobs");
        const snapshot = await getDocs(jobCollection);

        const jobList = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          jobList.push({
            id: doc.id,
            title: data.title,
            lastDate: data.lastDate,
            link: data.link,
            location: data.location,
            salary: data.salary,
            skills: data.skills,
          });
        });

        setJobs(jobList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log(jobs);
  return { jobs, loading };
};

export default useFetchJobs;
