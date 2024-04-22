import Styles from './CartItem.module.scss';
export const CartItem = ({ item }) => {
  return (
    <div className={Styles['cart-item']}>
      <img src={item.image} alt="" className={Styles['cart-item__image']} width={70} height={70} />
      <div className={Styles['cart-item__info']}>
        <h3 className={Styles['cart-item__title']}>{item.title}</h3>
        <span className={Styles['cart-item__price']}>{item.price}</span>
      </div>
      <button className={Styles['cart-item__delete-button']}>
        <img src="/img/actions/delete.svg" alt="" className={Styles['cart-item__delete-image']} width={32} height={32} />
      </button>
    </div>
  );
};
