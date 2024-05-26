import Styles from './Header.module.scss';
import { Logo } from '../../ui/Logo';
import { NavUser } from '../NavUser';
import { Drawer } from '../Drawer';
import { useState } from 'react';
export const Header = ({ cartItems, setCartItems, orderId, setOrderId }) => {
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
        <Drawer closeDrawer={closeDrawer} cartItems={cartItems} setCartItems={setCartItems} orderId={orderId} setOrderId={setOrderId} drawerIsOpened={drawerIsOpened} />
      </div>
    </header>
  );
};
