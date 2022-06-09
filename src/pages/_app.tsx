import type { AppProps } from 'next/app'

import '../../styles/global.scss'
import "swiper/css/bundle";


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
