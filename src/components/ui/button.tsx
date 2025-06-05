'use client';

import buttonRecipe from '@/lib/styles/theme/recipes/button.recipe';
import { chakra, useRecipe } from '@chakra-ui/react';

export const Button = (props) => {
  const { visual, size, ...restProps } = props;

  const recipe = useRecipe({ recipe: buttonRecipe });
  const styles = recipe({ visual, size });

  return <chakra.button aria-expanded="false" css={styles} {...restProps} />;
};
