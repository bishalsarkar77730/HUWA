import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  width: 300px;
  height: 250px;
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

const DeleteCompany = () => {
  const navigate = useNavigate();
  const [serialnum, setSerialnum] = useState("");
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`/company/${serialnum}`);
      navigate("/user-companies");
    } catch (error) {
      alert(
        "please copy the serial number of the company you want to delete and paste it here any try again"
      );
      navigate("/user-companies");
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>Edit User Role</Title>
        <Input
          type="text"
          placeholder="Serial_Num"
          onChange={(e) => setSerialnum(e.target.value)}
        />
        <Button onClick={handleUpdate}>Delete Company</Button>
      </Wrapper>
    </Container>
  );
};

export default DeleteCompany;
