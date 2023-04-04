import React from 'react';
// import { Link } from 'react-router-dom';
import icons from '../img/icons.svg';
import FooterSCSS from '../sass/components/footer.module.scss';
import Container from '../sass/components/container.module.scss';
import SocListSCSS from '../sass/components/soc-list.module.scss';
export const Footer = () => {
  return (
    <footer className={FooterSCSS.footer}>
      <div className={`${Container.container} ${FooterSCSS.footer_container}`}>
        <svg className={FooterSCSS.logoIcon} width="150" height="150">
          <use href={icons + `#icon-foma`}></use>
        </svg>
        <ul className={FooterSCSS.contaсtList} id="contacts">
          <li className={FooterSCSS.contactItem}>
            <a
              className={`${FooterSCSS.contaсtLink} ${FooterSCSS.contaсtLink_color}`}
              href="https://goo.gl/maps/LT1MVRiGkyiVFvuW9"
            >
              <svg className={FooterSCSS.contaсtIcon} width="20" height="20">
                <use href={icons + `#icon-location`}></use>
              </svg>
              Харьков, ул. Университетская, 10
            </a>
          </li>
          <li className={FooterSCSS.contactItem}>
            <a className={FooterSCSS.contaсtLink} href="tel:+380671910010">
              <svg className={FooterSCSS.contaсtIcon} width="20" height="20">
                <use href={icons + `#icon-phone`}></use>
              </svg>
              +38 067 19 100 10
            </a>
          </li>
          <li className={FooterSCSS.contactItem}>
            <a
              className={FooterSCSS.contaсtLink}
              href="mailto:foma.kharkov@gmail.com"
            >
              <svg className={FooterSCSS.contaсtIcon} width="20" height="20">
                <use href={icons + `#icon-mail`}></use>
              </svg>
              foma.kharkov@gmail.com
            </a>
          </li>
        </ul>
        <div>
          <h3 className={FooterSCSS.footerSoc_text}>Присоединяйтесь</h3>
          <ul className={SocListSCSS.socList}>
            <li className={SocListSCSS.socItem}>
              <a
                href="https://t.me/foma_kharkov_ua"
                className={`${SocListSCSS.socLink} ${SocListSCSS.socLink_fill}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg className={SocListSCSS.socIcon} width="25" height="25">
                  <use href={icons + `#icon-telegram`}></use>
                </svg>
              </a>
            </li>
            <li className={SocListSCSS.socItem}>
              <a
                href="https://www.facebook.com/fomakharkov/"
                className={`${SocListSCSS.socLink} ${SocListSCSS.socLink_fill}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg className={SocListSCSS.socIcon} width="25" height="25">
                  <use href={icons + `#icon-facebook`}></use>
                </svg>
              </a>
            </li>
            <li className={SocListSCSS.socItem}>
              <a
                href="https://www.youtube.com/channel/UCA_32A5iv1FfTkYNzfB-J1Q/featured"
                className={`${SocListSCSS.socLink} ${SocListSCSS.socLink_fill}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg className={SocListSCSS.socIcon} width="25" height="25">
                  <use href={icons + `#icon-youtube`}></use>
                </svg>
              </a>
            </li>
            <li className={SocListSCSS.socItem}>
              <a
                href="https://instagram.com/foma_kharkov_ua?igshid=YmMyMTA2M2Y="
                className={`${SocListSCSS.socLink} ${SocListSCSS.socLink_fill}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg className={SocListSCSS.socIcon} width="25" height="25">
                  <use href={icons + `#icon-instagram`}></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className={FooterSCSS.copyright}>
        Copyright © 2022. Created by Alexandr Pavlenko.
      </p>
    </footer>
  );
}