import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Script
        disable-devtool-auto
        src="https://cdn.jsdelivr.net/npm/disable-devtool"
        disable-menu="xxx"
        clear-log="true"
        disable-select="true"
        disable-copy="true"
        disable-cut="true"
        disable-paste="true"
      />
      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
