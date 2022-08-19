import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// all pages import
// import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn";
import AllCompanies from "./pages/admin/AllCompanies";
import AllUsers from "./pages/admin/AllUsers";
import EdituserRole from "./pages/admin/adminEdits/EdituserRole";
import Profile from "./pages/UserProfile/Profile";
import Editprofile from "./pages/UserProfile/Editprofile";
import UserCompanies from "./pages/user/UserCompanies";
import EditComapny from "./pages/user/UserEdits/EditComapny";
import DeleteCompany from "./pages/user/UserEdits/DeleteCompany";
import AddnewCompany from "./pages/user/AddnewCompany";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route exact path="signin" element={<SignIn />}></Route>
                <Route
                  exact
                  path="admin-allCompanies"
                  element={<AllCompanies />}
                ></Route>
                <Route
                  exact
                  path="admin-allUsers"
                  element={<AllUsers />}
                ></Route>
                <Route
                  exact
                  path="admin-userEdits"
                  element={<EdituserRole />}
                ></Route>
                <Route exact path="profile" element={<Profile />}></Route>
                <Route
                  exact
                  path="Edit-profile"
                  element={<Editprofile />}
                ></Route>
                <Route
                  exact
                  path="user-companies"
                  element={<UserCompanies />}
                ></Route>
                <Route
                  exact
                  path="Edit-company"
                  element={<EditComapny />}
                ></Route>
                <Route
                  exact
                  path="delete-company"
                  element={<DeleteCompany />}
                ></Route>
                <Route
                  exact
                  path="Add-company"
                  element={<AddnewCompany />}
                ></Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
