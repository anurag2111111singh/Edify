import React, { useState, useEffect } from 'react';
import { db } from "../config/firebase-config";
import {  collection, getDocs } from 'firebase/firestore';
export const useGetArticles = () => {
    const [articles, setArticles] = useState([]);
    const getArticleCollectionRef = collection(db, "articles");
  
    const getArticles = async () => {
      try {
        const querySnapshot = await getDocs(getArticleCollectionRef);
        const articleData = querySnapshot.docs.map((doc) => ({
          ...doc.data()
        }));
        setArticles(articleData);
      } catch (err) {
        console.error("Error fetching articles:", err);
      }
    };
  
    useEffect(() => {
      getArticles();
    }, []);
  
    return { articles }; 
  };
  