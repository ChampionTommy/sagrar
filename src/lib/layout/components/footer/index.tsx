import { Box } from '@chakra-ui/react';
import { FooterBottom } from '@/lib/layout/components/footer/footerBottom';
import { FooterTop } from '@/lib/layout/components/footer/footerTop';

export const Footer = () => {
  return (
    <Box
      as="footer"
      marginLeft="auto"
      position="relative"
      backgroundColor="#144168"
      borderBottom="8px solid #144168"
      color="white"
      paddingTop="35px"
      maxWidth="1440px"
      width="100%"
      margin="0 auto"
      paddingLeft="20px"
      paddingRight="20px"
    >
      <FooterTop />
      <FooterBottom />
    </Box>
  );
};
