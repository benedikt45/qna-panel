import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import "./Login.scss";
import {useState} from "react";


function Login(props) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function login(e) {
    e.preventDefault();
    let response = await fetch("/user/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        "username": username,
        "password": password
      })
    })

    if (!response.ok) {
      let text = await response.text();
      return alert("Ошибка входа! "+ text);
    } else {
      let json = await response.json();
      props.handleLoggedIn(true, json.username);
    }
  }

  return (
      <div class="login__wrapper">
        <Form className="login__form" onSubmit={login}>
          <FormControl type="text" placeholder="Логин" className=" mr-sm-1" required
                       value={username} onChange={(event) => setUsername(event.target.value)}
          />
          <FormControl type="text" placeholder="Пароль" className=" mr-sm-1" required
                       value={password} onChange={(event) => setPassword(event.target.value)}
          />
          <Form.Row>
            <Col column sm={8}>
              <Button type="submit" variant="success" block>Войти</Button>
            </Col>
            <Col column sm={4}>
              <Button variant="primary" block>Регистрация</Button>
            </Col>
          </Form.Row>
        </Form>
      </div>
  )
}

export default Login;