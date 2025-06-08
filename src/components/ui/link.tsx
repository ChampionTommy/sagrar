'use client';

import { defineRecipe } from '@chakra-ui/react';
import { chakra, useRecipe } from '@chakra-ui/react';
import { ComponentPropsWithoutRef } from 'react';
import linkRecipe from '@/lib/styles/theme/recipes/link.recipe';

// 1. Определяем тип рецепта
type LinkRecipeType = ReturnType<typeof defineRecipe>;

// 2. Безопасное извлечение типов вариантов
type LinkVariants = keyof NonNullable<LinkRecipeType['variants']>['visual'];

// 3. Интерфейс пропсов
interface LinkProps extends ComponentPropsWithoutRef<typeof chakra.a> {
  visual?: LinkVariants;
}

export const Link = (props: LinkProps) => {
  // 4. Значения по умолчанию с защитой
  const defaultVariant = Object.keys(
    linkRecipe.variants?.visual ?? { link: {} }
  )[0] as LinkVariants;

  const { visual = defaultVariant, ...restProps } = props;

  const recipe = useRecipe({ recipe: linkRecipe });
  const styles = recipe({ visual });

  return (
    <chakra.a
      aria-expanded="false"
      outline="none"
      fontWeight="400"
      textDecoration="underline"
      css={styles}
      {...restProps}
    />
  );
};
