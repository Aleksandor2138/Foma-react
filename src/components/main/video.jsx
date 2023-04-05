import React from 'react';
import VideoSCSS from '../../sass/components/main/video.module.scss';
import Container from '../../sass/components/container.module.scss';
import VH from '../../sass/var/visually-hidden.module.scss';

export const Video = () => {
  return (
    <section className={VideoSCSS.video} id="video">
      <div className={Container.container}>
        <h3 className={VH.visuallyHidden}> Видео</h3>
        <iframe
          className={VideoSCSS.video__link}
          src="https://www.youtube.com/embed/UQ8BHtmf-68"
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};
