import Cards from "../components/Cards";
// import { Poems } from "./poems/Poems";
import React, { useEffect, useState } from "react";

const Poem = () => {
  const [poems, setPoems] = useState([]);

  useEffect(() => {
    fetch(
      "https://kenbiriba-service-core-production.up.railway.app/Poem/getAll",
      {
        method: "GET", // Ensure this matches the allowed methods
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    )
      .then((response) => response.json())
      .then((data) => setPoems(data))
      .catch((error) => console.error("Error fetching poems:", error));
  }, []);

  return (
    <div className="page">
      <Cards cardContent={poems} />
    </div>
  );
};

export default Poem;
