import { defineRecipe } from '@chakra-ui/react';

export const buttonRecipe = defineRecipe({
  base: {
    minWidth: '160px',
    fontSize: '14px',
    lineHeight: '16px',
    borderRadius: '10px',
    transition: 'color 0.3s',
    cursor: 'pointer',
  },
  variants: {
    visual: {
      solid: {
        minWidth: '160px',
        color: '#526A7C',
        backgroundColor: '#FFFFFF',
        borderRight: '1px solid #cad6e9',
        borderBottom: '1px solid #cad6e9',
        borderRadius: '10px',
        transition: 'color .3s',
        _hover: {
          backgroundColor: '#FFFFFF',
        },
      },
      link: {
        display: 'inline-block',
        position: 'relative',
        color: '#314aff',
        padding: '2px 15px',
        background: 'none',
        textDecoration: 'none',
        zIndex: 4,
        _before: {
          content: "''",
          position: 'absolute',
          bottom: '5px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '0', // Начальная ширина 0
          height: '2px',
          backgroundColor: '#314aff',
          transition: 'width 0.3s, background-color 0.3s',
        },
        '& span': {
          position: 'relative',
          display: 'inline-block',
          _before: {
            content: "''",
            position: 'absolute',
            bottom: '-5px', // Сдвигаем линию под текст
            left: '0',
            width: '100%', // Ширина равна тексту в <p>
            height: '2px',
            backgroundColor: 'transparent',
            transition: 'background-color 0.3s',
          },
          '&[data-state="open"]::before': {
            backgroundColor: '#314aff', // Теперь работает!
          },
        },
        _focus: {
          _before: {
            backgroundColor: '#314aff',
          },
        },
        _hover: {
          '& span::before': {
            backgroundColor: '#314aff',
          },
        },
        _focusVisible: {
          outline: 'none',
        },
        '&[data-state="open"] span::before': {
          backgroundColor: '#314aff !important',
        },
      },
    },
    size: {
      sm: {
        fontSize: '14px',
        padding: '10px 22px 9px 22px',
      },
    },
  },
});
export default buttonRecipe;
