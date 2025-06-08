import { defineRecipe } from '@chakra-ui/react';

export const linkRecipe = defineRecipe({
  base: {
    cursor: 'pointer',
  },
  variants: {
    visual: {
      link: {
        borderBottom: '1px solid',
        borderColor: 'transparent',
        fontSize: '13px',
        lineHeight: '16px',
        color: ' #6D31FF',
        marginTop: '7px',
        transition: 'border-color .3s',
        _hover: {
          color: 'gray',
        },
      },
    },
  },
});
export default linkRecipe;
