import React from "react";
import User from "./User";

const UserList = ({ users }) => {
  return (
    <div className="users-constainer">
      <div className="userList">
        {users.map((project, index) => {
          return <User id={index} name={project.name} age={project.age} />;
        })}
      </div>
    </div>
  );
};

export default UserList;
