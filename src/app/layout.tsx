import type { Metadata, Viewport } from 'next';

import { Provider } from '@/components/ui/provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

import '@/lib/styles/globals.css';
import { Flex } from '@chakra-ui/react';

type RootLayoutProps = {
  children: React.ReactNode;
};

const APP_NAME = 'КГБПОУ Славгородский аграрный техникум';

export const metadata: Metadata = {
  title: { default: APP_NAME, template: '%s |' },
  description: 'Сайт Славгородского аграрного техникума',
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F6F6F6',
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <Header />
          <Flex as="main" flexGrow="1" flexDirection="column" flexShrink="0">
            {children}
          </Flex>
          <Footer />
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
