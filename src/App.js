// ALWAYS inport libraries and modules first
import React from 'react';
import './App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import ButtonArray from "./components/ButtonArray";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand><h2><i className="fas fa-car"></i> NSX Climate Control</h2></Navbar.Brand>
        <Nav className="mr-auto"></Nav>

      </Navbar>
      <Container>
        <ButtonArray />
      </Container>
    </div>
  );
}

export default App;
