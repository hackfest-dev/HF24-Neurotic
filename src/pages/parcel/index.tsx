import Head from "next/head";
import { Card } from "~/components/cards/type-cards";
import localFont from "next/font/local";
const myFont = localFont({ src: "../../lib/obscura.otf" });
export default function Home() {
  return (
    <>
         <h1
              className={`${myFont.className} bg-gradient-to-b from-purple-600 to-pink-300 bg-clip-text pt-10 text-center text-5xl font-black text-transparent underline-offset-2 `}
            >
              Select a Service
            </h1>
      <main>
        <div className="flex min-h-screen items-center justify-center">

          <div className="grid grid-cols-1 content-center gap-5 md:grid-cols-2 lg:grid-cols-2">
            <Card
              heading={"Standard Plan"}
              buttonText={"Book Now"}
              content={
                "Users who are comfortable taking their packages to the designated bus station and prioritize cost-effectiveness."
              }
              link={"/standard"}
              imagesrc={"/standard.png"}
            />
            <Card
              heading={"Premium Plan"}
              buttonText={"Book Now"}
              content={
                "Schedule a pickup at your location. Our personnel will collect your package and deliver it to the designated bus station for onward travel."
              }
              link={"/premium"}
              imagesrc={"/premium.png"}
            />
          </div>
        </div>
      </main>
    </>
  );
}

{
}
