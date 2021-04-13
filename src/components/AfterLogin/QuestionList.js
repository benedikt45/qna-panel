import React, {useEffect, useState} from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function QuestionList(props) {

  return (
      <>
        {props.questions.map((item) => {
          return (
              <ListGroup className="my-2" key={item._id}>
                <ListGroup.Item sm={6}>{item.question}</ListGroup.Item>
                <ListGroup.Item sm={4}>{item.answer}</ListGroup.Item>
                <ListGroup.Item sm={2}>{item.topic}</ListGroup.Item>
              </ListGroup>
          )
        })}
      </>
  )
}

export default QuestionList;