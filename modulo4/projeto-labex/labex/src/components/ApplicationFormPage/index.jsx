import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../HomePage/style";
import * as C from "./style";
import useRequestData from "../../hook/useRequestData";
import { BASE_URL } from "../constants/constants";
import axios from "axios";
import { useForm } from "../../hook/useForm";

function ApplicationFormPage() {
  const [data] = useRequestData(`${BASE_URL}gabriel/trips/list`);

  const [form, handleInput] = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const applyToTrip = (e) => {
    axios
      .post(`${BASE_URL}gabriel/trips/:id/apply`, {
        name: form.name,
        age: form.age,
        applicationText: form.applicationText,
        profession: form.profession,
        country: form.country,
      })
      .then((res) => {
        alert("Usuário adicionado");
        console.log(res.data);
      })
      .catch((err) => {
        alert("Algo deu errado");
        console.log(err.response);
      });

      e.preventDefault()
  };

  const tripsList = data&&data.map((item)=>(
    
    <option key={item.id}>{item.name} </option>
  
))

  const navigate = useNavigate();

  const lastPage = () => {
    navigate(-1);
  };

  return (
    <C.Container>
      <h1>Inscreva-se para uma viagem</h1>

      <form onSubmit={applyToTrip}>
        <select name="trips" id="" onChange={handleInput}>
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
        ></select>  
        
      <div>
        <Button onClick={lastPage}>Voltar</Button>
        <Button>Enviar</Button>
      </div>
      </form>

    
    </C.Container>
  );
}

export default ApplicationFormPage;
