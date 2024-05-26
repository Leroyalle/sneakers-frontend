import React from 'react';
import Styles from './Orders.module.scss';
import { CardList } from '../../blocks/CardList';
import { Title } from '../../ui/Title';
import { FavoritesEmpty } from '../../blocks/FavoritesEmpty';
import { AppContext } from '../../../context/AppContext';
export const Orders = ({ cartItems }) => {
  const { orders } = React.useContext(AppContext);
  console.log(orders);
  return (
    <section className={Styles.category}>
      {console.log(orders)}
      {orders.length > 0 ? (
        <>
          <div className={Styles['category__inner']}>
            <Title>Мои покупки</Title>
          </div>

          <CardList sneakers={orders} cartItems={cartItems} />
        </>
      ) : (
        <FavoritesEmpty />
      )}
    </section>
  );
};
