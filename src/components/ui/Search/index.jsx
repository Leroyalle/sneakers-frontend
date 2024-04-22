import Styles from './Search.module.scss';
export const Search = ({ searchValue, setSearchValue }) => {
  const getSearchValue = (e) => {
    setSearchValue(e.target.value);
  };
  const resetSearchValue = () => {
    setSearchValue('');
  };
  return (
    <div className={Styles['search__wrapper']}>
      <label className="visually-hidden" htmlFor="search"></label>
      <input className={Styles.search} type="text" id="search" placeholder="Поиск..." value={searchValue} onChange={getSearchValue} />
      <button
        className={Styles['search__button-clear']}
        onClick={() => {
          resetSearchValue();
        }}>
        <img src="/img/actions/delete.svg" alt="" className={Styles['search__image-clear']} />
      </button>
    </div>
  );
};
