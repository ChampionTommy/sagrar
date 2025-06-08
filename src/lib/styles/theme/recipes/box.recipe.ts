import { defineRecipe } from '@chakra-ui/react';

export const boxRecipe = defineRecipe({
  variants: {
    size: {
      main: {
        width: '100%',
        margin: '0 auto',
        paddingLeft: '20px',
        paddingRight: '20px',
      },
    },
  },
});
export default boxRecipe;
