'use client';

import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import { Header } from '@/lib/layout/components/header';
import { Footer } from '@/lib/layout/components/footer';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" maxWidth={1440}>
      <Header />
      <Box as="main">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};
