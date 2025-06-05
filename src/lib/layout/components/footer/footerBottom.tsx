import { Flex, Text } from '@chakra-ui/react';

export const FooterBottom = () => {
  return (
    <Flex
      as="div"
      width="full"
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
    >
      <Text fontSize="12px" lineHeight="14px">
        © ФГБОУ ВО «Уфимский университет науки и технологий»
      </Text>
      <Text fontSize="12px" lineHeight="14px">
        <a href="/sitemap/">Карта сайта</a>
      </Text>
      <Text fontSize="12px" lineHeight="14px">
        <a href="/sveden/">Сведения об образовательной организации</a>
      </Text>
    </Flex>
  );
};
