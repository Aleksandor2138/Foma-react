import React from 'react';
import { Link } from 'react-router-dom';
import ActivitySCSS from '../../sass/components/main/activity.module.scss';
import Container from '../../sass/components/container.module.scss';

export const Activity = () => {
  
  return (
    <section className={ActivitySCSS.activity} id="activity">
      <div className={Container.container}>
        <ul className={ActivitySCSS.activity__list}>
          <li className={ActivitySCSS.activity__item}>
            <Link to="/signLanguage " className={ActivitySCSS.activity__link}>
              <h2 className={ActivitySCSS.activity__title}>
                Сурдоперевод в Церкви
              </h2>
              <div className={ActivitySCSS.activity__overlay}>
                <picture>
                  <source
                    srcSet={require('../../img/activity/deaf_desk.jpg')}
                    media="(min-width:1280px )"
                  />
                  <source
                    srcSet={require('../../img/activity/deaf_tab.jpg')}
                    media="(min-width:768px )"
                  />
                  <source
                    srcSet={require('../../img/activity/deaf_mob.jpg')}
                    media="(min-width:480px )"
                  />
                  <img
                    className={ActivitySCSS.activity__img}
                    src={require('../../img/activity/deaf.jpg')}
                    alt="Cурдоперевод"
                  />
                </picture>
                <p className={ActivitySCSS.activity__par}>
                  В Благовещенском соборе Харькова есть община глухих, для
                  которых совершается служба с сурдопереводом. О. Сергий Веклич
                  владеет жестовым языком и может помочь неслышащим людям.
                </p>
              </div>
            </Link>
          </li>
          <li className={ActivitySCSS.activity__item}>
            <Link to="/excursion " className={ActivitySCSS.activity__link}>
              <h2 className={ActivitySCSS.activity__title}>
                Организация экскурсий
              </h2>
              <div className={ActivitySCSS.activity__overlay}>
                <picture>
                  <source
                    srcSet={require('../../img/activity/excursion-des.jpg')}
                    media="(min-width:1280px )"
                  />
                  <source
                    srcSet={require('../../img/activity/excursion-tab.jpg')}
                    media="(min-width:768px )"
                  />
                  <source
                    srcSet={require('../../img/activity/excursion-mob.jpg')}
                    media="(min-width:480px )"
                  />
                <img
                  className={ActivitySCSS.activity__img}
                    src={require('../../img/activity/excursion.jpg')}
                  alt="Экскурсии"
                />
                </picture>
                <p className={ActivitySCSS.activity__par}>
                  Мы готовы организовать для вашей группы экскурсии по
                  центральным храмам Харькова, по епархиальному
                  Церковно-историческому музею, а также виртуальную
                  фото-экскурсию в Старый Харьков.{' '}
                </p>
              </div>
            </Link>
          </li>
          <li className={ActivitySCSS.activity__item}>
            <Link
              to="/theologicalCourses "
              className={ActivitySCSS.activity__link}
            >
              <h2 className={ActivitySCSS.activity__title}>
                Богословско-педагогические курсы
              </h2>
              <div className={ActivitySCSS.activity__overlay}>
                <picture>
                  <source
                    srcSet={require('../../img/activity/theologian-desk.jpg')}
                    media="(min-width:1280px )"
                  />
                  <source
                    srcSet={require('../../img/activity/theologian-tab.jpg')}
                    media="(min-width:768px )"
                  />
                  <source
                    srcSet={require('../../img/activity/theologian-mob.jpg')}
                    media="(min-width:480px )"
                  />
                <img
                  className={ActivitySCSS.activity__img}
                    src={require('../../img/activity/theologian.jpg')}
                  alt="Богословские курсы"
                />
                </picture>
                <p className={ActivitySCSS.activity__par}>
                  В нашем центре действуют Богословско-педагогические курсы. По
                  понедельникам и средам проходят лекции катехизаторского
                  направления — изучение Библии, православного вероучения,
                  церковной истории и богослужения. По пятницам — лекции,
                  ориентированные на педагогику. Вы можете прийти
                  вольнослушателем на интересующую Вас лекцию или поступить на
                  весь учебный цикл.
                </p>
              </div>
            </Link>
          </li>
          <li className={ActivitySCSS.activity__item}>
            <Link
              to="/conversationPriest "
              className={ActivitySCSS.activity__link}
            >
              <h2 className={ActivitySCSS.activity__title}>
                Беседы с батюшкой
              </h2>
              <div className={ActivitySCSS.activity__overlay}>
                <picture>
                  <source
                    srcSet={require('../../img/activity/convers-desk.jpg')}
                    media="(min-width:1280px )"
                  />
                  <source
                    srcSet={require('../../img/activity/convers-tab.jpg')}
                    media="(min-width:768px )"
                  />
                  <source
                    srcSet={require('../../img/activity/convers-mob.jpg')}
                    media="(min-width:480px )"
                  />
                <img
                  className={ActivitySCSS.activity__img}
                    src={require('../../img/activity/convers.jpg')}
                  alt="Беседы с батюшкой"
                />
                </picture>
                <p className={ActivitySCSS.activity__par}>
                  На каком году брака нужно венчаться? Зачем человеку крёстные
                  родители на самом деле? Какое точное количество имён
                  необходимо давать ребёнку при крещении? Беседы на эти и другие
                  темы практической стороны церковной жизни регулярно проводятся
                  в нашем просветительском центре.
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}