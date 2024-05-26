import Styles from './Button.module.scss';
export const Button = ({ children, closeDrawer }) => {
  return (
    <button className={Styles.button} onClick={closeDrawer}>
      <img
        src="
  /img/icons/arrow.svg"
        alt=""
        className={Styles['button__image']}
      />
      {children}
    </button>
  );
};
