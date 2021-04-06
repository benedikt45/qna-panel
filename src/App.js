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
//import QuestionList from "./components/QuestionList.js";


function App() {
  function test() {

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
              <Topics/>
            </Route>
            <Route path="/newQuestion">
              <NewQuestion/>
            </Route>
            {/*<Route path="/questionList">*/}
            {/*  <QuestionList/>*/}
            {/*</Route>*/}
          </Switch>
        </Router>
      </Container>
  );
}

export default App;
