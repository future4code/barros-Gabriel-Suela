import React from "react";
import * as C from "./style";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hook/useForm";
import axios from "axios";
import { BASE_URL } from "../constants/constants";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginPage() {

  const [body, handleInput, ] = useForm({email:"", password:""});
  const navigate = useNavigate();
  console.log(body)

  const logIn = (e) => {
    axios
      .post(`${BASE_URL}gabriel/login`, body)
      .then((res) => {
        alert("LOGADO");
        toast.error(res.data);
      })
      .catch((err) => {
        toast.error(err.response);
      });
      
    e.preventDefault();
  };

  const goLogIn = () => {
    navigate("/admin/trips/list");
  };

  const lastPage = () => {
    navigate(-1);
  };

  return (
    <C.Container>
      <C.FormArea>
        <h1>Login </h1>

        <form onSubmit={logIn}>
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            value={body.email}
            onChange={handleInput}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />

          <input
            name="password"
            type="password"
            placeholder="Senha"
            value={body.password}
            onChange={handleInput}
            required
          />
          <C.ButtonArea>
          <button onClick={lastPage} >Voltar</button>
          <button >Entrar</button>
          </C.ButtonArea>
          
        </form>
        
      </C.FormArea>
    </C.Container>
  );
}

export default LoginPage;
