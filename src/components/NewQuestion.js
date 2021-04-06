import {Component} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";


class NewQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "question": "",
      "answer": "",
      "topic": ""
    };
  }

  handleOnChange = async (e) => {
    const target = e.target;
    await this.setState({[target.name]: target.value});
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    let response = await fetch('/question/add', {
      method: 'POST',
      body: this.state,
    });
    if (!response.ok) {
      throw Error(response.statusText);
    }
    let result = await response.json();
  }


  render() {
    return (
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="formQuestion">
              <Form.Label>Вопрос</Form.Label>
              <Form.Control
                  required
                  value={this.state.question}
                  name="question"
                  onChange={this.handleOnChange}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formAnswer">
              <Form.Label>Ответ</Form.Label>
              <Form.Control
                  required
                  value={this.state.answer}
                  name="answer"
                  onChange={this.handleOnChange}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formTopic">
              <Form.Label>Тема</Form.Label>
              <Form.Control as="select"
                            required
                            name="topic"
                            onChange={this.handleOnChange}
              >
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Group as={Row}>
            <Col sm={{span: 10}}>
              <Button type="submit">Сохранить</Button>
            </Col>
          </Form.Group>
        </Form>
    )
  }
}

export default NewQuestion;