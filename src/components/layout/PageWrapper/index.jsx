import Styles from './PageWrapper.module.scss';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../Header';
import { MainPage } from '../../pages/MainPage';
import { Favorites } from '../../pages/Favorites';
import { Orders } from '../../pages/Orders';
import { useState, useEffect } from 'react';
import { endpoints } from '../../../api/config';
import { AppContext } from '../../../context/AppContext';

export const PageWrapper = () => {
  const [sneakers, setSneakers] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [preloaderIsVisible, setPreloaderIsVisible] = useState(true);
  const [orderId, setOrderId] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setPreloaderIsVisible(true);
      const ordersResponse = await axios.get(endpoints.orders);
      const cartResponse = await axios.get(endpoints.cart);
      const favoritesResponse = await axios.get(endpoints.favorites);
      const sneakersResponse = await axios.get(endpoints.sneakers);

      setPreloaderIsVisible(false);
      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setOrders(ordersResponse.data.map((obj) => obj.items).flat());
      setSneakers(sneakersResponse.data);
    }
    fetchData();
  }, []);
  const totalPrice = cartItems.reduce((sum, obj) => sum + Number(obj.price.replace(' ', '')), 0);
  return (
    <AppContext.Provider
      value={{
        searchValue,
        cartItems,
        setCartItems,
        favorites,
        setFavorites,
        totalPrice,
        orders,
        setOrders,
      }}>
      <div className="page-wrapper">
        <Header
          cartItems={cartItems}
          setCartItems={setCartItems}
          orderId={orderId}
          setOrderId={setOrderId}
        />
        <main className={Styles.main}>
          <Routes>
            <Route
              path="/"
              element={
                <MainPage
                  sneakers={sneakers}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  favorites={favorites}
                  setFavorites={setFavorites}
                  preloaderIsVisible={preloaderIsVisible}
                />
              }
            />
            <Route
              path="/favorites"
              element={
                <Favorites
                  sneakers={favorites}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  favorites={favorites}
                  setFavorites={setFavorites}
                  preloaderIsVisible={preloaderIsVisible}
                />
              }
            />
            <Route path="/orders" element={<Orders cartItems={cartItems} />} />
          </Routes>
        </main>
      </div>
    </AppContext.Provider>
  );
};
