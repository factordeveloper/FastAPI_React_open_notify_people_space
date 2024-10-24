import React, { useEffect, useState } from "react";

function App() {
  const [astronauts, setAstronauts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/astronauts")
      .then((response) => response.json())
      .then((data) => setAstronauts(data.people))
      .catch((error) => console.error("Error fetching astronauts:", error));
  }, []);

  return (
    <div className="App">
      <h1>Astronauts in Space</h1>
      <ul>
        {astronauts.map((astronaut, index) => (
          <li key={index}>
            {astronaut.name} - Craft: {astronaut.craft}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
