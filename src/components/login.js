import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import {Component, useState} from "react";
import {LinkContainer} from "react-router-bootstrap";


function Login() {

  [isLogin, setIsLogin] = useState(false);

  function login() {

  }

  return (
      <Form inline onSubmit={login}>
        <FormControl type="text" placeholder="Логин" className=" mr-sm-1" />
        <FormControl type="text" placeholder="Пароль" className=" mr-sm-1" />
        <Button type="submit">Войти</Button>
      </Form>
  )
}