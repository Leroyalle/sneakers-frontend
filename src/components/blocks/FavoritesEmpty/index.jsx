import Styles from './FavoritesEmpty.module.scss';
import { Button } from '../../ui/Button';
export const FavoritesEmpty = () => {
  return (
    <div className={Styles['favorites-empty']}>
      <img src="/img/state/favoritesEmpty.png" alt="" className={Styles['favorites-empty__image']} />
      <h3 className={Styles['favorites-empty__title']}>Закладок нет :</h3>
      <p className={Styles['favorites-empty__text']}>Вы ничего не добавляли в закладки</p>
      <Button>Вернуться назад</Button>
    </div>
  );
};
