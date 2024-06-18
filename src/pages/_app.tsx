import "@/styles/globals.css";
import "leaflet/dist/leaflet.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Donasi untuk anak-anak Indonesia" />
        <meta name="viewport" content="viewport-fit=cover" />
        <title>PETA BHINEKA</title>
        <link rel="icon" href="" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
