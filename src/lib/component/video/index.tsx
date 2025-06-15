import Link from 'next/link';

export const Video = () => {
  return (
    <div className="header-video__wrapper">
      <div className="header-video__text">
        <img src="https://uust.ru/static/New_files_ugatu/images/redesign/logo-header.svg" />
        <Link
          className="button-gradient button-gradient--large mt2x"
          href="/atmosphere/"
          target="_blank"
          rel="noopener"
        >
          Подробнее
        </Link>
      </div>
      <video
        className="header-video"
        autoPlay={true}
        loop={true}
        playsInline={true}
        muted={true}
      >
        <source
          src="https://uust.ru/media/uust_reel.mp4"
          media="(min-width: 600px)"
          type="video/mp4"
        />
        <source src="https://uust.ru/media/uust_reel.mp4" type="video/mp4" />

        <p>Ваш браузер не поддерживает встроенные видео</p>
      </video>
    </div>
  );
};
