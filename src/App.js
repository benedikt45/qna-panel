//import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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

  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(async () => {
    await checkSession();
  })

  const [username, setUsername] = useState("");

  async function checkSession() {
    let response = await fetch("/user/login");
    if (response.ok) {
      let json = await response.json();
      setUsername(json.username);
      setLoggedIn(true);
    }
  }

  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   // if (topics.length === 0) {
  //     setLoading(true);
  //   // } else {
  //   //   setLoading(false);
  //   // }
  // }, []);
  //
  // const [topics, setTopics] = useState([]);
  // useEffect(() => {
  //   if (loading) {
  //     returnGetJSON('/question/topics').then((result) => {
  //       setTopics(result);
  //     })
  //     setLoading(false);
  //   }
  // }, [loading]);
  //
  //
  // const [questions, setQuestions] = useState([]);
  // useEffect(() => {
  //   if (loading) {
  //     returnGetJSON('/question/all').then((result) => {
  //       setQuestions(result);
  //     })
  //     setLoading(false);
  //   }
  // }, [loading]);
  //
  // const handleAddNew = () => {
  //   setLoading(true);
  // }

  return (
      <Container>
        <Router>
            <Route exact path="/">
              {loggedIn ? <Main username={username}/> : <Login handleLoggedIn={
                (username, loggedIn) => {
                  setLoggedIn(loggedIn);
                  setUsername(username);
                }
              }/>}
            </Route>
        </Router>
      </Container>
  );
}

export default App;
