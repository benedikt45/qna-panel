import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from "react-router-bootstrap";
import {useHistory, useRouteMatch} from "react-router-dom";
import {Link} from "react-router-dom";

function Navigation(props) {

  let {url} = useRouteMatch();
  let history = useHistory();

  async function logout() {
    let response = await fetch("/api/user/logout", {
      method: "POST",
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    props.handleLogout();
    history.push("/login");
  }

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
              Вы вошли как: <span style={{color: "black"}}>
              <Link onClick={logout}>{props.children}</Link>
            </span>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </>
  )
}

export default Navigation;