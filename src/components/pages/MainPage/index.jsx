import Styles from './MainPage.module.scss';
import { CardList } from '../../blocks/CardList';
import { Title } from '../../ui/Title';
import { Search } from '../../ui/Search';
export const MainPage = ({ sneakers, searchValue, setSearchValue, cartItems }) => {
  return (
    <>
      <section className={Styles.category}>
        <div className={Styles['category__inner']}>
          <Title>Все кроссовки</Title>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <CardList sneakers={sneakers} searchValue={searchValue} cartItems={cartItems} />
      </section>
    </>
  );
};
