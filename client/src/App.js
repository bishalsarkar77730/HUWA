import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// all pages import
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import AllCompanies from "./pages/admin/AllCompanies";
import AllUsers from "./pages/admin/AllUsers";
import EdituserRole from "./pages/admin/adminEdits/EdituserRole";
import AdminProfile from "./pages/admin/adminProfile/AdminProfile";
import Editadminprofile from "./pages/admin/adminEdits/Editadminprofile";

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
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route exact path="signin" element={<SignIn />} />
                  <Route
                    exact
                    path="admin-allCompanies"
                    element={<AllCompanies />}
                  />
                </Route>
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
                <Route
                  exact
                  path="admin-profile"
                  element={<AdminProfile />}
                ></Route>
                <Route
                  exact
                  path="Admin-Edit"
                  element={<Editadminprofile />}
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
