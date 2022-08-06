import { useAppTheme } from 'context/AppTheme';
import SunFilled from 'components/Atoms/Icons/SunFilled';
import MoonFilled from 'components/Atoms/Icons/MoonFilled';
import LoginIconFilled from 'components/Atoms/Icons/LoginIconFilled';
import MagnifierFilled from 'components/Atoms/Icons/MagnifierFilled';

import { StyleMenuItem, StyleMenuNavbar } from './style';


const MenuNavbar = () => {
  const { themeToggle, theme } = useAppTheme();

  return (
    <StyleMenuNavbar>
      <StyleMenuItem color="transparent" labelColor="text" onClick={themeToggle} style={{ fontSize: 18 }}>
        {theme === 'light' ? <MoonFilled /> : <SunFilled />}
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

