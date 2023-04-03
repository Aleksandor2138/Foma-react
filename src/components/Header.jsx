import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import icons from '../img/icons.svg';
import HeaderSCSS from '../sass/components/header.module.scss';
import Container from '../sass/components/container.module.scss';
import MobMenu from '../sass/components/mob-menu.module.scss';

export const Header = click => {
  const [menu, setMenu] = useState(false);

  const handleClick = event => {
    setMenu(!menu);
    event.stopPropagation();
  };
  return (
    <header className={HeaderSCSS.header}>
      <div className={`${Container.container} ${HeaderSCSS.header_container}`}>
        <Link to="/" onClick={click}>
          <svg className={HeaderSCSS.logoIcon} width="115" height="36">
            <use href={icons + '#icon-foma-header'}></use>
          </svg>
        </Link>
        <nav className={HeaderSCSS.nav}>
          <ul className={HeaderSCSS.nav__list}>
            <li className={HeaderSCSS.nav__item}>
              <Link to="/#about" className={HeaderSCSS.nav__link}>
                О нас
              </Link>
            </li>
            <li className={HeaderSCSS.nav__item}>
              <Link to="/#calendar" className={HeaderSCSS.nav__link}>
                Календарь
              </Link>
            </li>
            <li className={HeaderSCSS.nav__item}>
              <Link to="/#activity" className={HeaderSCSS.nav__link}>
                Деятельность
              </Link>
            </li>
            <li className={HeaderSCSS.nav__item}>
              <Link to="/coworking" className={HeaderSCSS.nav__link}>
                Коворкинг
              </Link>
            </li>
            <li className={HeaderSCSS.nav__item}>
              <Link to="/#video" className={HeaderSCSS.nav__link}>
                Видео
              </Link>
            </li>
            <li className={HeaderSCSS.nav__item}>
              <Link to="/#gallery" className={HeaderSCSS.nav__link}>
                Галерея
              </Link>
            </li>
            <li className={HeaderSCSS.nav__item}>
              <Link to="/charity" className={HeaderSCSS.nav__link}>
                Поддержать нас
              </Link>
            </li>
            <li className={HeaderSCSS.nav__item}>
              <Link to="/#contacts" className={HeaderSCSS.nav__link}>
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className={MobMenu.menuOpenBtn}
          type="button"
          onClick={handleClick}
        >
          <svg width="24" height="24">
            <use href={icons + '#icon-menu'}></use>
          </svg>
        </button>
        {menu ? (
          <div className={MobMenu.mobMenu} onClick={handleClick}>
            <div
              className={`${Container.container} ${MobMenu.mobMenu_container}`}
            >
              <button className={MobMenu.menuCloseBtn} type="button">
                <svg width="24" height="24">
                  <use href={icons + '#icon-close_40px'}></use>
                </svg>
              </button>
              <nav>
                <ul>
                  <li className={MobMenu.mobNavItem}>
                    <Link to="/#about" className={MobMenu.mobNavLink}>
                      О нас
                    </Link>
                  </li>
                  <li className={MobMenu.mobNavItem}>
                    <Link to="/#calendar" className={MobMenu.mobNavLink}>
                      Календарь
                    </Link>
                  </li>
                  <li className={MobMenu.mobNavItem}>
                    <Link to="/#activity" className={MobMenu.mobNavLink}>
                      Деятельность
                    </Link>
                  </li>
                  <li className={MobMenu.mobNavItem}>
                    <Link to="/coworking" className={MobMenu.mobNavLink}>
                      Коворкинг
                    </Link>
                  </li>
                  <li className={MobMenu.mobNavItem}>
                    <Link to="/#video" className={MobMenu.mobNavLink}>
                      Видео
                    </Link>
                  </li>
                  <li className={MobMenu.mobNavItem}>
                    <Link to="/#gallery" className={MobMenu.mobNavLink}>
                      Галерея
                    </Link>
                  </li>
                  <li className={MobMenu.mobNavItem}>
                    <Link to="/charity" className={MobMenu.mobNavLink}>
                      Поддержать нас
                    </Link>
                  </li>
                  <li className={MobMenu.mobNavItem}>
                    <Link to="/#contacts" className={MobMenu.mobNavLink}>
                      Контакты
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className={MobMenu.mobContaсt__bottom}>
                <ul className={MobMenu.mobContaсt__list}>
                  <li className={MobMenu.mobContaсt__item}>
                    <a
                      className={MobMenu.mobContaсt__tel}
                      href="tel:+380671910010"
                    >
                      +38 067 19 100 10
                    </a>
                  </li>
                  <li className={MobMenu.mobContaсt__item}>
                    <a
                      className={MobMenu.mobContaсt__email}
                      href="mailto:foma.kharkov@gmail.com"
                    >
                      foma.kharkov@gmail.com
                    </a>
                  </li>
                </ul>
                <ul className={MobMenu.mobSoc__list}>
                  <li className={MobMenu.mobSoc__item}>
                    <a
                      href="https://t.me/foma_kharkov_ua"
                      className={MobMenu.mobSoc__link}
                    >
                      Telegram
                    </a>
                  </li>
                  <li className={MobMenu.mobSoc__item}>
                    <a
                      href="https://www.facebook.com/fomakharkov/"
                      className={MobMenu.mobSoc__link}
                    >
                      Facebook
                    </a>
                  </li>
                  <li className={MobMenu.mobSoc__item}>
                    <a
                      href="https://www.youtube.com/channel/UCA_32A5iv1FfTkYNzfB-J1Q/featured"
                      className={MobMenu.mobSoc__link}
                    >
                      YouTube
                    </a>
                  </li>
                  <li className={MobMenu.mobSoc__item}>
                    <a
                      href="https://instagram.com/foma_kharkov_ua?igshid=YmMyMTA2M2Y="
                      className={MobMenu.mobSoc__link}
                    >
                      instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
};
