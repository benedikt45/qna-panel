import Navigation from "./Navigation";
import {BrowserRouter as Router, Route, Switch, useRouteMatch} from "react-router-dom";
import QuestionList from "./QuestionList";
import NewQuestion from "./NewQuestion";
import {useEffect, useState} from "react";


function Main(props) {

  let {path} = useRouteMatch();

  return (
      <>
        <Navigation>
          {props.username}
        </Navigation>
        <Switch>
          <Route path={`${path}/questions`}>
            <QuestionList questions={props.data.questions}/>
          </Route>
          <Route path={`${path}/new`}>
            <NewQuestion topics={props.data.topics} handleUpdateData={props.handleUpdateData}/>
          </Route>
        </Switch>
      </>
  )
}

export default Main;