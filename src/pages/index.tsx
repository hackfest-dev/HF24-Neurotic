import Head from "next/head";
import LandingText from "~/components/layout/landing-text";

export default function Home() {
  return (
    <>
      <Head>
        <title>WebWay</title>
        <meta name="description" content="Webway" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main>
        <LandingText />
      </main>
    </>
  );
}
