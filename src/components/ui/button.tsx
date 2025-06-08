import { defineRecipe, useRecipe } from '@chakra-ui/react';
import { chakra } from '@chakra-ui/react';
import { ComponentPropsWithoutRef } from 'react';
import { buttonRecipe } from '@/lib/styles/theme/recipes/button.recipe';

type ButtonRecipeType = ReturnType<typeof defineRecipe>;

type ButtonVariants = keyof NonNullable<ButtonRecipeType['variants']>['visual'];
type ButtonSizes = keyof NonNullable<ButtonRecipeType['variants']>['size'];

interface ButtonProps extends ComponentPropsWithoutRef<typeof chakra.button> {
  visual?: ButtonVariants;
  size?: ButtonSizes;
}

export const Button = (props: ButtonProps) => {
  const defaultVariant = Object.keys(
    buttonRecipe.variants?.visual ?? { solid: {} }
  )[0] as ButtonVariants;
  const defaultSize = Object.keys(
    buttonRecipe.variants?.size ?? { sm: {} }
  )[0] as ButtonSizes;

  const { visual = defaultVariant, size = defaultSize, ...restProps } = props;

  const recipe = useRecipe({ recipe: buttonRecipe });
  const styles = recipe({ visual, size });

  return <chakra.button aria-expanded="false" css={styles} {...restProps} />;
};
