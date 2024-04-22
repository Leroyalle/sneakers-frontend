import Styles from './Logo.module.scss';
export const Logo = () => {
  return (
    <a className={Styles.logo} href="/">
      <img src="/img/logo.png" alt="Логотип" width={40} height={40} />
      <div className={Styles['logo__info']}>
        <h2 className={Styles['logo__title']}>REACT SNEAKERS</h2>
        <p className={Styles['logo__text']}>Магазин лучших кроссовок</p>
      </div>
    </a>
  );
};
