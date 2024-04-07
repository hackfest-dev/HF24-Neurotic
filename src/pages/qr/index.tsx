import React from "react";
import { Fade } from "react-awesome-reveal";
import MaxWidthWrapper from "~/components/layout/max-width-wrapper";
import { useStateStore } from "~/store";
import { api } from "~/utils/api";
import localFont from "next/font/local";
import { Button } from "~/components/ui/button";
import Link from "next/link";
const myFont = localFont({ src: "../../lib/obscura.otf" });

const Home = () => {
  const { deliveryid } = useStateStore();
  const { data: qrData } = api.qr.getSenderQR.useQuery({
    trackingID: deliveryid,
  });
  return (
    <MaxWidthWrapper>
      <Fade triggerOnce cascade>
        <div className="mb-5 mt-5">
          <h1
            className={`${myFont.className} bg-gradient-to-b from-blue-600 to-white bg-clip-text pt-10 text-center text-6xl font-black text-transparent underline-offset-2 `}
          >
            Your Delivery
          </h1>
          {/* <p className="mt-5 text-center max-w-prose text-white sm-text-lg font-semibold underline">
                    lorem ipsum
                </p> */}
          <img src={qrData} />
          <Link href={"/map"}>
            <Button>Track</Button>
          </Link>
        </div>
      </Fade>
    </MaxWidthWrapper>
  );
};

export default Home;
