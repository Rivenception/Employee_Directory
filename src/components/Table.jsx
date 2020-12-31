import React from "react";
import EmployeeDir from "./EmployeeDir";

export function Table({children}) {
    return (
        <table className="table table-light table-striped">
            <thead>
                <tr>
                    <th>Headshot</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Contact Info</th>
                </tr>
            </thead>
            {children}
        </table>
    );
}


export function TableBody({users}) {
    return (
        <tr>
            <tbody>
                {users.map((employee) => (
                    <EmployeeDir
                        key={employee.picture.small}
                        firstName={employee.name.first}
                        lastName={employee.name.last}
                        city={employee.location.city}
                        state={employee.location.state}
                        email={employee.email}
                        phone={employee.phone}
                        cell={employee.cell}
                    />
                ))}
            </tbody>
        </tr>
    );
}
