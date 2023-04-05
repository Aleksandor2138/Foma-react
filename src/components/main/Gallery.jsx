import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import GallerySCSS from '../../sass/components/main/gallery.module.scss';
import Container from '../../sass/components/container.module.scss';
import VH from '../../sass/var/visually-hidden.module.scss';

export const Gallery = () => {
  const [toggler, setToggler] = useState(false);
  const clickOpen = () => {
    setToggler(!toggler);
  }
  return (
    <section className={GallerySCSS.gallery} id="gallery">
      <div
        className={`${Container.container} ${GallerySCSS.gallery__container}`}
      >
        <h3 className={VH.visuallyHidden}> Галерея</h3>
        <ul className={GallerySCSS.gallery__list}>
          <li className={GallerySCSS.gallery__item}>
            <img
              src={require('../../img/gallery/galMini/gal-min1.JPG')}
              alt="галерея"
              className={`${GallerySCSS.gallery__img} ${GallerySCSS.gallery__img__small}`}
              onClick={clickOpen}
            />
            <FsLightbox
              toggler={toggler}
              sources={['img/gallery/gal/gal1.JPG']}
            />
          </li>
          <li className={GallerySCSS.gallery__item}>
            <img
              src={require('../../img/gallery/galMini/gal-min2.jpg')}
              alt="галерея"
              className={GallerySCSS.gallery__img}
              onClick={clickOpen}
            />
            <FsLightbox
              toggler={toggler}
              sources={['img/gallery/gal/gal2.jpg']}
            />
          </li>
          <li className={GallerySCSS.gallery__item}>
            <img
              src={require('../../img/gallery/galMini/gal-min3.JPG')}
              alt="галерея"
              className={GallerySCSS.gallery__img}
              onClick={clickOpen}
            />
            <FsLightbox
              toggler={toggler}
              sources={['img/gallery/gal/gal3.JPG']}
            />
          </li>
          <li className={GallerySCSS.gallery__item}>
            <img
              src={require('../../img/gallery/galMini/gal-min4.jpg')}
              alt="галерея"
              className={GallerySCSS.gallery__img}
              onClick={clickOpen}
            />
            <FsLightbox
              toggler={toggler}
              sources={['img/gallery/gal/gal4.jpg']}
            />
          </li>
          <li className={GallerySCSS.gallery__item}>
            <img
              src={require('../../img/gallery/galMini/gal-min5.jpg')}
              alt="галерея"
              className={GallerySCSS.gallery__img}
              onClick={clickOpen}
            />
            <FsLightbox
              toggler={toggler}
              sources={['img/gallery/gal/gal5.jpg']}
            />
          </li>
          <li className={GallerySCSS.gallery__item}>
            <img
              src={require('../../img/gallery/galMini/gal-min6.jpg')}
              alt="галерея"
              className={GallerySCSS.gallery__img}
              onClick={clickOpen}
            />
            <FsLightbox
              toggler={toggler}
              sources={['img/gallery/gal/gal6.jpg']}
            />
          </li>
          <li className={GallerySCSS.gallery__item}>
            <img
              src={require('../../img/gallery/galMini/gal-min7.JPG')}
              alt="галерея"
              className={`${GallerySCSS.gallery__img} ${GallerySCSS.gallery__img__small}`}
              onClick={clickOpen}
            />
            <FsLightbox
              toggler={toggler}
              sources={['img/gallery/gal/gal7.JPG']}
            />
          </li>
          <li className={GallerySCSS.gallery__item}>
            <img
              src={require('../../img/gallery/galMini/gal-min8.jpg')}
              alt="галерея"
              className={`${GallerySCSS.gallery__img} ${GallerySCSS.gallery__img__small}`}
              onClick={clickOpen}
            />
            <FsLightbox
              toggler={toggler}
              sources={['img/gallery/gal/gal8.jpg']}
            />
          </li>
          <li className={GallerySCSS.gallery__item}>
            <img
              src={require('../../img/gallery/galMini/gal-min9.jpg')}
              alt="галерея"
              className={GallerySCSS.gallery__img}
              onClick={clickOpen}
            />
            <FsLightbox
              toggler={toggler}
              sources={['img/gallery/gal/gal9.jpg']}
            />
          </li>
          <li className={GallerySCSS.gallery__item}>
            <img
              src={require('../../img/gallery/galMini/gal-min10.jpg')}
              alt="галерея"
              className={GallerySCSS.gallery__img}
              onClick={clickOpen}
            />
            <FsLightbox
              toggler={toggler}
              sources={['img/gallery/gal/gal10.jpg']}
            />
          </li>
          <li className={GallerySCSS.gallery__item}>
            <img
              src={require('../../img/gallery/galMini/gal-min11.jpg')}
              alt="галерея"
              className={GallerySCSS.gallery__img}
              onClick={clickOpen}
            />
            <FsLightbox
              toggler={toggler}
              sources={['img/gallery/gal/gal11.jpg']}
            />
          </li>
          <li className={GallerySCSS.gallery__item}>
            <img
              src={require('../../img/gallery/galMini/gal-min12.jpg')}
              alt="галерея"
              className={GallerySCSS.gallery__img}
              onClick={clickOpen}
            />
            <FsLightbox
              toggler={toggler}
              sources={['img/gallery/gal/gal12.jpg']}
            />
          </li>
          <li className={GallerySCSS.gallery__item}>
            <img
              src={require('../../img/gallery/galMini/gal-min13.jpg')}
              alt="галерея"
              className={`${GallerySCSS.gallery__img} ${GallerySCSS.gallery__img__small}`}
              onClick={clickOpen}
            />
            <FsLightbox
              toggler={toggler}
              sources={['img/gallery/gal/gal13.jpg']}
            />
          </li>
          <li className={GallerySCSS.gallery__item}>
            <img
              src={require('../../img/gallery/galMini/gal-min14.JPG')}
              alt="галерея"
              className={GallerySCSS.gallery__img}
              onClick={clickOpen}
            />
            <FsLightbox
              toggler={toggler}
              sources={['img/gallery/gal/gal14.JPG']}
            />
          </li>
          <li className={GallerySCSS.gallery__item}>
            <img
              src={require('../../img/gallery/galMini/gal-min15.jpg')}
              alt="галерея"
              className={`${GallerySCSS.gallery__img} ${GallerySCSS.gallery__img__small}`}
              onClick={clickOpen}
            />
            <FsLightbox
              toggler={toggler}
              sources={['img/gallery/gal/gal15.jpg']}
            />
          </li>
          <li className={GallerySCSS.gallery__item}>
            <img
              src={require('../../img/gallery/galMini/gal-min16.jpg')}
              alt="галерея"
              className={GallerySCSS.gallery__img}
              onClick={clickOpen}
            />
            <FsLightbox
              toggler={toggler}
              sources={['img/gallery/gal/gal16.jpg']}
            />
          </li>
          <li className={GallerySCSS.gallery__item}>
            <img
              src={require('../../img/gallery/galMini/gal-min17.jpg')}
              alt="галерея"
              className={GallerySCSS.gallery__img}
              onClick={clickOpen}
            />
            <FsLightbox
              toggler={toggler}
              sources={['img/gallery/gal/gal17.jpg']}
            />
          </li>
          <li className={GallerySCSS.gallery__item}>
            <img
              src={require('../../img/gallery/galMini/gal-min18.JPG')}
              alt="галерея"
              className={GallerySCSS.gallery__img}
              onClick={clickOpen}
            />
            <FsLightbox
              toggler={toggler}
              sources={['img/gallery/gal/gal18.JPG']}
            />
          </li>
        </ul>
      </div>
    </section>
  );
}