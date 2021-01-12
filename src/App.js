import './App.css';
import React, { useState, useEffect } from "react";
import API from "./utils/API";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
// import Form from "./components/Form";
import { Table } from "./components/Table";
import EmployeeData from "./components/EmployeeData";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [users, setUsers] = useState([]);
  // const [userSearch, setUserSearch] = useState("");

  useEffect(
    () => {
        API.getUsers()
        .then(res => {
          console.log(res.data)
          setUsers(res.data.results)
        }
        )
        .catch(err => console.log(err));
    }, [])

  console.log(users);

  // const handleInputChange = event => {
  //   const { value } = event.target;
  //   setUserSearch(value);
  // };

  // const handleFormSubmit = e => {
  //   e.preventDefault();
  //   API.getUsers(userSearch)
  //   .then(res => {
  //     setUsers(res.data)
  //     console.log(users)
  //   })
  //   .catch(err => console.log(err));
  // }

  return (
    <div className="App">
      <Nav/>
        <Jumbotron/>
          <Wrapper>
            {/* <Form
              value={userSearch}
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            /> */}
            <br/>
            <Table>
              {users.map(user => (
                <EmployeeData
                  key={user.name.last}
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
