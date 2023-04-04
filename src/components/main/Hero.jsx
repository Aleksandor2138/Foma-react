import React from 'react';
import icons from '../../img/icons.svg';
import HeroSCSS from '../../sass/components/main/hero.module.scss';
import SocListSCSS from '../../sass/components/soc-list.module.scss';
import Container from '../../sass/components/container.module.scss';
import VH from '../../sass/var/visually-hidden.module.scss';

export const Hero = () => {
  return (
    <section className={HeroSCSS.hero}>
      <h2 className={VH.visuallyHidden}>слайдер</h2>
      <div className={`${Container.container} ${HeroSCSS.heroContainer}`}>
        <ul className={HeroSCSS.heroSlaides}>
          <li>
            <p className={HeroSCSS.flip_x}>Коворкинг</p>
          </li>
          <li>
            <p className={HeroSCSS.flip_x}>Лекторий</p>
          </li>
          <li>
            <p className={HeroSCSS.flip_x}>Антикафе</p>
          </li>
          <li>
            <p className={HeroSCSS.flip_x}>Концертный зал</p>
          </li>
        </ul>
        <div className={HeroSCSS.heroContent}>
          <ul className={`${SocListSCSS.socList} ${HeroSCSS.heroSoc}`}>
            <li className={SocListSCSS.socItem}>
              <a
                href="https://t.me/foma_kharkov_ua"
                className={`${SocListSCSS.socLink} ${SocListSCSS.socLink_fill} ${HeroSCSS.heroSoc_link}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg
                  className={`${SocListSCSS.socIcon} ${HeroSCSS.heroSoc_icon}`}
                  width="25"
                  height="25"
                >
                  <use href={icons + `#icon-telegram`}></use>
                </svg>
              </a>
            </li>
            <li className={SocListSCSS.socItem}>
              <a
                href="https://www.facebook.com/fomakharkov/"
                className={`${SocListSCSS.socLink} ${SocListSCSS.socLink_fill} ${HeroSCSS.heroSoc_link}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg
                  className={`${SocListSCSS.socIcon} ${HeroSCSS.heroSoc_icon}`}
                  width="25"
                  height="25"
                >
                  <use href={icons + `#icon-facebook`}></use>
                </svg>
              </a>
            </li>
            <li className={SocListSCSS.socItem}>
              <a
                href="https://www.youtube.com/channel/UCA_32A5iv1FfTkYNzfB-J1Q/featured"
                className={`${SocListSCSS.socLink} ${SocListSCSS.socLink_fill} ${HeroSCSS.heroSoc_link}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg
                  className={`${SocListSCSS.socIcon} ${HeroSCSS.heroSoc_icon}`}
                  width="25"
                  height="25"
                >
                  <use href={icons + `#icon-youtube`}></use>
                </svg>
              </a>
            </li>
            <li className={SocListSCSS.socItem}>
              <a
                href="https://instagram.com/foma_kharkov_ua?igshid=YmMyMTA2M2Y="
                className={`${SocListSCSS.socLink} ${SocListSCSS.socLink_fill} ${HeroSCSS.heroSoc_link}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg
                  className={`${SocListSCSS.socIcon} ${HeroSCSS.heroSoc_icon}`}
                  width="25"
                  height="25"
                >
                  <use href={icons + `#icon-instagram`}></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};