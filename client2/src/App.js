import AllUsers from './Component/AllUsers';
import AddUser from './Component/AddUser';
import EditUser from './Component/EditUser';
// import NavBar from './Component/NavBar';
import NotFound from './Component/NotFound'; 
import Home from './Component/home/Home'
import Footer from './Component/home/Footer'
// import Loginsignup from './Component/Loginsignup/Loginsignup';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        {/* <Route path="/login-signup" element={<Loginsignup />} /> */}
        <Route element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
