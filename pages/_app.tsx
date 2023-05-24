import MainContextProvider from "@/context/Main";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Nunito, Nunito_Sans, Source_Sans_Pro } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { Router } from "next/router";
import { useEffect } from "react";
import NProgress from "nprogress";
import "../styles/nprogress.css";

const source_sans_pro = Source_Sans_Pro({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["200", "400"],
});

const nunitosans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunitosans",
  weight: ["400", "600", "700"],
});
export default function App({ Component, pageProps }: AppProps) {
  const router = Router;

  NProgress.configure({
    showSpinner: false,
    trickleSpeed: 200,
    trickleRate: 0.05,
    minimum: 0.5,
  });

  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteDone);
    router.events.on("routeChangeError", handleRouteDone);

    return () => {
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteDone);
      router.events.off("routeChangeError", handleRouteDone);
    };
  }, [router]);

  return (
    <SessionProvider session={pageProps.session}>
      <MainContextProvider>
        <main
          className={`${source_sans_pro.variable} font-sans ${nunitosans.variable} font-sans`}
        >
          <Component {...pageProps} />
        </main>
      </MainContextProvider>
    </SessionProvider>
  );
}
