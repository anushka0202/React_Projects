import React from "react";

const FamilyTree = ({ selectedPerson, data }) => {
  // Function to find the root of the family tree for a selected person
  console.log("selected:", selectedPerson);
  const findRootPerson = (person) => {
    if (!person["Father's ID"]) {
      return person;
    }

    const fatherID = person["Father's ID"];
    const father = data.find((p) => p.ID === fatherID);
    return findRootPerson(father);
  };

  // Recursively build the family tree starting from the root person
  const buildFamilyTree = (person) => {
    const children = data.filter((p) => p["Father's ID"] === person.ID);

    if (children.length === 0) {
      return (
        <li
          style={person.ID === selectedPerson.ID ? { fontWeight: "bold" } : {}}
          key={person.ID}
        >
          {person.Name}
        </li>
      );
    }

    return (
      <li className="child" key={person.ID}>
        <p
          style={person.ID === selectedPerson.ID ? { fontWeight: "bold" } : {}}
        >
          {person.Name}
        </p>
        <ul>{children.map((child) => buildFamilyTree(child))}</ul>
      </li>
    );
  };

  // Render the family tree
  return (
    <div className="tree">
      <h2>Family Tree</h2>
      {selectedPerson && (
        <ul>{buildFamilyTree(findRootPerson(selectedPerson))}</ul>
      )}
    </div>
  );
};

export default FamilyTree;
