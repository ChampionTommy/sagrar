import { Box } from '@chakra-ui/react';
import { HeaderTop } from '@/lib/layout/components/header/headerTop';
import { HeaderBottom } from '@/lib/layout/components/header/headerBottom';

export const Header = () => {
  return (
    <Box as="header" marginLeft="auto" maxWidth={1440} position="relative">
      <HeaderTop/>
      <HeaderBottom/>
    </Box>
  );
};
