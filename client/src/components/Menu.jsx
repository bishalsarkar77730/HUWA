import React from "react";
import styled from "styled-components";
import HuwaLogo from "../utils/img/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import PreviewIcon from "@mui/icons-material/Preview";
import PersonIcon from "@mui/icons-material/Person";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import FactoryIcon from "@mui/icons-material/Factory";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link } from "react-router-dom";
const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
  z-index: 99999;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 30px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
    border-radius: 10px;
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={HuwaLogo} />
            HUWA
          </Logo>
          <Item>
            <HomeIcon />
            Home
          </Item>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <AddBusinessIcon />
            Add Company
          </Item>
        </Link>
        <Link
          to="/user-companies"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <PreviewIcon />
            User Company
          </Item>
        </Link>
        <Hr />
        <Link
          to="/profile"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <PersonIcon />
            Profile
          </Item>
        </Link>
        <Hr />
        <Title>Admin Access Only</Title>
        <Link
          to="/admin-allUsers"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <PeopleAltIcon />
            All Users
          </Item>
        </Link>
        <Link
          to="/admin-allCompanies"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <FactoryIcon />
            All Company
          </Item>
        </Link>
        <Hr />
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
