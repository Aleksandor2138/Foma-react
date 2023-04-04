import React from 'react';
import { Link } from 'react-router-dom';
import icons from '../../img/icons.svg';
import AboutSCSS from '../../sass/components/main/about.module.scss';
import Container from '../../sass/components/container.module.scss';

export const About = () => {
  return (
    <section className={AboutSCSS.about} id="about">
      <div className={Container.container}>
        <p className={AboutSCSS.aboutText}>
          Центр «ФОМА» — это антикафе для чтения или игры, коворкинг в
          облегченной версии, удобный лекторий, вместительный кинозал,
          концертная площадка для акустической музыки, литературных чтений,
          небольших театральных постановок. Мы приглашаем Вас погрузиться в наше
          пространство, побывать на наших мероприятиях или организовать
          собственное.
        </p>
        <ul className={AboutSCSS.aboutList}>
          <li className={AboutSCSS.aboutItem}>
            <Link to="/coworking" className={AboutSCSS.aboutLink}>
              <div className={AboutSCSS.aboutBorderIcon}>
                <svg className={AboutSCSS.aboutIcon}>
                  <use href={icons + `#icon-desktop`}></use>
                </svg>
              </div>
              <h2 className={AboutSCSS.aboutTitle}>Коворкинг</h2>
              <p className={AboutSCSS.aboutPar}>
                Используйте наше пространство для работы или отдыха. Места
                оборудованы подключением 220V. Вкусный чай и ароматный кофе,
                книги и журналы для отдыха и творческого вдохновения.
              </p>
            </Link>
          </li>
          <li className={AboutSCSS.aboutItem}>
            <Link to="/lecturehall" className={AboutSCSS.aboutLink}>
              <div className={AboutSCSS.aboutBorderIcon}>
                <svg className={AboutSCSS.aboutIcon}>
                  <use href={icons + `#icon-lecture`}></use>
                </svg>
              </div>
              <h2 className={AboutSCSS.aboutTitle}>Лекторий</h2>
              <p className={AboutSCSS.aboutPar}>
                Мы используем и предлагаем Вам наше пространство для обучающих
                лекций, мастер-классов, бесед. Разработаны программы встреч для
                групп школьников и студентов по предварительной записи.
              </p>
            </Link>
          </li>
          <li className={AboutSCSS.aboutItem}>
            <Link to="/leisure" className={AboutSCSS.aboutLink}>
              <div className={AboutSCSS.aboutBorderIcon}>
                <svg className={AboutSCSS.aboutIcon}>
                  <use href={icons + `#icon-castle`}></use>
                </svg>
              </div>
              <h2 className={AboutSCSS.aboutTitle}>Досуг</h2>
              <p className={AboutSCSS.aboutPar}>
                У нас можно хорошей детской или молодежной компанией поиграть в
                добрые настольные игры. Или предложить и организовать свой
                вариант доброго интересного досуга.
              </p>
            </Link>
          </li>
          <li className={AboutSCSS.aboutItem}>
            <Link to="/events" className={AboutSCSS.aboutLink}>
              <div className={AboutSCSS.aboutBorderIcon}>
                <svg className={AboutSCSS.aboutIcon}>
                  <use href={icons + `#icon-calendar`}></use>
                </svg>
              </div>
              <h2 className={AboutSCSS.aboutTitle}>Мероприятия</h2>
              <p className={AboutSCSS.aboutPar}>
                У нас множество своих встреч и событий. Они — всегда для Вас в
                календаре. Но мы готовы помочь провести и Ваше мероприятие!
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
