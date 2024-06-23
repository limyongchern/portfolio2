import { AppShell } from '@mantine/core';
import { Header, Footer } from 'components/navigation';
import type { AppProps } from 'next/app';

import 'styles/common/global.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AppShell
    padding={0}
    header={<Header />}
    footer={<Footer />}
    navbarOffsetBreakpoint="sm">
    <Component {...pageProps} />
  </AppShell>
);

export default MyApp;
