import React,{ useState, useEffect }  from 'react';
import icons from '../img/icons.svg';
import TopSCSS from '../sass/components/top.module.scss';

export const Top = () => {
  const [toTopBtn, setToTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setToTopBtn(true);
      } else setToTopBtn(false);
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      {toTopBtn && (
        <button
          className={TopSCSS.topBtn}
          onClick={scrollUp}
          title="Go to top"
        >
          <svg className={TopSCSS.top__svg}>
            <use href={icons + '#icon-topUp'}></use>
          </svg>
        </button>
      )}
    </>
  );
}