import React, { useState, useEffect } from "react";
import YoutubeFresh from "./Components/YoutubeFresh";
import Tours from "./Components/Tours";
import axios from 'axios'

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      const tours = await response.data;
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  },[]);

  if (loading) {
    return (
      <main>
        <YoutubeFresh />
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} />
    </main>
  );
};

export default App;
