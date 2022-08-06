import MenuNavbar from 'components/Molecules/MenuNavBar';
import Title from 'components/Atoms/Tittle'
import { StyleNavbar } from './style';

const Navbar = () => {

  return (
    <StyleNavbar>
      <Title color="bgGradiant">ZeligStore</Title>
      <MenuNavbar />
    </StyleNavbar>
  );
};

export default Navbar;
