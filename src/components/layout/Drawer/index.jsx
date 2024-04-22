import Styles from './Drawer.module.scss';
import { CartItem } from '../../ui/CartItem';
export const Drawer = ({ closeDrawer, cartItems }) => {
  const stopPropagation = (event) => {
    event.stopPropagation();
  };
  return (
    <div className={Styles.overlay} onClick={closeDrawer}>
      <div className={Styles.drawer} onClick={stopPropagation}>
        <div className={Styles['drawer__head']}>
          <h2 className={Styles['drawer__title']}>Корзина</h2>
          <button className="drawer__close" onClick={closeDrawer}>
            <img src="/img/actions/delete.svg" alt="" width={32} height={32} />
          </button>
        </div>
        <div className={Styles['drawer__items']}>
          {cartItems.map((item) => {
            return (
              <div key={item.id}>
                <CartItem item={item} />
              </div>
            );
          })}
        </div>
        <div className={Styles['drawer__bottom']}>
          <div className={Styles['drawer__total']}>
            <div className={Styles['drawer__total-inner']}>
              <span className={Styles['drawer__total-text']}>Итого:</span>
              <div className={Styles['drawer__total-line']}></div>
              <span className={Styles['drawer__total-value']}>21 498 руб.</span>
            </div>
            <div className={Styles['drawer__total-inner']}>
              <span className={Styles['drawer__total-text']}>Налог:</span>
              <div className={Styles['drawer__total-line']}></div>
              <span className={Styles['drawer__total-value']}>1074 руб.</span>
            </div>
          </div>
          <button className={Styles['drawer__button']}>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
};
