import axios from "axios";
import React, { useEffect, useState } from "react";

import styled from "styled-components";

const CardInfo = styled.img`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  height: 600px;
  width: 650px;
  margin: 0 auto;
  margin: 20px;
  filter: brightness(0.5) opacity(1);
  border: none;
  
`;

const LikeArea = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
 
`;

const BotaoLike = styled.button`
  text-align: center;
  width: 90px;
  border-radius: 50%;
  height: 90px;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 3rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const BotaoDislike = styled.button`
  text-align: center;
  width: 90px;
  border-radius: 50%;
  height: 90px;
  cursor: pointer;
  border: 1px solid red;
  border: none;
  font-size: 3rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const InfoPerson = styled.p`
  padding: 20px;
  font-size: 2rem;
  color:white;
  margin-left: 20px;
  position: absolute;
  margin-top: -150px;
`;

const BioPerson = styled.p`
  padding-left: 20px;
  padding-top: 10px;
  font-size: 1.1rem;
  margin-left: 20px;
  color: white;
  height: 100%;
  position: absolute;
  margin-top: -100px;
  height: 80px;
  width: 500px;
`;

const Reset = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
  & h4{
    font-size: 1.5rem;
    padding: 20px;
  }
`

const ResetButton = styled.button`
  align-items: center;
  background-image: linear-gradient(135deg, #f34079 40%, #fc894d);
  border: 0;
  border-radius: 10px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 700;
  height: 54px;
  justify-content: center;
  letter-spacing: .4px;
  line-height: 1;
  max-width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 3px;
  text-decoration: none;
  text-transform: uppercase;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`

function tinderCard() {
  const [profile, setProfile] = useState(undefined);

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const getProfileToChoose = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"
      )
      .then((res) => {
        setProfile(res.data.profile);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const choosePerson = (profileId, choice) => {
    const body = {
      id: profileId,
      choice: choice,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person",
        body
      )
      .then((res) => {
        if (body.choice && res.data.isMatch) alert("Deu Match");
        getProfileToChoose();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const clearProfile = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear"
      )
      .then((res) => {
        alert("Perfis resetados");
        getProfileToChoose();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const profileCard = profile ? (
    <div>
      <figure>
      <CardInfo src={profile.photo} />
      <InfoPerson>
        {profile.name}, {profile.age}
      </InfoPerson>
      <BioPerson>{profile.bio}.</BioPerson>
      </figure>
      <LikeArea>
        <BotaoLike
          onClick={() => {
            choosePerson(profile.id, true);
          }}
        >
          💚
        </BotaoLike>
        <BotaoDislike
          onClick={() => {
            choosePerson(profile.id, false);
          }}
        >
          ❌
        </BotaoDislike>
      </LikeArea>
    </div>
  ) : (
    <Reset>
      <h4>Acabaram os perfis</h4>
      <ResetButton
        onClick={() => {
          clearProfile();
        }}
      >
        Resetar
      </ResetButton>
    </Reset>
  );

  return <div>{profileCard}</div>;
}

export default tinderCard;
