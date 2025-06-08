import { defineRecipe } from '@chakra-ui/react';

export const buttonRecipe = defineRecipe({
  base: {
    minWidth: '160px',
    fontSize: '14px',
    lineHeight: '16px',
    borderRadius: '10px',
    transition: 'all 0.3s',
    cursor: 'pointer',
    _focusVisible: {
      outline: 'none',
    },
  },
  variants: {
    visual: {
      solid: {
        color: '#526A7C',
        bg: '#FFFFFF',
        borderRight: '1px solid #cad6e9',
        borderBottom: '1px solid #cad6e9',
        _hover: {
          bg: '#F5F7FA',
        },
      },
      link: {
        display: 'inline-block',
        position: 'relative',
        color: '#000000',
        fontWeight: '500',
        padding: '2px 15px',
        bg: 'transparent',
        textDecoration: 'none',
        zIndex: 4,
        _before: {
          content: '""',
          position: 'absolute',
          bottom: '5px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '0',
          height: '2px',
          bg: '#314aff',
          transition: 'width 0.3s',
        },
        _hover: {
          color: '#314aff',
          _before: {
            width: 'calc(100% - 30px)',
          },
        },
        '&[data-state="open"]': {
          color: '#314aff',
          _before: {
            width: 'calc(100% - 30px)',
          },
        },
      },
    },
    size: {
      sm: {
        fontSize: '14px',
        padding: '10px 22px',
      },
      md: {
        fontSize: '16px',
        padding: '12px 24px',
      },
    },
  },
  defaultVariants: {
    visual: 'solid',
    size: 'md',
  },
});
