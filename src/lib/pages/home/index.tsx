import { Flex } from '@chakra-ui/react';
import { News } from '@/components/news';

export const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <News/>
    </Flex>
  );
};
