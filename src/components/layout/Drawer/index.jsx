import React from 'react';
import Styles from './Drawer.module.scss';
import { useState } from 'react';
import axios from 'axios';
import { endpoints } from '../../../api/config';
import { CartItem } from '../../ui/CartItem';
import { Total } from '../../blocks/Total';
import { CartEmpty } from '../../blocks/CartEmpty';
import { AppContext } from '../../../context/AppContext';
export const Drawer = ({
  closeDrawer,
  cartItems,
  setCartItems,
  orderId,
  setOrderId,
  drawerIsOpened,
}) => {
  const { setOrders } = React.useContext(AppContext);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const stopPropagation = (event) => {
    event.stopPropagation();
  };
  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(endpoints.orders, { items: cartItems });
      setOrders((prev) => [...prev, ...data.items]);
      setOrderId(data.id);
      cartItems.forEach(async (item) => {
        await axios.delete(`${endpoints.cart}/${item.id}`);
      });
      setIsOrderComplete(true);
      setCartItems([]);
    } catch (error) {
      console.error('Ошибка при оформлении заказа:', error);
    }
    setIsLoading(false);
  };
  return (
    <div
      className={`${Styles.overlay} ${drawerIsOpened && Styles.overlay__visible}`}
      onClick={closeDrawer}>
      <div className={Styles.drawer} onClick={stopPropagation}>
        <div className={Styles['drawer__head']}>
          <h2 className={Styles['drawer__title']}>Корзина</h2>
          <button className="drawer__close" onClick={closeDrawer}>
            <img src="/img/actions/delete.svg" alt="" width={32} height={32} />
          </button>
        </div>
        {cartItems.length ? (
          <>
            <div className={Styles['drawer__items']}>
              {cartItems.map((item) => {
                return (
                  <div key={item.id}>
                    <CartItem item={item} cartItems={cartItems} setCartItems={setCartItems} />
                  </div>
                );
              })}
            </div>
            <div className={Styles['drawer__bottom']}>
              <Total cartItems={cartItems} />
              <button
                className={Styles['drawer__button']}
                onClick={onClickOrder}
                disabled={isLoading}>
                Оформить заказ
              </button>
            </div>
          </>
        ) : (
          <CartEmpty
            closeDrawer={closeDrawer}
            isOrderComplete={isOrderComplete}
            orderId={orderId}
          />
        )}
      </div>
    </div>
  );
};
