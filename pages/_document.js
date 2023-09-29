import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {" "}
        <link
          rel='stylesheet'
          href='https://site-assets.fontawesome.com/releases/v6.4.0/css/all.css'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Dashboard</title>
      </Head>

      <body style={{ position: "relative" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
