'use client';

import { Box, Container, Flex, Text, Grid } from '@chakra-ui/react';
import { useRecipe } from '@chakra-ui/react';
import { boxRecipe } from '@/lib/styles/theme/recipes/box.recipe';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { NewsItem } from '@/types';
import ArticleCard from '@/components/ui/article-card';

const newsData: NewsItem[] = [
  {
    id: '1',
    variant: 'event',
    date: '3 Июн',
    title: 'УУНиТ включен в 100 лучших вузов России в рейтинге RAEX',
    previewImageUrl:
      'https://uust.ru/media/press-center/news/covers/2025/06/2025-06-06_15-19-27.webp',
    href: '/news/1',
  },
  {
    id: '2',
    variant: 'event',
    date: '2 Июн',
    title: 'Историко-патриотический фестиваль «Река времени»',
    previewImageUrl:
      'https://uust.ru/media/press-center/news/covers/2025/06/2025-06-06_15-19-27.webp',
    href: '/news/2',
  },
  {
    id: '3',
    variant: 'event',
    date: '2 Июн',
    title: 'Историко-патриотический фестиваль «Река времени»',
    href: '/news/2',
  },
  {
    id: '4',
    variant: 'event',
    date: '2 Июн',
    title: 'Историко-патриотический фестиваль «Река времени»',
    previewImageUrl:
      'https://uust.ru/media/press-center/news/covers/2025/06/2025-06-06_15-19-27.webp',

    href: '/news/2',
  },
  {
    id: '5',
    variant: 'event',
    date: '2 Июн',
    title: 'Историко-патриотический фестиваль «Река времени»',
    previewImageUrl:
      'https://uust.ru/media/press-center/news/covers/2025/06/2025-06-06_15-19-27.webp',
    href: '/news/2',
  },
  {
    id: '6',
    variant: 'event',
    date: '2 Июн',
    title: 'Историко-патриотический фестиваль «Река времени»',
    previewImageUrl:
      'https://uust.ru/media/press-center/news/covers/2025/06/2025-06-06_15-19-27.webp',
    href: '/news/2',
  },
  {
    id: '7',
    variant: 'event',
    date: '2 Июн',
    title: 'Историко-патриотический фестиваль «Река времени»',
    previewImageUrl:
      'https://uust.ru/media/press-center/news/covers/2025/06/2025-06-06_15-19-27.webp',
    href: '/news/2',
  },
];

export const Events = () => {
  const recipeBox = useRecipe({ recipe: boxRecipe });
  const stylesBox = recipeBox({ size: 'main' });

  return (
    <Container
      as="section"
      aria-labelledby="events-heading"
      py={{ base: '50px', md: '100px' }}
      maxW="1440px"
      px={0}
      position="relative"
      backgroundColor="var(--cl-dark-purple)"
      paddingTop="70px"
      paddingBottom="25px"
      overflow="hidden"
      color="white"
      zIndex="1"
    >
      <Box
        css={stylesBox}
        backgroundColor="#142a68"
        paddingTop="70px"
        paddingBottom="25px"
      >
        <Flex justify="space-between" align="center" mb={{ base: 5, md: 8 }}>
          <Text as="h2" id="news-heading" fontSize="2xl" fontWeight="bold">
            Объявления
          </Text>
          <Button visual="solid" size="sm" _hover={{ textDecoration: 'none' }}>
            <Link href="/news">Смотреть все объявления</Link>
          </Button>
        </Flex>
        <Grid
          templateColumns={{
            base: 'repeat(5, 1fr)',
          }}
          gap={{ base: 4, md: 6 }}
          autoRows="1fr .3fr 1fr"
        >
          {newsData.map((item, index) => (
            <ArticleCard
              key={item.id}
              variant={item.variant}
              date={item.date}
              title={item.title}
              imageUrl={item.imageUrl}
              previewImageUrl={item.previewImageUrl}
              href={item.href}
              isFirstItem={index === 0} // Для особого стиля первой карточки
              showMore
            />
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
