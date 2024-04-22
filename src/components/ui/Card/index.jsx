import axios from 'axios';
import Styles from './Card.module.scss';
import { useState } from 'react';
export const Card = ({ sneaker }) => {
  const { image = 'default-image-path', title = 'Товар не найден', price = 'Free' } = sneaker;
  const [isAdded, setIsAdded] = useState(false);
  const handleClickAdd = () => {
    axios.post('https://661934b09a41b1b3dfbf387a.mockapi.io/cart', sneaker);

    setIsAdded(true);
  };
  return (
    <div className={Styles.card}>
      <img src="/img/actions/unliked.svg" alt="В избранное" className={Styles['card__loves-image']} width={32} height={32} />
      <img src={image} alt="Кроссовок" className="card__image" />
      <h3 className={Styles['card__title']}>
        <a href="#!">{title}</a>
      </h3>
      <div className={Styles['card__wrapper']}>
        <div className={Styles['card__price-wrapper']}>
          <span className={Styles['card__price-text']}>Цена:</span>
          <span className={Styles['card__price']}>{price}</span>
        </div>
        <button className="card__button" onClick={() => handleClickAdd()}>
          <img src="/img/actions/add.svg" alt="" className="card__button-image" width={32} height={32} />
        </button>
      </div>
    </div>
  );
};
