import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Talk from "../../assets/Talk.svg";
import Arrow from "../../assets/Right.svg";

import axios from "axios";

import H1 from "../../components/Title"
import ContainerItens from "../../components/Container Itens";
import Button from "../../components/Button"

import {
  Container,
  Image,
  InputLabel,
  Input,
} from "./styles";

function App() {

  const [users, setUsers] = useState([]);
  const nextPage = useNavigate();

  const inputName = useRef();
  const inputAge = useRef();
  

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:5000/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);  
    nextPage ('/usuarios');
  }

return (
    <Container>
      <Image alt="logo-image" src={Talk} />
      <ContainerItens>
        <H1>Olá!</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />
        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />
        <Button onClick={addNewUser}>
          Cadastrar
          <img alt="arrow" src={Arrow} />
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default App;
