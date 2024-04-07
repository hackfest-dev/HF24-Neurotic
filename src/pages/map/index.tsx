"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("~/components/map/map-container"));

interface LocationData {
  latitude: number;
  longitude: number;
}

const Home: React.FC = () => {
  const [data, setData] = useState<LocationData | null>(null); // Set initial state as null
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        navigator.geolocation.getCurrentPosition(function (position) {
          setData({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <>{data && <Map lat={data.latitude} long={data.longitude} />}</>;
};

export default Home;
