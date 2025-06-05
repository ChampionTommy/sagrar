import { Box, Flex, Text } from '@chakra-ui/react';
import { ColorModeButton } from '@/components/ui/color-mode';

export const HeaderTop = () => {
  return (
    <Box marginLeft="auto" maxWidth={1440} height="50px" position="relative">
      <Flex width="full" align="center">
        <ColorModeButton />
        <Text>test</Text>
        <Text>test</Text>
        <Text>test</Text>
      </Flex>
    </Box>
  );
};
