import React from "react";

export function Table({ children }) {
  return (
    <table className="table table-light table-striped">
      <thead>
        <tr>
          <th>Headshot</th>
          <th>Name</th>
          <th>Location</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
