import { defineRecipe } from '@chakra-ui/react';

export const boxRecipe = defineRecipe({
  variants: {
    size: {
      main: {
        maxWidth: '1440px',
        width: '100%',
        margin: '0 auto',
        paddingLeft: '20px',
        paddingRight: '20px',
      },
    },
  },
});
export default boxRecipe;
