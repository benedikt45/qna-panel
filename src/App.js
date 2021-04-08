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
import Navigation from "./components/Navigation";
import About from "./components/About";
import NewQuestion from "./components/NewQuestion";
import {useEffect, useState} from "react";
import QuestionList from "./components/QuestionList.js";


function App() {

  const [topics, setTopics] = useState([]);

  useEffect(() => {
    if (topics.length === 0) {
      getTopics().then((result) => {
        setTopics(result);
      })
    }
  });

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (topics.length === 0) {
      setLoading(true)
    } else {
      setLoading(false)
    }
  }, [topics])

  const [questions, setQuestions] = useState([])
  useEffect(() => {
    if (questions.length === 0) {
      getQuestions().then((result) => {
        setQuestions(result)
      })
    }
  })

  async function getTopics() {
    let resp = await fetch('/question/topics', {
      headers: {
        Authentication: 'Bearer '
      }
    });
    let result = await resp.json();
    return result.Topics;
  }

  async function getQuestions() {
    let resp = await fetch('/question/all', {
      headers: {
        Authentication: 'Bearer '
      }
    });
    return await resp.json();
  }

  return (
      <Container>
        <Router>
          <Navigation/>
          <Switch>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/topics">
              <Topics topics={topics}/>
            </Route>
            <Route path="/newQuestion">
              <NewQuestion topics={topics}/>
            </Route>
            <Route path="/questionList">
              <QuestionList list={questions}/>
            </Route>
          </Switch>
        </Router>
      </Container>
  );
}

export default App;
