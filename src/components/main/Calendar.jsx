import React from 'react';
import CalendarSCSS from '../../sass/components/main/calendar.module.scss';
import Container from '../../sass/components/container.module.scss';
import translete from '../../img/translete.jpg'

export const Calendar = () => {
  
  return (
    <section className={CalendarSCSS.calendar} id="calendar">
      <div className={Container.container}>
        <h2 className={CalendarSCSS.calendar__header}>Календарь</h2>
        <p className={CalendarSCSS.calendar__par}>
          Подпишитесь на наш{' '}
          <a
            className={CalendarSCSS.calendar__link}
            href="https://calendar.google.com/calendar/embed?src=jjs2hrunceeeii2bfjslupok5c%40group.calendar.google.com&amp;ctz=Europe%2FKiev"
            target="_blank"
            rel="noreferrer noopener"
          >
            Google-calendar
          </a>
          , следите за событиями в{' '}
          <a
            className={CalendarSCSS.calendar__link}
            href="https://t.me/foma_kharkov_ua"
            target="_blank"
            rel="noreferrer noopener"
          >
            Telegram
          </a>
        </p>
        <img
          className={CalendarSCSS.calendar__img}
          src={translete}
          alt="Трансляция"
        />
      </div>
    </section>
  );
}