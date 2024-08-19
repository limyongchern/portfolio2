import { AppShell } from '@mantine/core';
import { Header, Footer } from 'components/navigation';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import 'styles/common/global.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { locale, push } = useRouter();
  const defaultLocale = 'cn';

  useEffect(() => {
    if (locale !== defaultLocale) {
      push('/', '/', { locale: defaultLocale });
    }
  }, [locale]);

  return (
    <AppShell
      padding={0}
      header={<Header />}
      navbarOffsetBreakpoint="sm"
      styles={{ main: { width: '100%' } }}>
      <Component {...pageProps} />

      <Footer />
    </AppShell>
  );
};

export default MyApp;
