import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

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
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [adharnum, setAdhar] = useState("");
  const [employment, setEmployment] = useState("");
  const [Sallaryaspect, setSallary] = useState("");
  const [proffession, setProffession] = useState("");
  const [userdata, setUserdata] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resdata = await axios.get(`/user/${currentUser._id}`);
        setUserdata(resdata.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [currentUser]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      let payload = {
        firstname: firstname === "" ? userdata.firstname : firstname,
        lastname: lastname === "" ? userdata.lastname : lastname,
        contact: contact === "" ? userdata.number : contact,
        address: address === "" ? userdata.address : address,
        adharnum: adharnum === "" ? userdata.adharnum : adharnum,
        employment: employment === "" ? userdata.employment : employment,
        Sallaryaspect:
          Sallaryaspect === "" ? userdata.Sallaryaspect : Sallaryaspect,
        proffession: proffession === "" ? userdata.proffession : proffession,
      };
      await axios.put(`/user/${userdata._id}`, payload);
      navigate("/profile");
    } catch (error) {
      alert("Your are not logged in Please login first");
      navigate("/signin");
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>Edit Your Self</Title>
        <Input
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstname(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastname(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Mobile number"
          onChange={(e) => setContact(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Adhar number"
          onChange={(e) => setAdhar(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Employment (employed, unemployed)"
          onChange={(e) => setEmployment(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Aspected Sallary"
          onChange={(e) => setSallary(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Proffession (seprated by , coma)"
          onChange={(e) => setProffession(e.target.value)}
        />
        <Button onClick={handleUpdate}>Update Data</Button>
      </Wrapper>
    </Container>
  );
};

export default Editprofile;
