'use client';
import Link from 'next/link';
import { NavigationHeader } from '@/lib/component/navbar';
import { useCallback, useEffect, useRef, useState } from 'react';

export const Header = () => {
  const SCROLL_THRESHOLD = 50;
  const [useFixed, setUseFixed] = useState(false);
  const headerBottomRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    setUseFixed(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div className="languages mr-10">
            <Link className="language" href="/">
              <img
                className="language__icon"
                src="https://uust.ru/static/New_files_ugatu/images/redesign/icons/rus.webp"
                alt="русскоязычная версия сайта УУНиТ"
              />
            </Link>
            <Link
              className="language"
              href="https://study.uust.ru/"
              target="_blank"
              rel="noopener"
            >
              <img
                className="language__icon"
                src="https://uust.ru/static/New_files_ugatu/images/redesign/icons/eng.webp"
                alt="UUST english version"
              />
            </Link>
            <Link
              className="language"
              href="https://study.uust.ru/"
              target="_blank"
              rel="noopener"
            >
              <img
                className="language__icon"
                src="https://uust.ru/static/New_files_ugatu/images/redesign/icons/china.webp"
                alt="UUST chinese version"
              />
            </Link>
            <Link
              className="language"
              href="https://study.uust.ru/"
              target="_blank"
              rel="noopener"
            >
              <img
                className="language__icon"
                src="https://uust.ru/static/New_files_ugatu/images/redesign/flags/ar.webp"
                alt="UUST arabian version"
              />
            </Link>
          </div>
          <a className="link mr-auto" href="/sveden">
            <span className="link__text">
              Сведения об образовательной организации
            </span>
          </a>
          <div className="logo--img-pish">
            <a
              className="link btn-bvi "
              href="/priority-2030/"
              target="_blank"
              rel="noopener"
            >
              <img
                className="logo__img"
                src="https://uust.ru/static/New_files_ugatu/images/redesign/logo_prioritet_2030.png"
                alt="Приоритет 2030"
              />
            </a>
          </div>
          <div className="logo--img-pish">
            <a className="link btn-bvi " href="/education/pish/">
              <img
                className="logo__img"
                src="https://uust.ru/static/New_files_ugatu/images/redesign/logo_pish.webp"
                alt="Передовая инженерная школа"
              />
            </a>
          </div>
          <Link
            className="btn link mr-2"
            href="/page-contacts/"
            target="_blank"
            rel="noopener"
          >
            Контакты
          </Link>
          <Link className="btn link mr-2" href="#">
            Версия для слабовидящих
          </Link>
        </div>
      </div>
      <div ref={headerBottomRef} id="header__bottom"
           className={`header__bottom ${useFixed ? 'header__bottom--fixed' : ''}`}>
        <div className="container">
          <div className="logo header__logo">
            <img
              className="logo__img"
              src="/images/logo.png"
              alt="Лого САТ"
            />
            <span>Славгородский<br/> аграрный<br/> техникум</span>
          </div>
          <NavigationHeader />
        </div>
      </div>
    </header>
);
};
