import Styles from './Header.module.scss';
import { Logo } from '../../ui/Logo';
import { NavUser } from '../NavUser';
import { Drawer } from '../Drawer';
import { useState } from 'react';
export const Header = ({ cartItems }) => {
  const [drawerIsOpened, setDrawerIsOpened] = useState(false);
  const openDrawer = () => {
    setDrawerIsOpened(true);
  };
  const closeDrawer = () => {
    setDrawerIsOpened(false);
  };
  return (
    <header className={Styles.header}>
      <div className={Styles['header__wrapper']}>
        <Logo />
        <NavUser openDrawer={openDrawer} />
        {drawerIsOpened && <Drawer closeDrawer={closeDrawer} cartItems={cartItems} />}
      </div>
    </header>
  );
};
