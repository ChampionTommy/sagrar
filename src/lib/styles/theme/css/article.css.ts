import { SystemStyleObject } from '@chakra-ui/react';
import { ArticleCardVariant } from '@/types';

// Базовые стили карточки
export const getCardBaseStyles = (
  variant: ArticleCardVariant
): SystemStyleObject => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  background: 'white',
  borderRadius: '10px',
  overflow: 'hidden',
  transition: 'all 0.3s',
  minHeight: '358px',
  h: '358px',
  padding: '20px',
  zIndex: 1,
  ...(variant === 'event' && {
    position: 'relative',
    display: 'block',
    maxWidth: '270px',
    width: '100%',
    height: '335px',
    color: '#ffffff',
    borderRadius: '16px',
    textDecoration: 'none',
    overflow: 'hidden',
    transition: 'transform .3s',
    paddingTop: '225px',
    margin: 0,
    _hover: {
      color: ' #fff',
    },
    _before: {
      content: "''",
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      background: 'red',
      opacity: 0,
      transition: 'opacity .3s',
      zIndex: '1',
    },
    _after: {
      content: "''",
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      height: '300px',
      backgroundImage: "url('/fon-blue.png')",
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
  }),
  _before: {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: '.3',
    background: 'linear-gradient(to bottom,#1992E8,#0B4288 50%',
    transition: 'opacity 0.3s',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -1,
  },
  _hover: {
    transform: 'scale(1.05)',
    opacity: 0.8,
    _before: {
      opacity: variant === 'fon' || variant === 'large' ? 1 : 0.8,
    },
  },
});

// Стили вариантов
export const variantStyles: Record<ArticleCardVariant, SystemStyleObject> = {
  default: {},
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
    backgroundPosition: 'center',
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
    background: '#2a1468',
    '& p': {
      color: '#ffffff',
    },
    _before: {
      opacity: 1,
    },
  },
  large: {
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
  event: {}, // специфические стили для event уже в getCardBaseStyles
};

// Стили элементов
export const getElementStyles = (variant: ArticleCardVariant) => ({
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
    ...(variant === 'event' && {
      position: 'absolute',
      top: '170px',
      right: '20px',
      fontSize: '12px',
      lineHeight: '14px',
      color: '#000000',
      backgroundColor: '#ffffff',
      textAlign: 'center',
      borderRadius: '5px',
      padding: '7px',
      zIndex: '1',
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
    ...(variant === 'event' && { color: 'white' }),
    ...(variant === 'text-blue' && { lineHeight: '24px' }),
    ...(variant === 'event' && {
      position: 'absolute',
      top: '160px',
      width: '85%',
      padding: '0 30px 0 30px',
      zIndex: '1',
    }),
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
    ...(variant === 'event' && {
      position: 'absolute',
      top: '160px',
      width: '85%',
      padding: '0 30px 0 30px',
      zIndex: '1',
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
  preview: {
    position: 'relative',
    width: '150px',
    height: '150px',
    border: '7px solid rgba(255, 255, 255, 0.14)',
    borderRadius: '50%',
    overflow: 'hidden',
    margin: '-40px 0 25px -20px',
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
    ...(variant === 'event' && {
      position: 'absolute',
      top: '0',
      left: '0',
      height: '80%',
      width: '100%',
      borderRadius: '16px 16px 0 0',
      border: 'none',
      margin: 0,
    }),
    ...(variant === 'fon' && {
      background: '#2a1468',
      opacity: '.8',
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
    ...(variant === 'event' && {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
    }),
  },
});
