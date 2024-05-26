import React from 'react';
import axios from 'axios';
import Styles from './Card.module.scss';
import { useState, useEffect } from 'react';
import { endpoints } from '../../../api/config';
import { AppContext } from '../../../context/AppContext';
export const Card = ({ sneaker }) => {
  const { cartItems, setCartItems, favorites, setFavorites } = React.useContext(AppContext);
  const { image = 'default-image-path', title = 'Товар не найден', price = 'Free', currency = 'руб.' } = sneaker;
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const handleClickFavorite = async () => {
    if (favorites.find((item) => Number(item.id) === Number(sneaker.id))) {
      await axios.delete(`${endpoints.favorites}/${sneaker.id}`);
      setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(sneaker.id)));
      setIsFavorited(false);
    } else {
      const { data } = await axios.post(endpoints.favorites, sneaker);
      setFavorites((prev) => [...prev, data]);
      setIsFavorited(true);
    }
  };

  useEffect(() => {
    if (favorites) {
      const itemInFavorites = favorites.find((item) => item.id === sneaker.id);
      setIsFavorited(!!itemInFavorites);
    }
  }, [favorites, sneaker.id]);

  const handleClickAdd = async (item) => {
    try {
      if (cartItems.find((obj) => Number(obj.id) === Number(item.id))) {
        await axios.delete(`${endpoints.cart}/${item.id}`);
        setCartItems((prev) => prev.filter((obj) => Number(obj.id) !== Number(item.id)));
        setIsAdded(false);
      } else {
        setCartItems((prev) => [...prev, item]);
        const { data } = await axios.post(endpoints.cart, item);
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.id === data.id) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
        setIsAdded(true);
      }
    } catch (error) {
      console.error('Ошибка при добавлении в корзину:', error);
    }
  };

  useEffect(() => {
    const itemInCart = cartItems.find((item) => item.id === sneaker.id);
    setIsAdded(!!itemInCart);
  }, [cartItems, sneaker.id]);

  return (
    <div className={Styles.card}>
      <button className={Styles['card__favorites-button']} onClick={() => handleClickFavorite(sneaker)}>
        <img src={isFavorited ? '/img/actions/liked.svg' : '/img/actions/unliked.svg'} alt="В избранное" className={Styles['card__favorites-image']} width={32} height={32} />
      </button>
      <img src={image} alt="Кроссовок" className="card__image" />
      <h3 className={Styles['card__title']}>
        <a href="#!">{title}</a>
      </h3>
      <div className={Styles['card__wrapper']}>
        <div className={Styles['card__price-wrapper']}>
          <span className={Styles['card__price-text']}>Цена:</span>
          <span className={Styles['card__price']}>
            {price} {currency}
          </span>
        </div>
        <button className="card__button" onClick={() => handleClickAdd(sneaker)}>
          <img src={isAdded ? '/img/actions/isAdded.svg' : '/img/actions/add.svg'} alt="" className="card__button-image" width={32} height={32} />
        </button>
      </div>
    </div>
  );
};
