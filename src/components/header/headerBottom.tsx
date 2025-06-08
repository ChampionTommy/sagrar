'use client';

import { Box, Flex, Image } from '@chakra-ui/react';
import { Navbar } from '@/components/navbar';
import { MenuData } from '@/types';
import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const universityMenu: MenuData = {
  title: 'Университет',
  items: [
    {
      id: 1,
      title: 'Университет сегодня',
      items: [
        {
          id: 2,
          title: 'Основная информация',
          items: [
            {
              id: 3,
              title: 'История университета',
              url: '/university-today/basic-info/history',
            },
            {
              id: 4,
              title: 'Миссия и стратегия',
              url: '/university-today/basic-info/mission',
            },
          ],
        },
        {
          id: 5,
          title: 'Структура университета',
          items: [
            { id: 6, title: 'Институты', url: '/structure/institutes' },
            { id: 7, title: 'Факультеты', url: '/structure/faculties' },
          ],
        },
      ],
    },
    {
      id: 8,
      title: 'Образование',
      items: [
        { id: 9, title: 'Академические программы', url: '/education/programs' },
        {
          id: 10,
          title: 'Международные программы',
          url: '/education/international',
        },
      ],
    },
  ],
};
const SCROLL_THRESHOLD = 150;
const LOGO_WIDTH = 210;

export const HeaderBottom = () => {
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    setIsSticky(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest('[data-menu-trigger]')) {
      e.stopPropagation();
    }
  }, []);

  useEffect(() => {
    handleScroll();

    const scrollListener = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, [handleScroll]);

  return (
    <Box
      ref={headerRef}
      onClick={handleClick}
      width="full"
      transition="all 0.3s ease"
      className={`header__bottom ${isSticky ? 'header__bottom--fixed' : ''}`}
      aria-label="Основная навигация"
    >
      <Flex align="center" maxW="1440px" margin="0 auto" px={4}>
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-end"
          maxWidth="415px"
          fontSize="12px"
          lineHeight="14px"
          color="#000000"
          textDecoration="none"
          marginRight="auto"
          flexShrink={0}
        >
          <Link href="/" passHref>
            <Box aria-label="На главную страницу">
              <Image
                src="https://uust.ru/static/New_files_ugatu/images/redesign/uunit.svg"
                w={`${LOGO_WIDTH}px`}
                alt="Логотип университета"
                height="auto"
                loading="eager"
              />
            </Box>
          </Link>
        </Box>

        <Navbar
          menu={universityMenu}
          headerRef={headerRef}
          handleClickRef={handleClick}
          isSticky={isSticky}
        />
      </Flex>
    </Box>
  );
};
