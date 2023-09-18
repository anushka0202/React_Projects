import React from "react";

const User = ({ name, age }) => {
  return (
    <div className="user">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="username">{name}</div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        // width="461"
        height="2"
        viewBox="0 0 461 2"
        fill="none"
      >
        <path d="M0 1L460.107 1" stroke="black" />
      </svg>
      <div className="user-details">AGE: {age}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // width="461"
        height="2"
        viewBox="0 0 461 2"
        fill="none"
      >
        <path d="M0 1L460.107 1" stroke="black" />
      </svg>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button className="delete-button">Delete</button>
        <button className="view-button">View</button>
        <button className="edit-button">Edit</button>
      </div>
    </div>
  );
};

export default User;
