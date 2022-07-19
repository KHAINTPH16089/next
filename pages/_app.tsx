import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../component/Layout'
import { AppPropsWithLayout } from '../models/layout'
import { SWRConfig } from 'swr';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? Layout;
  return <LayoutWrapper>
      <SWRConfig value={{fetcher: async (url) => {}}}>
        <Component {...pageProps} />
      </SWRConfig>
    </LayoutWrapper>
}

export default MyApp
