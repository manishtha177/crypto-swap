import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';

import './app.css';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import { WalletProvider } from '../src/context/Wallet';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <WalletProvider>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Coin Swap</title>
          <meta name='description' content='Swap any crypto coin from your wallet.' />
          <link rel='icon' href='/favicon.ico' />
          <meta name='viewport' content='initial-scale=1, width=device-width' />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </WalletProvider>
  );
}
