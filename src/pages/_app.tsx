import type { AppProps } from "next/app"

import "../../styles/global.scss"
import "swiper/css/bundle"
import { useRouter } from "next/router"
import { useEffect } from "react"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("1050387735671240") // facebookPixelId
        ReactPixel.pageView()

        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])

  return <Component {...pageProps} />
}

export default MyApp

