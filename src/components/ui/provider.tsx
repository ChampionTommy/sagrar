'use client';

import { ChakraProvider } from '@chakra-ui/react';

import { system } from '@/lib/styles/theme';

export function Provider(props: React.PropsWithChildren) {
  return <ChakraProvider value={system}>{props.children}</ChakraProvider>;
}
