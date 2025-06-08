import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface NewsLayoutProps {
  children: ReactNode;
}

const NewsLayout = ({ children }: NewsLayoutProps) => {
  return <Box as="main">{children}</Box>;
};

export default NewsLayout;
