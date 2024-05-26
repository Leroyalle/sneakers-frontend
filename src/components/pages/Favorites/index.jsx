import Styles from './Favorites.module.scss';
import { CardList } from '../../blocks/CardList';
import { Title } from '../../ui/Title';
import { FavoritesEmpty } from '../../blocks/FavoritesEmpty';
export const Favorites = ({ sneakers, cartItems, setCartItems, favorites, setFavorites, preloaderIsVisible }) => {
  return (
    <section className={Styles.category}>
      {favorites.length > 0 ? (
        <>
          <div className={Styles['category__inner']}>
            <Title>Закладки</Title>
          </div>
          <CardList sneakers={sneakers} cartItems={cartItems} setCartItems={setCartItems} favorites={favorites} setFavorites={setFavorites} preloaderIsVisible={preloaderIsVisible} />
        </>
      ) : (
        <FavoritesEmpty />
      )}
    </section>
  );
};
