import Styles from './Title.module.scss';
export const Title = ({ children }) => {
  return <h1 className={Styles.title}>{children}</h1>;
};
