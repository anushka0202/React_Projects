import React, { useState } from "react";
import Histogram from "./components/Histogram";
import PieChart from "./components/PieChart";
import PopulationTable from "./components/PopulationTable";
import FamilyTree from "./components/FamilyTree";
import data from "./data";

const App = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleRowSelect = (person) => {
    setSelectedPerson(person);
  };

  return (
    <>
      <h1>Population Insight</h1>
      <div className="container">
        <Histogram data={data} className="grid-item" />
        <PieChart data={data} className="grid-item" />
        <PopulationTable
          data={data}
          onSelectRow={handleRowSelect}
          className="grid-item"
        />
        <FamilyTree
          selectedPerson={selectedPerson}
          data={data}
          className="grid-item"
        />
      </div>
    </>
  );
};

export default App;
