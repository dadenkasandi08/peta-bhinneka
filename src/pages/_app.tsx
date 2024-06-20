import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Explorasi budaya lewat peta " />
        <meta name="viewport" content="viewport-fit=cover" />
        <title>PETA BHINEKA</title>
        <meta name="dicoding:email" content="dadenkasandi43@mhs.unram.ac.id"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
