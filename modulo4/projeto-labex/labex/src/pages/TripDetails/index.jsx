import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProtectedPage } from "../../hook/useProtectedPage";
import useRequestData from "../../hook/useRequestData";
import { BASE_URL } from "../../components/constants/constants";
import { useState } from "react";
import axios from "axios";
import * as C from "./style";
import { lastPage } from "../../routes/Coordinator";
import { MenuMobile } from "../../components/MenuMobile";
import { Header } from "../../components/Header";

function TripDetails() {
  const [tripDetails, setTripDetails] = useState({});
  let { id } = useParams();
  const navigate = useNavigate();
  const [menuIsVisible, setMenuIsVisible] = useState(true);

  const token = localStorage.getItem("token");

  useProtectedPage();
  useEffect(() => {
    getTripDetail();
    setMenuIsVisible(false)
  }, []);

  const approveCandidate = (candidateId, choice) => {
    const body = {
      approve: choice,
    };
    axios
      .put(
        `${BASE_URL}gabriel/trips/${id}/candidates/${candidateId}/decide`,
        body,
        { headers: { auth: token } }
      )
      .then((res) => {
        if (choice === true) {
          alert("Candidato aprovado!");
        } else {
          alert("Candidato reprovado");
        }
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const getTripDetail = () => {
    axios
      .get(`${BASE_URL}gabriel/trip/${id}`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        setTripDetails(res.data.trip);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const candidatesList =
    tripDetails.candidates &&
    tripDetails.candidates.map((item) => {
      return (
        <C.Card key={item.id}>
          <h3>Candidatos</h3>
          <p>Nome: {item.name}</p>
          <p>Idade: {item.age}</p>
          <p>Candidatura: {item.applicationText}</p>
          <p>Profissão: {item.profession}</p>
          <p>Pais: {item.country}</p>
          <C.ButtonArea>
            <button onClick={() => approveCandidate(item, true)}>
              Aprovar
            </button>
            <button onClick={() => approveCandidate(item, false)}>
              Reprovar
            </button>
          </C.ButtonArea>
        </C.Card>
      );
    });

  const approvedCandidates =
    tripDetails.approved &&
    tripDetails.approved.map((item) => {
      return (
        <C.Card key={item.id}>
          <h3>Candidato aprovado</h3>
          <p>
            Nome: {item.name}
          </p>
        </C.Card>
      );
    });

  return (
    <>
    <MenuMobile
      menuIsVisible={menuIsVisible}
      setMenuIsVisible={setMenuIsVisible}
    />
    <Header setMenuIsVisible={setMenuIsVisible} />

    <C.Container>
      <h1>Detalhes da viagem:</h1>
      <h1>{tripDetails.name}</h1>

      <section>
        <p>Descrição: {tripDetails.description}</p>
        <p>Planeta: {tripDetails.planet}</p>
        <p>Data: {tripDetails.date}</p>
        <p>Duração: {tripDetails.durationInDays} dias</p>
      </section>

      {candidatesList}
      {approvedCandidates}
      <button onClick={() => lastPage(navigate)}>Voltar</button>
    </C.Container>
    </>
  );
}

export default TripDetails;
