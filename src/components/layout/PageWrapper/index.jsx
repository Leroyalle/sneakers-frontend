import Styles from './PageWrapper.module.scss';
import axios from 'axios';
import { Header } from '../Header';
import { MainPage } from '../../pages/MainPage';
import { useState, useEffect } from 'react';
export const PageWrapper = () => {
  const [sneakers, setSneakers] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    axios
      .get('https://661934b09a41b1b3dfbf387a.mockapi.io/items')
      .then((response) => {
        setSneakers(response.data);
      })
      .catch((error) => {
        return error;
      });
  }, []);
  useEffect(() => {
    axios.get('https://661934b09a41b1b3dfbf387a.mockapi.io/cart').then((response) => {
      setCartItems(response.data);
    });
  }, []);
  return (
    <div className="page-wrapper">
      <Header cartItems={cartItems} />
      <main className={Styles.main}>
        <MainPage sneakers={sneakers} searchValue={searchValue} setSearchValue={setSearchValue} cartItems={cartItems} />
      </main>
    </div>
  );
};
