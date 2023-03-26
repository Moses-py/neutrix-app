import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Nunito, Nunito_Sans } from "next/font/google";

const nunito = Nunito({
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
  return (
    <main
      className={`${nunito.variable} font-sans ${nunitosans.variable} font-sans`}
    >
      <Component {...pageProps} />
    </main>
  );
}
