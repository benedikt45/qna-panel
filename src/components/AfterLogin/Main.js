import Navigation from "./Navigation";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import QuestionList from "./QuestionList";
import NewQuestion from "./NewQuestion";
import NotFound from "./NotFound";


function Main(props) {

  let {path} = useRouteMatch();

  return (
      <>
        <Navigation handleLogout={props.handleLogout}>
          {props.username}
        </Navigation>
        <Switch>
          <Route path={`${path}/questions`}>
            <QuestionList questions={props.data.questions} handleUpdateData={props.handleUpdateData}/>
          </Route>
          <Route path={`${path}/new`}>
            <NewQuestion topics={props.data.topics} handleUpdateData={props.handleUpdateData}/>
          </Route>
          <Route path={`${path}/*`}>
            <NotFound />
          </Route>
        </Switch>
      </>
  )
}

export default Main;