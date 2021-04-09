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
import {returnGetJSON} from "./utils/utils.js"


function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // if (topics.length === 0) {
      setLoading(true);
    // } else {
    //   setLoading(false);
    // }
  }, []);

  const [topics, setTopics] = useState([]);
  useEffect(() => {
    if (loading) {
      returnGetJSON('/question/topics').then((result) => {
        setTopics(result);
      })
      setLoading(false);
    }
  }, [loading]);


  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    if (loading) {
      returnGetJSON('/question/all').then((result) => {
        setQuestions(result);
      })
      setLoading(false);
    }
  }, [loading]);

  const handleAddNew = () => {
    setLoading(true);
  }

  return (
      <Container>
        <Router>
          <Navigation/>
          <Switch>
            {/*<Route path="/">*/}
            {/*  <About/>*/}
            {/*</Route>*/}
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/topics">
              <Topics topics={topics}/>
            </Route>
            <Route path="/newQuestion">
              <NewQuestion topics={topics} handleClick={handleAddNew}/>
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
