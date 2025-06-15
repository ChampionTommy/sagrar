'use client';

import * as React from 'react';
import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export function NavigationHeader() {
  return (
    <NavigationMenu className="max-w-full">
      <NavigationMenuList className="header-menu__list">
        <NavigationMenuItem className="header-menu__item">
          <NavigationMenuTrigger className="header-menu__link">
            Университет
          </NavigationMenuTrigger>
          <NavigationMenuContent className="container">
            <ScrollArea className="w-full max-w-full max-h-[550px] overflow-auto">
              <div className="menu header__submenu">
                {/* Университет сегодня */}
                <div className="menu__block">
                  <p className="menu__title">Университет сегодня</p>
                  <ul className="menu__list space-y-2 mt-2">
                    {[
                      'Основная информация',
                      'Приветствие ректора',
                      'Документы',
                      'Структура университета',
                      'Институты и факультеты',
                      'Административные подразделения',
                      'Руководство университета',
                      'Попечительский совет',
                      'УУНиТ в рейтингах',
                      'Международная деятельность',
                      'Студенческий городок',
                      'Независимая оценка качества образования',
                      'Сотрудничество, закупки',
                      'Порядок заключения договоров пожертвования',
                      'Брендбук Уфимского университета',
                      'Ответы на часто задаваемые вопросы',
                      'Контакты',
                    ].map((text, idx) => (
                      <li key={idx} className="menu__item">
                        <NavigationMenuLink asChild>
                          <Link
                            href="#"
                            className="menu__link hover:text-gray-900"
                          >
                            {text}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ученый совет */}
                <div className="menu__block">
                  <p className="menu__title">Ученый совет</p>
                  <ul className="menu__list space-y-2 mt-2">
                    {[
                      'Регламент работы Ученого совета',
                      'Состав Ученого совета',
                      'Постоянные комиссии Ученого совета',
                      'План работы Ученого совета Университета',
                      'Присвоение ученых званий',
                    ].map((text, idx) => (
                      <li key={idx} className="menu__item">
                        <NavigationMenuLink asChild>
                          <Link
                            href="#"
                            className="menu__link hover:text-gray-900"
                          >
                            {text}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Социальная работа */}
                <div className="menu__block">
                  <p className="menu__title">Социальная работа</p>
                  <ul className="menu__list space-y-2 mt-2">
                    {[
                      'Доступная среда',
                      'Управление по социальной работе',
                      '«Единое окно» - информация для молодых семей',
                      'Меры социально поддержки обучающихся из числа детей участников СВО и обучающихся из числа участников СВО',
                      'Социальная стипендия',
                      'Противодействие наркомании и незаконному обороту наркотиков',
                      'Психологическое сопровождение образовательного процесса',
                      'Остановим СПИД вместе!',
                      'Профилактика коронавирусной инфекции COVID-19',
                    ].map((text, idx) => (
                      <li key={idx} className="menu__item">
                        <NavigationMenuLink asChild>
                          <Link
                            href="#"
                            className="menu__link hover:text-gray-900"
                          >
                            {text}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Издательская деятельность */}
                <div className="menu__block">
                  <p className="menu__title">Издательская деятельность</p>
                  <ul className="menu__list space-y-2 mt-2">
                    {[
                      'Управление публикационной деятельности',
                      'Электронные издания сетевого распространения',
                      'Научные периодические издания',
                      'Научные конференции',
                    ].map((text, idx) => (
                      <li key={idx} className="menu__item">
                        <NavigationMenuLink asChild>
                          <Link
                            href="#"
                            className="menu__link hover:text-gray-900"
                          >
                            {text}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Медиацентр */}
                <div className="menu__block">
                  <p className="menu__title">Медиацентр</p>
                  <ul className="menu__list space-y-2 mt-2">
                    {[
                      'Пресс-служба',
                      'Все новости',
                      'Объявления',
                      'Фотогалерея',
                      'СМИ о нас',
                      'Видеоролики',
                    ].map((text, idx) => (
                      <li key={idx} className="menu__item">
                        <NavigationMenuLink asChild>
                          <Link
                            href="#"
                            className="menu__link hover:text-gray-900"
                          >
                            {text}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Обеспечение безопасности */}
                <div className="menu__block">
                  <p className="menu__title">Обеспечение безопасности</p>
                  <ul className="menu__list space-y-2 mt-2">
                    {[
                      'Управление комплексной безопасности',
                      'Противодействие коррупции',
                      'Противодействие терроризму и идеологии экстремизма',
                      'Защита персональных данных',
                    ].map((text, idx) => (
                      <li key={idx} className="menu__item">
                        <NavigationMenuLink asChild>
                          <Link
                            href="#"
                            className="menu__link hover:text-gray-900"
                          >
                            {text}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Сотрудникам */}
                <div className="menu__block">
                  <p className="menu__title">Сотрудникам</p>
                  <ul className="menu__list space-y-2 mt-2">
                    {[
                      'Карьера и работа в УУНиТ',
                      'Конкурсные отборы',
                      'Конкурсные отборы (до 05.03.2024)',
                      'Места оказания услуг преподавателям и сотрудникам',
                      'Служба охраны труда',
                      'Профком работников',
                      'Отдых в СОЦ «Авиатор»',
                      'Телефонный справочник',
                      'Бланки документов',
                    ].map((text, idx) => (
                      <li key={idx} className="menu__item">
                        <NavigationMenuLink asChild>
                          <Link
                            href="#"
                            className="menu__link hover:text-gray-900"
                          >
                            {text}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Координационный центр */}
                <div className="menu__block">
                  <p className="menu__title">Координационный центр</p>
                  <ul className="menu__list space-y-2 mt-2">
                    <li className="menu__item">
                      <NavigationMenuLink asChild>
                        <Link
                          href="#"
                          className="menu__link hover:text-gray-900"
                        >
                          Координационный центр
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </div>
                <ScrollBar orientation="vertical" />
              </div>
            </ScrollArea>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="header-menu__item">
          <NavigationMenuTrigger className="header-menu__link">
            Абитуриенту
          </NavigationMenuTrigger>
          <div className="container">
            <NavigationMenuContent>
              <div className="menu header__submenu">
                {/* Блок "Университет сегодня" */}
                <div className="menu__block">
                  <p className="menu__title">Абитуриенту сегодня</p>
                  <ul className="menu__list space-y-2 mt-2">
                    {[
                      {
                        href: '/main-information/',
                        text: 'Основная информация',
                      },
                      {
                        href: '/rectors-greeting/',
                        text: 'Приветствие ректора',
                      },
                      // ... остальные пункты
                    ].map((item) => (
                      <li key={item.href} className="menu__item">
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="menu__link hover:text-gray-900"
                          >
                            {item.text}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Блок "Ученый совет" */}
                <div className="menu__block">
                  <p className="menu__title">Ученый совет</p>
                  <ul className="menu__list space-y-2 mt-2">
                    {[
                      {
                        href: 'https://uust.ru/media/eduInfo/reg_uch-sov_2023.pdf',
                        text: 'Регламент работы',
                      },
                      {
                        href: '/academic-council/members/',
                        text: 'Состав совета',
                      },
                    ].map((item) => (
                      <li key={item.href} className="menu__item">
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="menu__link hover:text-gray-900"
                          >
                            {item.text}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Остальные блоки меню */}
              </div>
            </NavigationMenuContent>
          </div>
        </NavigationMenuItem>
        <NavigationMenuItem className="header-menu__item">
          <NavigationMenuTrigger className="header-menu__link">
            Университет
          </NavigationMenuTrigger>
          <div className="container">
            <NavigationMenuContent>
              <div className="menu header__submenu">
                {/* Блок "Университет сегодня" */}
                <div className="menu__block">
                  <p className="menu__title">Университет сегодня</p>
                  <ul className="menu__list space-y-2 mt-2">
                    {[
                      {
                        href: '/main-information/',
                        text: 'Основная информация',
                      },
                      {
                        href: '/rectors-greeting/',
                        text: 'Приветствие ректора',
                      },
                      // ... остальные пункты
                    ].map((item) => (
                      <li key={item.href} className="menu__item">
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="menu__link hover:text-gray-900"
                          >
                            {item.text}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Блок "Ученый совет" */}
                <div className="menu__block">
                  <p className="menu__title">Ученый совет</p>
                  <ul className="menu__list space-y-2 mt-2">
                    {[
                      {
                        href: 'https://uust.ru/media/eduInfo/reg_uch-sov_2023.pdf',
                        text: 'Регламент работы',
                      },
                      {
                        href: '/academic-council/members/',
                        text: 'Состав совета',
                      },
                    ].map((item) => (
                      <li key={item.href} className="menu__item">
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="menu__link hover:text-gray-900"
                          >
                            {item.text}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Остальные блоки меню */}
              </div>
            </NavigationMenuContent>
          </div>
        </NavigationMenuItem>
        <NavigationMenuItem className="header-menu__item">
          <NavigationMenuTrigger className="header-menu__link">
            Университет
          </NavigationMenuTrigger>
          <div className="container">
            <NavigationMenuContent>
              <div className="menu header__submenu">
                {/* Блок "Университет сегодня" */}
                <div className="menu__block">
                  <p className="menu__title">Университет сегодня</p>
                  <ul className="menu__list space-y-2 mt-2">
                    {[
                      {
                        href: '/main-information/',
                        text: 'Основная информация',
                      },
                      {
                        href: '/rectors-greeting/',
                        text: 'Приветствие ректора',
                      },
                      // ... остальные пункты
                    ].map((item) => (
                      <li key={item.href} className="menu__item">
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="menu__link hover:text-gray-900"
                          >
                            {item.text}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Блок "Ученый совет" */}
                <div className="menu__block">
                  <p className="menu__title">Ученый совет</p>
                  <ul className="menu__list space-y-2 mt-2">
                    {[
                      {
                        href: 'https://uust.ru/media/eduInfo/reg_uch-sov_2023.pdf',
                        text: 'Регламент работы',
                      },
                      {
                        href: '/academic-council/members/',
                        text: 'Состав совета',
                      },
                    ].map((item) => (
                      <li key={item.href} className="menu__item">
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="menu__link hover:text-gray-900"
                          >
                            {item.text}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Остальные блоки меню */}
              </div>
            </NavigationMenuContent>
          </div>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
