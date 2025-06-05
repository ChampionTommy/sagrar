import { Box, HTMLChakraProps, useRecipe } from '@chakra-ui/react';
import boxRecipe from '@/lib/styles/theme/recipes/box.recipe';

// 1. Безопасная типизация для рецепта
type BoxVariants = {
  size?: 'main' | 'sm';
};

// 2. Интерфейс с правильным наследованием
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
  const stylesBox = recipeBox({ size }); // ← Используем динамическое значение

  return (
    <Box as={Tag} css={stylesBox} {...props}>
      {children}
    </Box>
  );
};