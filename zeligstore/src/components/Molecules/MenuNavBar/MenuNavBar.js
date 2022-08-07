import {useAppTheme} from 'context/AppTheme';
import SunFilled from 'components/Atoms/Icons/SunFilled';
import MoonFilled from 'components/Atoms/Icons/MoonFilled';
import LoginIconFilled from 'components/Atoms/Icons/LoginIconFilled';
import MagnifierFilled from 'components/Atoms/Icons/MagnifierFilled';

import {StyleMenuItem, StyleMenuNavbar} from './style';

const LinkMenu = ({children}) => {
  return (
    <StyleMenuItem style={{fontSize: '20px', textAlign: 'center'}} color="transparent" labelColor="text">
      {children}
    </StyleMenuItem>
  );
};


const MenuNavbar = () => {
  const {themeToggle, theme} = useAppTheme();

  return (
    <StyleMenuNavbar>
      <LinkMenu>New Releases</LinkMenu>
      <LinkMenu>Men</LinkMenu>
      <LinkMenu>Women</LinkMenu>
      <LinkMenu>Kids</LinkMenu>
      <LinkMenu>Sales</LinkMenu>
      <LinkMenu>Gifts</LinkMenu>
      
      <StyleMenuItem color="transparent" labelColor="text" onClick={themeToggle} style={{fontSize: 18}}>
        {theme === 'light' ? <MoonFilled/> : <SunFilled/>}
      </StyleMenuItem>
      <StyleMenuItem color="transparent" labelColor="text">
        <MagnifierFilled></MagnifierFilled>
      </StyleMenuItem>
      <StyleMenuItem color="transparent" labelColor="text">
        <LoginIconFilled></LoginIconFilled>
      </StyleMenuItem>
    </StyleMenuNavbar>
  );
};

export default MenuNavbar;

