import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 4%;
  left: 0;
  background-color: #181818;
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
  gap: 20px;
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

const AddnewCompany = () => {
  const [companyname, setCompanyname] = useState("");
  const [companyaddress, setCompanyaddress] = useState("");
  const [permonthSallary, setpermonthSallary] = useState("");
  const [startingDate, setStartingdate] = useState("");
  const [endingDate, setEndingdate] = useState("");
  const navigate = useNavigate();
  const handleADD = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/company/add", {
        companyname,
        companyaddress,
        permonthSallary,
        startingDate,
        endingDate,
      });
      navigate("/user-companies");
    } catch (error) {
      alert(error.response.data.message);
      navigate("/signin");
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>Add Company</Title>
        <Input
          type="text"
          placeholder="Company name"
          onChange={(e) => setCompanyname(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Company Address"
          onChange={(e) => setCompanyaddress(e.target.value)}
        />
        <Input
          type="text"
          placeholder="sallary/moth"
          onChange={(e) => setpermonthSallary(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Starting Date"
          onChange={(e) => setStartingdate(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Ending Date"
          onChange={(e) => setEndingdate(e.target.value)}
        />
        <Button onClick={handleADD}>Add Company</Button>
      </Wrapper>
    </Container>
  );
};

export default AddnewCompany;
