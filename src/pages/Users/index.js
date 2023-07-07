import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"

import People from "../../assets/Users.svg";
import Arrow from "../../assets/Right.svg";
import Trash from "../../assets/Trash.svg"

import axios from "axios";
import H1 from "../../components/Title"
import ContainerItens from "../../components/Container Itens";
import Button from "../../components/Button";

import {
  Container,
  Image,
  User,
 } from "./styles";

function Users() {

  const [users, setUsers] = useState([]); 
  const navigate = useNavigate();

  useEffect (() =>{
    async function fetchUsers (){
      const {data: newUsers} = await axios.get("http://localhost:5000/users")

      setUsers(newUsers);
    }
    fetchUsers()
  }, [])

  async function deleteUser(userId) {
    await axios.delete (`http://localhost:5000/users/${userId}`)
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  }

  function navigatePage(){
    navigate ("/")
  }
  return (
    <Container>
      <Image alt="logo-image" src={People} />
      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>
               <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p> {user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img alt="trash" src={Trash} />
              </button>
            </User>
          ))}
        </ul>
        <Button goBack= {true} onClick={navigatePage}> <img alt="arrow" src={Arrow} />
          Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default Users;
