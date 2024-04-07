import Head from "next/head";
import Express from "~/components/userdelivery/express";

export default function Home() {
  return (
    <>
      <Head>
        <title>WebWay</title>
        <meta name="description" content="Webway" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main>
        <Express />
      </main>
    </>
  );
}
