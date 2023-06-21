import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import Histogram from "./components/Histogram";
import PieChart from "./components/PieChart";
import PopulationTable from "./components/PopulationTable";
import FamilyTree from "./components/FamilyTree";
//import data from "./data";

const App = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [data, setData] = useState([]);

  async function GetData() {
    const Tempdata = Papa.parse(await fetchCsv());
    var dataObj = [];

    for (var i = 1; i < Tempdata.data.length; i++) {
      var ID = Tempdata.data[i][0];
      var Name = Tempdata.data[i][1];
      var Age = Tempdata.data[i][2];
      var Occupation = Tempdata.data[i][3];
      var newPerson = { ID, Name, Age, Occupation };
      newPerson["Father's ID"] = Tempdata.data[i][4];
      dataObj = [...dataObj, newPerson];
    }

    setData(dataObj);
    return Tempdata;
  }
  async function fetchCsv() {
    const response = await fetch("newData.csv");
    const reader = response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder("utf-8");
    const csv = await decoder.decode(result.value);

    return csv;
  }

  useEffect(() => {
    GetData();
  });

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
