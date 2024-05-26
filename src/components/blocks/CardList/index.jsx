import Styles from './CardList.module.scss';
import { Card } from '../../ui/Card';
import { Preloader } from '../../layout/Preloader';
import { useEffect, useState } from 'react';
export const CardList = ({ sneakers, searchValue = '', preloaderIsVisible }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenWidth]);

  return (
    <ul className={`${Styles['product-list']} ${sneakers.length <= 3 && Styles['jcs']} ${(sneakers.length <= 2) & (screenWidth <= 541) && Styles.jcc} ${(sneakers.length === 3) & (screenWidth <= 768) && Styles['jcc']}`}>
      {preloaderIsVisible
        ? [...Array(8)].map((_, index) => (
            <li className={Styles['product-list__item']} key={`preloader-${index}`}>
              <Preloader />
            </li>
          ))
        : sneakers
            .filter((sneaker) => sneaker.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((sneaker) => (
              <li className={Styles['product-list__item']} key={sneaker.id}>
                <Card sneaker={sneaker} preloaderIsVisible={preloaderIsVisible} />
              </li>
            ))}
    </ul>
  );
};
