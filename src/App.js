import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect, useRouteMatch, useHistory
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Topics from "./components/Topics";
import Navigation from "./components/AfterLogin/Navigation";
import About from "./components/About";
import NewQuestion from "./components/AfterLogin/NewQuestion";
import {useEffect, useState} from "react";
import QuestionList from "./components/AfterLogin/QuestionList.js";
import {returnGetJSON} from "./utils/utils.js";
import Login from "./components/Login/Login.js";
import Main from "./components/AfterLogin/Main";


function App() {

  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  let history = useHistory();

  useEffect(() => {
    async function fetchLoggedIn() {
      let response = await fetch("/api/user/login");
      setLoggedIn(response.ok);
      if (response.ok) {
        let username = await response.json();
        setUsername(username.username);
        return history.push('/main');
      }
      history.push('/login');
    }

    fetchLoggedIn();
  }, []);

  return (
      <Container>
        <Switch>
          <Route path="/main">
            <Main username={username}/>
          </Route>
          <Route path="/login">
            <Login handleLoggedIn={
              (username, loggedIn) => {
                setLoggedIn(loggedIn);
                setUsername(username);
              }
            }/>
          </Route>
        </Switch>
      </Container>
  );
}

export default App;
