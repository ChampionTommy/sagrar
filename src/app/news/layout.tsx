import { ReactNode } from 'react';
import { Container } from '@/components/ui/container';

interface NewsLayoutProps {
  children: ReactNode;
}

const NewsLayout = ({ children }: NewsLayoutProps) => {
  return <Container>{children}</Container>;
};

export default NewsLayout;
