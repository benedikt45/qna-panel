import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function QuestionList(props) {

  async function handleDelete(idx) {
    try {
      let response = await fetch("/api/question/delete", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
          "id": idx
        })
      })
      if (!response.ok) {
        alert("Ошибка удаления");
        console.log(response.statusText)
      } else {
        props.handleUpdateData();
      }

    } catch (e) {
      throw new Error(e)
    }
  }

  return (
      <>
        {props.questions.map((item) => {
          return (
              <ListGroup className="my-2" key={item._id} horizontal>
                <ListGroup.Item>{item.question}</ListGroup.Item>
                <ListGroup.Item>{item.answer}</ListGroup.Item>
                <ListGroup.Item>{item.topic}</ListGroup.Item>
                <Button variant="danger" onClick={() => {handleDelete(item._id)}}>Удалить</Button>
              </ListGroup>
          )
        })}
      </>
  )
}

export default QuestionList;