import React from "react";

const EmployeeData = (props) => {
  return (
    <tr>
      <td>
        <img alt="userPhoto" src={props.picture}></img>
      </td>
      <td>
        {props.firstName} {props.lastName}
      </td>
      <td>
        {props.city}, {props.state}
      </td>
      <td>
        {props.email} 
      </td>
    </tr>
  );
};

export default EmployeeData;