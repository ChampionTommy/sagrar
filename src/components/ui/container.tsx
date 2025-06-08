import { Box, HTMLChakraProps, useRecipe } from '@chakra-ui/react';
import boxRecipe from '@/lib/styles/theme/recipes/box.recipe';

type BoxVariants = {
  size?: 'main';
};

interface ContainerBoxProps extends HTMLChakraProps<'div'>, BoxVariants {
  as?: React.ElementType;
}

export const Container = ({
  as: Tag = 'div',
  size = 'main',
  children,
  ...props
}: ContainerBoxProps) => {
  const recipeBox = useRecipe({ recipe: boxRecipe });
  const stylesBox = recipeBox({ size: size as 'main' });
  return (
    <Box as={Tag} css={stylesBox} {...props}>
      {children}
    </Box>
  );
};
