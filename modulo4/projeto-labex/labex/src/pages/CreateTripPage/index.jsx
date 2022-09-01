import React from "react";
import { useNavigate } from "react-router-dom";
import * as C from "./style";
import { useForm } from "../../hook/useForm";
import axios from "axios";
import { BASE_URL } from "../../components/constants/constants";
import {lastPage} from "../../routes/Coordinator"

function CreateTripPage() {
  const navigate = useNavigate();
  const [form, handleInput, clear] = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const createTrip = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays,
    };
    axios
      .post(`${BASE_URL}gabriel/trips`, body, {headers: {auth: token}})
      .then((res) => {
        alert("Viagem criada com sucesso");
        console.log(res.data);
        clear()
      })
      .catch((err) => {
        alert("Ops! Ocorreu um erro ao criar ao criar a viagem");
        console.log(err.response);
      });
    
  };

  return (
    <C.Container>
      <h1>Crie uma viagem</h1>
      <form onSubmit={createTrip}>
        <input
          type="text"
          name="name"
          id="name"
          value={form.name}
          onChange={handleInput}
          placeholder="Nome"
          required
          pattern={"^.{5,}"}
          title={"O nome deve ter no mínimo 5 letras"}
        />
        <input
          type="text"
          name="planet"
          id="planet"
          value={form.planet}
          onChange={handleInput}
          placeholder="Planeta"
        />
        <input
          type="date"
          name="date"
          id="date"
          value={form.date}
          onChange={handleInput}
          placeholder="Data"
        />
        <input
          type="text"
          id="description"
          name="description"
          value={form.description}
          onChange={handleInput}
          placeholder="Descrição"
        />
        <input
          type="number"
          id="durationInDays"
          name="durationInDays"
          value={form.durationInDays}
          onChange={handleInput}
          placeholder="Duração em dias"
        />

        <C.ButtonArea>
          <button onClick={() => lastPage(navigate)}>Voltar</button>
          <button>Enviar</button>
        </C.ButtonArea>
      </form>
    </C.Container>
  );
}

export default CreateTripPage;
