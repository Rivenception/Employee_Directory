import './App.css';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import Form from "./components/Form";
import { Table } from "./components/Table";
import 'bootstrap/dist/css/bootstrap.min.css';
import API from "./utils/API";
import React, { useState } from "react";

function App() {

  return (
    <div className="App">
      <Nav/>
        <Jumbotron/>
          <Wrapper>
            <Form
              handleInputChange="need to enter set state"
              handleFormSubmit="need to enter set state"
            />
            <Table/>
          </Wrapper>
    </div>
  );
}

export default App;
