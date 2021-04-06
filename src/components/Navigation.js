import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import {Component} from "react";
import {Link} from "react-router-dom";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu:
          [
            {"type": "button", "name": "О проекте", "path": "/about"},
            {"type": "button", "name": "Темы", "path": "/topics"},
            {
              "type": "dropdown", "name": "Действия", "buttons": [
                {"type": "button", "name": "Просмотр", "path": "/questions"},
                {"type": "button", "name": "Добавить", "path": "/newQuestion"}
              ]
            }
          ]
    }
  }

  parseItems(array) {
    return array.map((button) => {
      if (button["type"] === "button") {
        return (
            <Nav.Link>
              <Link to={button["path"]}> {button["name"]} </Link>
            </Nav.Link>
        )
      } else if (button["type"] === "dropdown") {
        return (
            <NavDropdown title={button["name"]}>
              {
                button["buttons"].map((button) => {
                  return (
                      <NavDropdown.Item>
                        <Link to={button["path"]}> {button["name"]} </Link>
                      </NavDropdown.Item>
                  )
                })
              }
            </NavDropdown>
        )
      }
    })
  }

  render() {
    return (
        <Navbar bg="light">
          <Navbar.Brand href="#">API</Navbar.Brand>
          <Nav>
            {this.parseItems(this.state.menu)}
          </Nav>
        </Navbar>
    )
  }
}

export default Navigation;