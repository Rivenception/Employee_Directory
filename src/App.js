import "./App.css";
import React, { useState, useEffect } from "react";
// import API from "./utils/API";
import { getUsers } from "./utils/API";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import Form from "./components/Form";
import { Table } from "./components/Table";
import EmployeeData from "./components/EmployeeData";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [users, setUsers] = useState([]);
  const [stateFilter, setStateFilter] = useState("");

  useEffect(() => {
    getUsers()
      .then((res) => {
        // console.log(res.data)
        setUsers(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(users);

  const sortName = (e) => {
    e.preventDefault();
    const sortedArr = users.sort((a, b) => {
      return a.name.first > b.name.first ? 1 : -1;
    });
    // console.log(sortedArr);

    // had to use the spread syntax because React didn't recognize the useState was changing when filtering or sorting
    setUsers([...sortedArr]);
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setStateFilter(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let value = stateFilter;
    console.log(stateFilter);
    let filterArr = users.filter((user) => {
      if (user.location.state.toLowerCase() === value.toLowerCase()) {
        return true;
      }
    });
    // console.log(filterArr);

    // had to use the spread syntax because React didn't recognize the useState was changing when filtering or sorting
    setUsers([...filterArr]);
  };
  
  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <Wrapper>
        <Form
          value={stateFilter}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
          sortName={sortName}
        />
        <br />
        <Table>
          {users.map((user) => (
            <EmployeeData
              key={user.name.first + user.name.last}
              picture={user.picture.medium}
              firstName={user.name.first}
              lastName={user.name.last}
              city={user.location.city}
              state={user.location.state}
              email={user.email}
            />
          ))}
        </Table>
      </Wrapper>
    </div>
  );
}

export default App;
