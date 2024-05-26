import Styles from './CartItem.module.scss';
import axios from 'axios';
import { endpoints } from '../../../api/config';
export const CartItem = ({ item, setCartItems }) => {
  const handleClickDelete = async (item) => {
    await axios.delete(`${endpoints.cart}/${item.id}`);
    setCartItems((prev) => prev.filter((obj) => obj.id !== item.id));
  };
  return (
    <div className={Styles['cart-item']}>
      <img src={item.image} alt="" className={Styles['cart-item__image']} width={70} height={70} />
      <div className={Styles['cart-item__info']}>
        <h3 className={Styles['cart-item__title']}>{item.title}</h3>
        <span className={Styles['cart-item__price']}>
          {item.price} {item.currency}
        </span>
      </div>
      <button className={Styles['cart-item__delete-button']} onClick={() => handleClickDelete(item)}>
        <img src="/img/actions/delete.svg" alt="" className={Styles['cart-item__delete-image']} width={32} height={32} />
      </button>
    </div>
  );
};
