import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Head = styled(AppBar)`
  background: #14222e;
`;
    
const Tabs = styled(NavLink)`
  color: #ffffff !important;
  margin-right: 20px;
  text-decoration: none;
  font-size: 20px;
  Z-index: 99999
`;

const NavBar = () => {
    
    return (
        <Head position="static">
            <Toolbar>
                <Tabs to="./" exact>Home</Tabs>
                <Tabs to="all" exact>All Users</Tabs>
                <Tabs to="add" exact>Add User</Tabs>
            </Toolbar>
        </Head>
    )
}

export default NavBar;