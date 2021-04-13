import React, {useEffect, useState} from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function QuestionList(props) {

  const onPageItems = 50;
  const [allClick, setAllClick] = useState(false);

  const [currentPage, setPage] = useState(1);

  const [localList, setList] = useState(props.list.slice(0, onPageItems * currentPage + 1));
  useEffect(() => {
    setList(props.list.slice(0, onPageItems * currentPage + 1));
  }, [props.list, currentPage]);

  function handleNextOnclick() {
    setPage(currentPage + 1);
  }

  function handleAllOnclick() {
    setList(props.list);
    setAllClick(true);
  }

  return (
      <>
        {localList.map((item) => {
          return (
              <ListGroup horizontal="md" className="my-2">
                <ListGroup.Item>{item.question}</ListGroup.Item>
                <ListGroup.Item>{item.answer}</ListGroup.Item>
                <ListGroup.Item>{item.topic}</ListGroup.Item>
              </ListGroup>
          )
        })}

        {allClick ? null : <>
            <Button onClick={handleNextOnclick} variant="primary">Дальше...</Button>
            <Button onClick={handleAllOnclick} variant="primary">Все</Button>
          </>}

      </>
  )
}

export default QuestionList;