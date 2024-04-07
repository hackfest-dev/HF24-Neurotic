import React from "react";
import { useStateStore } from "~/store";
import { api } from "~/utils/api";

const Home = () => {
  const { deliveryid} = useStateStore();
  const { data: qrData } = api.qr.getSenderQR.useQuery({
    trackingID: deliveryid
  })
  return (
    <>
      <h2>QR</h2>
      <img src={qrData} />
    </>
  );
};

export default Home;


