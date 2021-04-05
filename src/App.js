import "./App.css";
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
import Topics from "./components/Topics.js";
import Navigation from "./components/Navigation";
import About from "./components/About";

function App() {
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
          </Switch>
        </Router>
      </Container>
  );
}

export default App;
