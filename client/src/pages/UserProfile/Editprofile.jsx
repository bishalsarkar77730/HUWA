import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 400px;
  height: auto;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
`;

const Title = styled.h1`
  text-align: center;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  padding: 10px;
  border-radius: 20px;
  background-color: transparent;
  z-index: 999;
`;
const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};

  &:hover {
    background-color: #eaeded;
    color: black;
  }
`;
const Editprofile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const proff = currentUser.proffession;
  const proff2 = proff.toString(", ");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [adhar, setAdhar] = useState("");
  const [employment, setEmployment] = useState("");
  const [sallary, setSallary] = useState("");
  const [proffession, setProffession] = useState("");
  const navigate = useNavigate();
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      let payload = {
        firstname: firstname === "" ? currentUser.firstname : firstname,
        lastname: lastname === "" ? currentUser.lastname : lastname,
        contact: contact === "" ? currentUser.number : contact,
        address: address === "" ? currentUser.address : address,
        adhar: adhar === "" ? currentUser.adharnum : adhar,
        employment: employment === "" ? currentUser.employment : employment,
        sallary: sallary === "" ? currentUser.Sallaryaspect : sallary,
        proffession: proffession === "" ? currentUser.proffession : proffession,
      };
      await axios.put(`/user/${currentUser._id}`, payload);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>Edit Your Self</Title>
        <Input
          type="text"
          placeholder={currentUser.firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <Input
          type="text"
          placeholder={currentUser.lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <Input
          type="text"
          placeholder={currentUser.number}
          onChange={(e) => setContact(e.target.value)}
        />
        <Input
          type="text"
          placeholder={currentUser.address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Input
          type="text"
          placeholder={currentUser.adharnum}
          onChange={(e) => setAdhar(e.target.value)}
        />
        <Input
          type="text"
          placeholder={currentUser.employment}
          onChange={(e) => setEmployment(e.target.value)}
        />
        <Input
          type="text"
          placeholder={currentUser.Sallaryaspect}
          onChange={(e) => setSallary(e.target.value)}
        />
        <Input
          type="text"
          placeholder={proff2}
          onChange={(e) => setProffession(e.target.value)}
        />
        <Button onClick={handleUpdate}>Update Data</Button>
      </Wrapper>
    </Container>
  );
};

export default Editprofile;
