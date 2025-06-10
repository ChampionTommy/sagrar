import { Container } from '@/components/ui/container';
import { Grid } from '@chakra-ui/react';
import ArticleCard from '@/components/news/news-card';
import { NewsItem } from '@/components/news';

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

export default function Page() {
  return (
    <Container
      paddingTop="100px"
      maxWidth="1080px"
      minWidth="290px"
      flexGrow="1"
    >
      <Grid
        templateColumns={{
          base: 'repeat(auto-fit, minmax(240px, 1fr))',
          md: 'repeat(auto-fit, minmax(240px, 1fr))',
          lg: 'repeat(auto-fit, minmax(240px, 1fr))',
        }}
        gap={{ base: 4, md: 6 }}
        autoRows="minmax(200px, auto)"
        padding="60px 0px"
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
    </Container>
  );
}
