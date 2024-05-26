import Styles from './Logo.module.scss';
import { Link } from 'react-router-dom';
export const Logo = () => {
  return (
    <Link className={Styles.logo} to="/">
      <img src="/img/logo.png" alt="Логотип" width={40} height={40} />
      <div className={Styles['logo__info']}>
        <h2 className={Styles['logo__title']}>SNEAKERS SHOP</h2>
        <p className={Styles['logo__text']}>Магазин лучших кроссовок</p>
      </div>
    </Link>
  );
};
