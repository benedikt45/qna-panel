import Navigation from "./Navigation";
import {BrowserRouter as Router, Route, Switch, useRouteMatch} from "react-router-dom";
import QuestionList from "./QuestionList";
import NewQuestion from "./NewQuestion";
import {useEffect, useState} from "react";


function Main(props) {

  let {path} = useRouteMatch();

  const [data, setData] = useState({"questions": [], "topics": []});
  const [needUpdate, setNeedUpdate] = useState(true);

  useEffect(() => {
    async function fetchData() {
      let responseQ = await fetch("/question/all");
      if (!responseQ.ok) {
        throw new Error(responseQ.statusText);
      }
      let questions = await responseQ.json();

      let responseT = await fetch("/question/topics");
      if (!responseT.ok) {
        throw new Error(responseT.statusText);
      }
      let topics = await responseT.json();

      setData({"questions": questions, "topics": topics});
      setNeedUpdate(false);
    }

    if (needUpdate) {
      fetchData();
    }
  });


  return (
      <>
        <Navigation>
          {props.username}
        </Navigation>
        <Switch>
          <Route path={`${path}/questions`}>
            <QuestionList questions={data.questions}/>
          </Route>
          <Route path={`${path}/new`}>
            <NewQuestion topics={data.topics} handleClick={() => {
              setNeedUpdate(true)
            }}/>
          </Route>
        </Switch>
      </>
  )
}

export default Main;