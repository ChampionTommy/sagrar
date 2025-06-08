import { Box } from '@chakra-ui/react';
import { HeaderTop } from '@/components/header/headerTop';
import { HeaderBottom } from '@/components/header/headerBottom';

export const Header = () => {
  return (
    <Box
      as="header"
      position="relative"
      marginBottom="4rem"
      borderBottom="1px solid #c7d5eb"
    >
      <Box maxWidth={1440} margin="0 auto">
        <HeaderTop />
        <HeaderBottom />
      </Box>
    </Box>
  );
};
