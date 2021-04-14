import "bootstrap/dist/css/bootstrap.min.css";
import {Switch, Route, useHistory, useRouteMatch} from "react-router-dom";
import Container from "react-bootstrap/Container";
import {useEffect, useState} from "react";
import Login from "./components/Login/Login.js";
import Main from "./components/AfterLogin/Main";


function App() {

  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState({"questions": [], "topics": []});
  const [updateData, setUpdateData] = useState(false);
  let history = useHistory();
  let {url, path} = useRouteMatch();


  async function fetchData() {
    let responses = await Promise.all(
        [fetch("/api/question/all"), fetch("/api/question/topics")]
    );

    let data = await Promise.all(responses.map((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }));

    setData({"questions": data[0], "topics": data[1]});
    if (updateData) {
      setUpdateData(false);
    }
  }

  useEffect(() => {
    async function fetchLoggedIn() {
      let response = await fetch("/api/user/login");
      setLoggedIn(response.ok);
      if (response.ok) {
        let username = await response.json();
        setUsername(username.username);
        if (window.location.pathname === "/" || window.location.pathname === "") {
          return history.push("/main");
        }
      } else {
        history.push("/login");
      }
    }

    fetchLoggedIn();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      fetchData();
    }
  }, [loggedIn]);

  useEffect(() => {
    if (updateData) {
      fetchData();
      history.push("/main/questions");
    }
  }, [updateData]);

  return (
      <Container>
        <Switch>
          <Route path="/main">
            <Main username={username} data={data} handleUpdateData={() => {
              setUpdateData(true);
            }}/>
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
