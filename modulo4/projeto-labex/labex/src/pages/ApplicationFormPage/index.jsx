import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../HomePage/style";
import * as C from "./style";
import useRequestData from "../../hook/useRequestData";
import { BASE_URL } from "../../components/constants/constants";
import axios from "axios";
import { useForm } from "../../hook/useForm";
import { lastPage } from "../../routes/Coordinator";

function ApplicationFormPage() {
  const [data] = useRequestData(`${BASE_URL}gabriel/trips`);
  const [form, handleInput, clear] = useForm({
    id: "",
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const applyToTrip = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_URL}gabriel/trips/${form.trip}/apply`, {
        name: form.name,
        age: form.age,
        applicationText: form.applicationText,
        profession: form.profession,
        country: form.country,
      })
      .then((res) => {
        alert("Usuário adicionado a viagem!");
        window.location.reload()
      })
      .catch((err) => {
        console.log(err.response);
        alert("Ops! Algo deu errado");
      });
    clear();
  };

  const tripsList =
    data &&
    data.map((item, index) => (
      <option key={index} value={item.id}>
        {item.name} - {item.planet}
      </option>
    ));

  const navigate = useNavigate();

  return (
    <C.Container>
      <h1>Inscreva-se para uma viagem</h1>

      <form onSubmit={applyToTrip}>
        <select value={form.trip} name="trip" id="trip" onChange={handleInput}>
          {tripsList}
        </select>
        <input
          type="text"
          placeholder="Nome"
          name="name"
          value={form.name}
          onChange={handleInput}
        ></input>
        <input
          type="number"
          placeholder="Idade"
          name="age"
          value={form.age}
          onChange={handleInput}
        ></input>
        <input
          type="text"
          placeholder="Texto de Candidatura"
          name="applicationText"
          value={form.applicationText}
          onChange={handleInput}
        ></input>
        <input
          type="text"
          placeholder="Profissão"
          name="profession"
          value={form.occupation}
          onChange={handleInput}
        ></input>
        <select
          name="country"
          value={form.country}
          onChange={handleInput}
        >
          <option selected="selected">Selecione o pais</option>
          <option value='Brasil'>Brasil</option>
        </select>

        <C.ButtonArea>
          <Button>Enviar</Button>
          <Button onClick={() => lastPage(navigate)}>Voltar</Button>
        </C.ButtonArea>
      </form>
    </C.Container>
  );
}

export default ApplicationFormPage;
