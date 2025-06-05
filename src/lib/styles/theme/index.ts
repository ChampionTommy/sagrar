import { createSystem, defaultConfig } from '@chakra-ui/react';
import { fonts } from './fonts';
import buttonRecipe from '@/lib/styles/theme/recipes/button.recipe';
import boxRecipe from '@/lib/styles/theme/recipes/box.recipe';

const customTheme = {
  theme: {
    recipes: {
      button: buttonRecipe,
      box: boxRecipe,
    },
    tokens: {
      fonts,
    },
    breakpoints: {
      base: '0em', // 0px
      sm: '30em', // ~480px
      md: '48em', // ~768px
      fold: '54em', // ~864px
      lg: '62em', // ~992px
      xl: '80em', // ~1280px
      '2xl': '96em', // ~1536px
    },
  },
};
export const system = createSystem(defaultConfig, customTheme);
