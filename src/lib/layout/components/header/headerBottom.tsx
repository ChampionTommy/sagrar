import { Box, Flex, Image } from '@chakra-ui/react';
import { Navbar } from '@/components/navbar';
import { MenuData } from '@/types';
import { useRef } from 'react';
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

export const HeaderBottom = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  if (headerRef?.current) {
    console.log(headerRef.current.clientWidth);
  }
  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('[data-menu-trigger]')) {
    }
  };
  return (
    <Box
      ref={headerRef}
      marginLeft="auto"
      maxWidth={1440}
      position="relative"
      onClick={handleClick}
      padding="25px 20px"
      borderBottom="1px solid #c7d5eb"
    >
      <Flex width="full" align="center">
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
        >
          <Link href="#">
            <Image
              src="https://uust.ru/static/New_files_ugatu/images/redesign/uunit.svg"
              w="210px"
            />
          </Link>

        </Box>
        <Navbar
          menu={universityMenu}
          headerRef={headerRef}
          handleClickRef={handleClick}
        />
      </Flex>
    </Box>
  );
};
