import { Box, Badge, Text, Image, Link } from '@chakra-ui/react';
import { ArticleCardProps } from '@/components/news/index';

const ArticleCard = ({
  variant = 'default',
  date,
  title,
  text,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  imageUrl,
  bgImageUrl,
  previewImageUrl,
  showMore = false,
  children,
  ...props
}: ArticleCardProps) => {
  // Базовые стили карточки
  const cardBaseStyles = {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    background: 'white',
    borderRadius: '10px',
    overflow: 'hidden',
    transition: 'all 0.3s',
    minHeight: '438px',
    padding: '45px 15px 40px 40px',
    zIndex: 1,
    _before: {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      background: '#ea591f',
      opacity: 0,
      transition: 'opacity 0.3s',
      zIndex: -1,
    },
    _hover: {
      transform: 'scale(1.05)',
      opacity: 0.8,
      _before: {
        opacity: variant === 'fon' || variant === 'large' ? 1 : 0.8,
      },
    },
  };

  // Стили вариантов
  const variantStyles = {
    small: {
      minHeight: '255px',
      paddingTop: '20px',
    },
    'text-blue': {
      color: 'black',
      '& a': {
        color: '#061770',
      },
      _hover: {
        background: '#2b4cf6',
        color: 'white',
        '& p': {
          color: 'white',
        },
        '& a': {
          color: '#061770',
        },
        '& span': {
          transition: 'background 0.4s',
          background: '#2b4cf6',
        },
      },
      _before: {
        background: 'linear-gradient(to bottom, blue.500, blue.500 50%)',
      },
    },
    'bg-picture': {
      bgPosition: 'center',
      bgSize: 'cover',
      bgRepeat: 'no-repeat',
      background: 'linear-gradient(to bottom, #2b4cf6, #36a5fc 50%)',
      '& p ': {
        color: '#000000',
      },
      _before: {
        opacity: 0.8,
        background: 'linear-gradient(to bottom, #2b4cf6, #36a5fc 50%)',
      },
    },
    fon: {
      pt: '50px',
      background: '#ea591f',
      '& p': {
        color: '#ffffff',
      },
      _before: {
        opacity: 1,
      },
    },
    large: {
      gridColumn: 'span 2',
      paddingTop: '290px',
      paddingBottom: '20px',
      _before: {
        content: "''",
        position: 'absolute',
        opacity: 1,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: '#ea591f',
        transition: 'opacity 0.3s',
        zIndex: '-1',
      },
    },
    'large-bg': {
      gridColumn: 'span 2',
      _before: {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '190px',
        bottom: 0,
        width: '45px',
        bgPosition: 'center',
        bgSize: 'cover',
        bgRepeat: 'no-repeat',
        transition: 'transform 0.3s',
        right: 'auto',
        opacity: 1,
        zIndex: 'auto',
      },
    },
  };

  // Стили элементов
  const elementStyles = {
    date: {
      fontSize: '13px',
      lineHeight: '15px',
      color: 'white',
      background: '#7420fa',
      py: '5px',
      marginBottom: '20px',
      borderRadius: '10px',
      zIndex: 1,
      ...(variant === 'text-blue' && { background: '#08175FFF' }),
      ...(variant === 'bg-picture' && { background: '#2b4cf6' }),
      ...(variant === 'large' && {
        position: 'absolute',
        top: '45px',
        left: '40px',
      }),
    },
    title: {
      color: '#000000',
      marginTop: 0,
      marginBottom: '25px',
      transition: 'color 0.3s',
      fontSize: '20px',
      wordBreak: 'break-word',
      _last: {
        marginBottom: 0,
      },
      ...(variant === 'large' && { color: 'white' }),
      ...(variant === 'bg-picture' && {
        color: 'white',
        marginTop: '85px',
      }),
      ...(variant === 'fon' && { color: 'white' }),
      ...(variant === 'text-blue' && { lineHeight: '24px' }),
    },
    text: {
      fontSize: '13px',
      lineHeight: '18px',
      color: '#f7f7f7',
      transition: 'color 0.3s',
      marginBottom: '20px',
      _last: {
        marginBottom: 0,
      },
      ...(variant === 'fon' && { color: '#ffc9cc' }),
    },
    preview: {
      position: 'relative',
      width: '171px',
      height: '171px',
      border: '7px solid rgba(255, 255, 255, 0.14)',
      borderRadius: '50%',
      overflow: 'hidden',
      margin: '-48px 0 20px -15px',
      _after: {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: '#ea591f',
        opacity: 0,
        transition: 'opacity 0.3s',
      },
      ...(variant === 'large' && {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        position: 'absolute',
        top: '-171px',
        left: '-44px',
        width: '454px',
        height: '454px',
        margin: 0,
      }),
    },
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      ...(variant === 'large' && {
        width: '403px',
        height: '276px',
      }),
    },
    bgImg: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: -2,
      ...(variant === 'large' && {
        right: 'auto',
        width: '230px',
        transition: 'transform 0.3s',
      }),
    },
    more: {
      fontSize: '14px',
      lineHeight: '12px',
      fontWeight: 500,
      color: '#ff6166',
      borderBottom: '2px solid #ff6166',
      transition: 'all 0.3s',
      marginTop: 'auto',
      ...(variant === 'text-blue' && {
        color: '#2b4cf6',
        borderColor: '#2b4cf6',
      }),
      ...(variant === 'large' && {
        position: 'relative',
        display: 'inline-block',
        left: 'auto',
        bottom: 'auto',
        marginTop: '25px',
      }),
    },
    link: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 2,
    },
    lines: {
      position: 'absolute',
      bottom: '-70px',
      right: '-135px',
      fontSize: '280px',
      color: 'rgba(82, 106, 124, 0.09)',
      pointerEvents: 'none',
      transition: 'transform 0.3s',
      zIndex: -1,
      ...(variant === 'bg-picture' && { color: 'rgba(21, 90, 166, 0.53)' }),
      ...(variant === 'fon' && { color: 'rgba(251, 78, 84, 0.24)' }),
      ...(variant === 'large' && { color: 'rgba(251, 78, 84, 0.53)' }),
    },
  };

  return (
    <Box
      css={{
        ...cardBaseStyles,
        ...(variantStyles[variant] || {}),
      }}
      {...props}
    >
      <Link href="#" css={elementStyles.link} />
      <Box as="span" css={elementStyles.lines} />
      {date && <Badge css={elementStyles.date}>{date}</Badge>}

      {previewImageUrl && (
        <Box css={elementStyles.preview}>
          <Image src={previewImageUrl} alt={text} css={elementStyles.img} />
        </Box>
      )}

      {bgImageUrl && (
        <Image src={bgImageUrl} alt={title} css={elementStyles.bgImg} />
      )}

      <Box>
        {title && <Text css={elementStyles.title}>{title}</Text>}
        {text && <Text css={elementStyles.text}>{text}</Text>}
      </Box>

      {variant === 'text-blue' && showMore && (
        <Text as="a" css={elementStyles.more}>
          Подробнее
        </Text>
      )}
      {children}
    </Box>
  );
};

export default ArticleCard;
