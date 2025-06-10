import { Box, Badge, Text, Image, Link } from '@chakra-ui/react';
import { ArticleCardProps, ArticleCardVariant } from '@/types';
import { memo } from 'react';

import {
  getCardBaseStyles,
  getElementStyles,
  variantStyles,
} from '@/lib/styles/theme/css/article.css';

const ArticleCard = memo(
  ({
    variant = 'text-blue',
    date,
    title,
    href,
    text,
    previewImageUrl,
    showMore = false,
    children,
  }: ArticleCardProps) => {
    const elementStyles = getElementStyles(variant as ArticleCardVariant);

    const renderImage = () => {
      if (!previewImageUrl) return null;

      return (
        <Box css={elementStyles.preview}>
          <Image
            src={previewImageUrl}
            alt={text || ''}
            css={elementStyles.img}
          />
        </Box>
      );
    };

    return (
      <Box
        as="article"
        css={{
          ...getCardBaseStyles(variant as ArticleCardVariant),
          ...variantStyles[variant as ArticleCardVariant],
        }}
        aria-label={title}
        gridRow={
          variant === 'large'
            ? { base: 'span 2', md: 'span 2' }
            : { base: 'span 1', md: 'span 1' }
        }
        gridColumn={
          variant === 'large'
            ? { base: 'span 2', md: 'span 2' }
            : { base: 'span 1', md: 'span 1' }
        }
      >
        <Link href={href} position="absolute" inset={0} zIndex={2} />

        {date && (
          <Badge as="time" css={elementStyles.date}>
            {date}
          </Badge>
        )}

        {renderImage()}

        <Box>
          {title && <Text css={elementStyles.title}>{title}</Text>}
          {text && <Text css={elementStyles.text}>{text}</Text>}
        </Box>

        {showMore && variant === 'text-blue' && (
          <Text css={elementStyles.more}>Подробнее</Text>
        )}

        {children}
      </Box>
    );
  }
);

ArticleCard.displayName = 'ArticleCard';
export default ArticleCard;
