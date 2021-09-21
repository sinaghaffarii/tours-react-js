import React, { useState, useEffect } from "react";
import MyLoader from "./Components/YoutubeFresh";
import Tours from "./Components/Tours";
import axios from "axios";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

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
  }, []);



  if (loading) {
    return (
      <main>
        <MyLoader />
        <MyLoader />
        <MyLoader />
        <MyLoader />
      </main>
    );
  }
  if(tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button onClick={fetchTours} className="btn">refresh</button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App;
