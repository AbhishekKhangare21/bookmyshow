import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import { useEffect, useState } from "react";
import Summary from "./components/Summary";

function App() {
  const [shows, setShows] = useState([]);
  const [id, setId] = useState("");

  const fetchAPI = async () => {
    try {
      const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const data = await res.json();
      setShows(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <div className="App">
      <h2 className="logo">BookMyShow </h2>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setId={setId} shows={shows} />} />
          <Route
            path="summary"
            element={<Summary showId={id} shows={shows} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
