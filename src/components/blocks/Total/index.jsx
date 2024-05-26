import React from 'react';
import { AppContext } from '../../../context/AppContext';
import Styles from './Total.module.scss';
export const Total = () => {
  const { totalPrice } = React.useContext(AppContext);
  return (
    <div className={Styles['total']}>
      <div className={Styles['total__inner']}>
        <span className={Styles['total__text']}>Итого:</span>
        <div className={Styles['total__line']}></div>
        <span className={Styles['total__value']}>{totalPrice} руб.</span>
      </div>
      <div className={Styles['total__inner']}>
        <span className={Styles['total__text']}>Налог 5%:</span>
        <div className={Styles['total__line']}></div>
        <span className={Styles['total__value']}>{Math.round((totalPrice / 100) * 5)} руб.</span>
      </div>
    </div>
  );
};
