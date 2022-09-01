import React, { useEffect, useState } from "react";
import * as C from "./style";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hook/useForm";
import axios from "axios";
import { BASE_URL } from "../../components/constants/constants";
import { goToHome } from "../../routes/Coordinator";
import { Header } from "../../components/Header";
import { MenuMobile } from "../../components/MenuMobile";

function LoginPage() {
  const [body, handleInput, clear] = useForm({ email: "", password: "" });
  const navigate = useNavigate();
  const [menuIsVisible, setMenuIsVisible] = useState(true);

  useEffect(() => {
    setMenuIsVisible(false);
  }, []);

  const logIn = (e) => {
    axios
      .post(`${BASE_URL}gabriel/login`, body)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        navigate("/admin/trips/list");
      })
      .catch((err) => {
        alert(err.response);
      });
    clear();
    e.preventDefault();
  };

  return (
    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header setMenuIsVisible={setMenuIsVisible} />

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
              <button onClick={() => goToHome(navigate)}>Voltar</button>
              <button>Entrar</button>
            </C.ButtonArea>
          </form>
        </C.FormArea>
      </C.Container>
    </>
  );
}

export default LoginPage;
