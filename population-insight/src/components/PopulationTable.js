import React from "react";

const PopulationTable = ({ data, onSelectRow }) => {
  return (
    <div className="population-table-container">
      <h2>Population Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
            <th>Father's ID</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person) => (
            <tr key={person.ID} onClick={() => onSelectRow(person)}>
              <td>{person.ID}</td>
              <td>{person.Name}</td>
              <td>{person.Age}</td>
              <td>{person.Occupation}</td>
              <td>{person["Father's ID"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PopulationTable;
