import React from "react";

const EmployeeDir = (props) => {
  return (
    <tr>
      <td>
        <img alt="userPhoto" src={props.picture}></img>
      </td>
      <td>
        {props.first} {props.last}
      </td>
      <td>
        {props.city}, {props.state}
      </td>
      <td>
        Email: {props.email} 
        Phone: {props.phone}
        Cell: {props.cell}
      </td>
    </tr>
  );
};

export default EmployeeDir;