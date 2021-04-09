import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import {Component} from "react";
import {LinkContainer} from "react-router-bootstrap";


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
                {"type": "button", "name": "Просмотр", "path": "/questionList"},
                {"type": "button", "name": "Добавить", "path": "/newQuestion"}
              ]
            }
          ]
    }
  }

  // parseItems(array) {
  //   return array.map((button) => {
  //     if (button["type"] === "button") {
  //       return (
  //           <Nav.Link>
  //             <Link to={button["path"]}> {button["name"]} </Link>
  //           </Nav.Link>
  //       )
  //     } else if (button["type"] === "dropdown") {
  //       return (
  //           <NavDropdown title={button["name"]}>
  //             {
  //               button["buttons"].map((button) => {
  //                 return (
  //                     <NavDropdown.Item>
  //                       <Link to={button["path"]}> {button["name"]} </Link>
  //                     </NavDropdown.Item>
  //                 )
  //               })
  //             }
  //           </NavDropdown>
  //       )
  //     }
  //   })
  // }

  render() {
    return (
        <>
          <Navbar bg="light">
            <LinkContainer to="/">
              <Navbar.Brand>
                <img
                    src="logo-2.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
              </Navbar.Brand>
            </LinkContainer>
            <Nav className="mr-auto" >
              <LinkContainer to="/about">
                <Nav.Link>Описание</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/statistic">
                <Nav.Link>Статистика</Nav.Link>
              </LinkContainer>
            </Nav>

          </Navbar>
        </>
        // <Navbar bg="light">
        //   <Navbar.Brand><Link to="/"> API </Link></Navbar.Brand>
        //   <Nav>
        //     {this.parseItems(this.state.menu)}
        //   </Nav>
        // </Navbar>
    )
  }
}

export default Navigation;