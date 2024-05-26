import Styles from './CartEmpty.module.scss';
import { Button } from '../../ui/Button';
export const CartEmpty = ({ closeDrawer, isOrderComplete, orderId }) => {
  return (
    <div className={Styles['cart-empty']}>
      <img className={Styles['cart-empty__image']} src={isOrderComplete ? '/img/state/orderComplete.png' : '/img/state/cartEmpty.png'} alt="Пустая корзина" />
      <h3 className={Styles['cart-empty__title']}>{isOrderComplete ? 'Заказ оформлен' : 'Корзина пустая'}</h3>
      <p className={Styles['cart-empty__text']}>{isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}</p>
      <Button closeDrawer={closeDrawer}>Вернуться назад</Button>
    </div>
  );
};
