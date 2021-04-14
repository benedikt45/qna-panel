import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import {Component} from "react";
import {LinkContainer} from "react-router-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

function Navigation(props) {

  let { url } = useRouteMatch();

  return (
      <>
        <Navbar bg="light">
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                  src={process.env.PUBLIC_URL + "/logo-2.png"}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="Logo"
              />
            </Navbar.Brand>
          </LinkContainer>
          <Nav className="mr-auto">
            <LinkContainer to={`${url}/questions`}>
              <Nav.Link>Просмотр вопросов</Nav.Link>
            </LinkContainer>
            <LinkContainer to={`${url}/new`}>
              <Nav.Link>Добавить вопрос</Nav.Link>
            </LinkContainer>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Вы вошли как: <span style={{color: "black"}}>{props.children}</span>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </>
  )
}

export default Navigation;