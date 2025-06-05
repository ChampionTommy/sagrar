'use client';

import { Box, useRecipe } from '@chakra-ui/react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import boxRecipe from '@/lib/styles/theme/recipes/box.recipe';
import { Container } from '@/components/ui/container';

export const News = () => {
  const recipeBox = useRecipe({ recipe: boxRecipe });
  const stylesBox = recipeBox({ size: 'main' });
  return (
    <Container
      as="section"
      size="main"
      id="anchor-news"
      className="news tabs tabs--news"
    >
      <Box css={stylesBox}>
        <Box className="headline">
          <Box className="headline__item headline__item--flex">
            <h2>Новости</h2>
          </Box>
          <Box className="headline__item">
            <Button visual="solid" size="sm">
              Смотреть все новости
            </Button>
          </Box>
        </Box>
        <Box className="tabs__contents">
          <Box className="tabs__content">
            <Box className="articles news__articles news__articles--structure-1">
              <Box as="article" className="article-card article-card--large">
                <Link
                  className="article-card__link"
                  href="https://uust.ru/media/uploads/ckeditor/2025/06/02/image-20250602134235-6.jpeg"
                ></Link>
                <svg className="icon icon-lines article-card__lines"></svg>
                <time className="date article-card__date">3 Июн, 15:16</time>
                <Box className="article-card__preview">
                  <img
                    className="article-card__img"
                    src="https://uust.ru/media/uploads/ckeditor/2025/06/02/image-20250602134235-6.jpeg"
                  />
                </Box>
                <h3 className="article-card__title">
                  УУНиТ включен в 100 лучших вузов России в рейтинге RAEX
                </h3>
              </Box>
              <Box
                as="article"
                className="article-card article-card--bg-picture"
              >
                <Link
                  className="article-card__link"
                  href="https://uust.ru/media/uploads/ckeditor/2025/06/02/image-20250602134235-6.jpeg"
                ></Link>
                <svg className="icon icon-lines article-card__lines"></svg>
                <time className="date article-card__date">3 Июн, 14:58</time>

                <img
                  className="article-card__bg-img"
                  src="https://uust.ru/media/uploads/ckeditor/2025/06/02/image-20250602134235-6.jpeg"
                />

                <h3 className="article-card__title">
                  Делегация УУНиТ приняла участие в заседании конференции
                  «Крылья Ростеха»
                </h3>
              </Box>
              <Box
                as="article"
                className="article-card article-card--text-blue"
              >
                <a
                  className="article-card__link"
                  href="/news/get/uchenyj-ufimskogo-universiteta-izbran-akademikom-rossijskoj-akademii-nauk"
                ></a>
                <svg className="icon icon-lines article-card__lines"></svg>
                <time className="date article-card__date">3 Июн, 13:45</time>
                <h3 className="article-card__title">
                  Ученый Уфимского университета избран академиком Российской
                  академии наук
                </h3>
                <span className="article-card__more">Подробнее</span>
              </Box>
              <Box as="article" className="article-card article-card--fon">
                <a
                  className="article-card__link"
                  href="/news/get/istoriko-patrioticheskij-festival-reka-vremeni-proshel-v-birske-v-desyatyj-raz"
                ></a>
                <svg className="icon icon-lines article-card__lines"></svg>
                <time className="date article-card__date">2 Июн, 14:00</time>
                <Box className="article-card__preview">
                  <img
                    className="article-card__img"
                    src="https://uust.ru/media/uploads/ckeditor/2025/06/02/image-20250602134235-6.jpeg"
                  />
                </Box>
                <h3 className="article-card__title">
                  Историко-патриотический фестиваль «Река времени» прошел в
                  Бирске в десятый раз
                </h3>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
