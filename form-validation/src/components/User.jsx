import React from "react";

const User = (props) => {
  return (
    <div className="bg-white w-50 h-30 m-5 flex align-center justify-center text-black rounded">
      Name: {props.name} <br/> Email: {props.email}
    </div>
  );
};

export default User;
