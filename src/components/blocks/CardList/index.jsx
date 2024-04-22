import Styles from './CardList.module.scss';
import { Card } from '../../ui/Card';
export const CardList = ({ sneakers, searchValue, cartItems }) => {
  return (
    <ul className={Styles['product-list']}>
      {sneakers
        .filter((sneaker) => sneaker.title.toLowerCase().includes(searchValue.toLowerCase()))
        .map((sneaker) => (
          <li className="product-list__item" key={sneaker.id}>
            <Card sneaker={sneaker} />
          </li>
        ))}
    </ul>
  );
};
