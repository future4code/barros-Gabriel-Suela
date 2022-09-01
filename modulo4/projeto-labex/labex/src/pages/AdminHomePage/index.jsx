import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProtectedPage } from "../../hook/useProtectedPage";
import useRequestData from "../../hook/useRequestData";
import { BASE_URL } from "../../components/constants/constants";
import * as C from "./style";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import { goToTripDetails, lastPage, newTrips } from "../../routes/Coordinator";
import { Header } from "../../components/Header";
import { MenuMobile } from "../../components/MenuMobile";

function AdminHomePage() {
  useProtectedPage();
  const [data] = useRequestData(`${BASE_URL}gabriel/trips`);
  const navigate = useNavigate();
  const [menuIsVisible, setMenuIsVisible] = useState(true)  

  useEffect(()=>{
    setMenuIsVisible(false)
  },[])

  const reload = () => {
    window.location.reload();
  };

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const deleteTrip = (id) => {
    const token = localStorage.getItem("token");
    axios
      .delete(`${BASE_URL}gabriel/trips/${id}`, { headers: { auth: token } })
      .then((res) => {
        alert("Viagem deletada com sucesso");
        reload();
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
          <p onClick={() => goToTripDetails(navigate, item.id)}>{item.name}</p>
          <FaTrash color="orange" onClick={() => deleteTrip(item.id)}></FaTrash>
        </C.Card>
      </div>
    ));
  return (
    <>
     <MenuMobile 
    menuIsVisible={menuIsVisible}
    setMenuIsVisible={setMenuIsVisible}
    
    />
    <Header setMenuIsVisible={setMenuIsVisible}/>
    
    <C.Container>
      <h1>Painel administrativo</h1>
      <C.ButtonArea>
        <button onClick={() => lastPage(navigate)}>Voltar</button>

        <button onClick={logOut}>Logout</button>
      </C.ButtonArea>
      <div>{tripsList}</div>
      <a onClick={() => newTrips(navigate)}>Criar viagem</a>
    </C.Container>
    </>
  );
}

export default AdminHomePage;
