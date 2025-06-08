'use client';

import { Box, Container, Flex, Text, Grid } from '@chakra-ui/react';
import { useRecipe } from '@chakra-ui/react';
import { boxRecipe } from '@/lib/styles/theme/recipes/box.recipe';
import ArticleCard from '@/components/news/news-card';
import { Button } from '@/components/ui/button';
import Link, { LinkProps } from 'next/link';
export interface NewsItem {
  id: string;
  date: string;
  title: string;
  href: string;
  variant: 'large' | 'fon' | 'bg-picture' | 'text-blue';

  // Опциональные поля:
  imageUrl?: string; // Необязательно, если variant === 'bg-picture' (тогда previewImageUrl обязателен)
  previewImageUrl?: string; // Обязательно для 'large' и 'fon', необязательно для других
}
export interface ArticleCardProps extends Omit<LinkProps, 'href'> {
  variant?: 'large' | 'fon' | 'bg-picture' | 'text-blue' | 'default';
  date: string;
  title: string;
  text?: string;
  imageUrl?: string;
  bgImageUrl?: string;
  previewImageUrl?: string;
  href: string;
  isFirstItem?: boolean;
  showMore?: boolean;
  children?: React.ReactNode;
}

const newsData: NewsItem[] = [
  {
    id: '1',
    variant: 'large',
    date: '3 Июн, 15:16',
    title: 'УУНиТ включен в 100 лучших вузов России в рейтинге RAEX',
    imageUrl:
      'https://uust.ru/media/press-center/news/covers/2025/06/2025-06-06_15-19-27.webp',
    previewImageUrl:
      'https://uust.ru/media/press-center/news/covers/2025/06/2025-06-06_15-19-27.webp',
    href: '/news/1',
  },
  {
    id: '2',
    variant: 'bg-picture',
    date: '2 Июн, 14:00',
    title: 'Историко-патриотический фестиваль «Река времени»',
    previewImageUrl:
      'https://uust.ru/media/press-center/news/covers/2025/06/2025-06-06_15-19-27.webp',
    href: '/news/2',
  },
  {
    id: '3',
    variant: 'text-blue',
    date: '2 Июн, 14:00',
    title: 'Историко-патриотический фестиваль «Река времени»',
    imageUrl:
      'https://uust.ru/media/press-center/news/covers/2025/06/2025-06-06_15-19-27.webp',
    href: '/news/2',
  },
  {
    id: '4',
    variant: 'fon',
    date: '2 Июн, 14:00',
    title: 'Историко-патриотический фестиваль «Река времени»',
    imageUrl:
      'https://uust.ru/media/press-center/news/covers/2025/06/2025-06-06_15-19-27.webp',
    previewImageUrl:
      'https://uust.ru/media/press-center/news/covers/2025/06/2025-06-06_15-19-27.webp',
    href: '/news/2',
  },
  {
    id: '5',
    variant: 'bg-picture',
    date: '2 Июн, 14:00',
    title: 'Историко-патриотический фестиваль «Река времени»',
    previewImageUrl:
      'https://uust.ru/media/press-center/news/covers/2025/06/2025-06-06_15-19-27.webp',
    href: '/news/2',
  },
  {
    id: '6',
    variant: 'text-blue',
    date: '2 Июн, 14:00',
    title: 'Историко-патриотический фестиваль «Река времени»',
    imageUrl:
      'https://uust.ru/media/press-center/news/covers/2025/06/2025-06-06_15-19-27.webp',
    href: '/news/2',
  },
  {
    id: '7',
    variant: 'fon',
    date: '2 Июн, 14:00',
    title: 'Историко-патриотический фестиваль «Река времени»',
    imageUrl:
      'https://uust.ru/media/press-center/news/covers/2025/06/2025-06-06_15-19-27.webp',
    previewImageUrl:
      'https://uust.ru/media/press-center/news/covers/2025/06/2025-06-06_15-19-27.webp',
    href: '/news/2',
  },
];

export const News = () => {
  const recipeBox = useRecipe({ recipe: boxRecipe });
  const stylesBox = recipeBox({ size: 'main' });

  return (
    <Container
      as="section"
      aria-labelledby="news-heading"
      py={{ base: '50px', md: '100px' }}
      maxW="1440px"
      px={0}
    >
      <Box css={stylesBox}>
        <Flex justify="space-between" align="center" mb={{ base: 5, md: 8 }}>
          <Text as="h2" id="news-heading" fontSize="2xl" fontWeight="bold">
            Новости
          </Text>
          <Button visual="solid" size="sm" _hover={{ textDecoration: 'none' }}>
            <Link href={'/news'}>Смотреть все новости</Link>
          </Button>
        </Flex>

        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(5, 1fr)',
            lg: 'repeat(5, 1fr)',
          }}
          gap={{ base: 4, md: 6 }}
          autoRows="minmax(200px, auto)"
        >
          {newsData.map((item, index) => (
            <Box
              key={item.id}
              gridColumn={
                item.variant === 'large'
                  ? { base: 'span 2', md: 'span 2' }
                  : { base: 'span 1', md: 'span 1' }
              }
              gridRow={
                item.variant === 'large'
                  ? { base: 'span 1', md: 'span 1' }
                  : { base: 'span 1', md: 'span 1' }
              }
            >
              <ArticleCard
                variant={item.variant}
                date={item.date}
                title={item.title}
                imageUrl={item.imageUrl}
                previewImageUrl={item.previewImageUrl}
                href={item.href}
                isFirstItem={index === 0} // Для особого стиля первой карточки
                showMore
              />
            </Box>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
