import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProtectedPage } from "../../hook/useProtectedPage";
import useRequestData from "../../hook/useRequestData";
import { BASE_URL } from "../constants/constants";
import * as C from "./style";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import { lastPage, newTrips } from "../../routes/Coordinator";

function AdminHomePage() {
  const [data, reload, setReload] = useRequestData(`${BASE_URL}gabriel/trips`);

  useProtectedPage();

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const deleteTrip = (id) => {
    const token = localStorage.getItem("token");
    axios
      .delete(`${BASE_URL}trips/${id}`, {
        headers: {
          "Content-type": "application/json",
          auth: token,
        },
      })
      .then((res) => {
        alert("Viagem deletada com sucesso");
        setReload(!reload);
      })
      .catch((err) => {
        alert("Ops! Algo deu errado");
        console.log(err.response);
      });
  };

  const tripsList =
    data &&
    data.map((item) => (
      <div key={item.id} value={item.id}>
        <C.Card>
          <p>{item.name}</p>
          <FaTrash color="orange" onClick={() => deleteTrip(item.id)}></FaTrash>
        </C.Card>
      </div>
    ));
  return (
    <C.Container>
      <h1>Admin control</h1>
      <C.ButtonArea>
        <button onClick={() => lastPage(navigate)}>Voltar</button>
        <button onClick={() => newTrips(navigate)}>Criar Viagem</button>
        <button onClick={logOut}>Logout</button>
      </C.ButtonArea>
      <div>{tripsList}</div>
    </C.Container>
  );
}

export default AdminHomePage;
