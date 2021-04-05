import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import {Component} from "react";
import {Link} from "react-router-dom";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:
          [
            {'type': 'button', 'name': 'О проекте', 'path': '/about'},
            {'type': 'button', 'name': 'Темы', 'path': '/topics'},
            {"type": 'dropdown', 'buttons': ["Просмотр", "Добавить"]}
          ]
    }
  }

  render() {
    return (
        <Navbar bg="light">
          <Navbar.Brand href="#">API</Navbar.Brand>
          <Nav>
            {
              this.state.items.map((item) => {
                if (item["type"] !== 'dropdown') {
                  return (
                      <Nav.Link>
                        <Link to={item["path"]}> {item['name']} </Link>
                      </Nav.Link>
                  )
                } else {
                  return (
                      <NavDropdown title="Действия">
                        {
                          item["buttons"].map((button) => {
                            return (
                                <NavDropdown.Item>
                                  {button}
                                </NavDropdown.Item>
                            )
                          })
                        }
                      </NavDropdown>
                  )
                }
              })
            }
          </Nav>
        </Navbar>
    )
  }
}

export default Navigation;