import React from "react";

const BusDetails = () => {
  // Array of bus details objects
  const busDetailsArray = [
    {
      busName: "Navadurga",
      busNo: "NAV828",
      departureTime: "08:16",
      arrivalTime: "09:16",
      from: "Mangalore",
      to: "Udupi",
      duration: "",
    },
    {
      busName: "Padmambikaa",
      busNo: "PAD161",
      departureTime: "17:42",
      arrivalTime: "00:42",
      from: "Mangalore",
      to: "Udupi",
      duration: "",
    },
    {
      busName: "Vishal",
      busNo: "VIS228",
      departureTime: "17:32",
      arrivalTime: "00:32",
      from: "Mangalore",
      to: "Udupi",
      duration: "",
    },
    {
      busName: "Canara",
      busNo: "CAN744",
      departureTime: "16:59",
      arrivalTime: "17:59",
      from: "Mangalore",
      to: "Udupi",
      duration: "",
    },
    {
      busName: "Laxmi Prasad",
      busNo: "LAX871",
      departureTime: "16:40",
      arrivalTime: "17:40",
      from: "Mangalore",
      to: "Udupi",
      duration: "",
    },
    {
      busName: "Reshma",
      busNo: "RES446",
      departureTime: "17:26",
      arrivalTime: "00:26",
      from: "Mangalore",
      to: "Udupi",
      duration: "",
    },
    {
      busName: "Laxmi Ganesh",
      busNo: "LAX474",
      departureTime: "11:31",
      arrivalTime: "12:31",
      from: "Mangalore",
      to: "Udupi",
      duration: "",
    },
    {
      busName: "Ayra",
      busNo: "AYR955",
      departureTime: "03:11",
      arrivalTime: "04:11",
      from: "Mangalore",
      to: "Udupi",
      duration: "",
    },
    {
      busName: "Mercy",
      busNo: "MER420",
      departureTime: "14:59",
      arrivalTime: "15:59",
      duration: "",
    },
  ];

  // Function to calculate duration
  const calculateDuration = (departureTime: string, arrivalTime: string) => {
    const [depHour, depMinute] = departureTime.split(":").map(Number);
    const [arrHour, arrMinute] = arrivalTime.split(":").map(Number);
    let duration =
      ((arrHour ?? 0) - (depHour ?? 0)) * 60 +
      ((arrMinute ?? 0) - (depMinute ?? 0));
    if (duration < 0) {
      duration += 24 * 60; // Add 24 hours if arrival is on the next day
    }
    return duration.toString();
  };

  // Calculate duration for each bus
  busDetailsArray.forEach((bus) => {
    bus.duration = calculateDuration(bus.departureTime, bus.arrivalTime);
  });

  return (
    <div className="flex w-[100vw] flex-col items-center justify-evenly">
      {busDetailsArray.map((bus, index) => (
        <div
          key={index}
          className="my-4 flex w-[70vw] justify-evenly rounded-lg border-2 border-blue-700 bg-gray-100 p-4"
        >
          <p className="text-lg font-bold">{bus.busName}</p>
          <p>{bus.busNo}</p>
          <p>{bus.departureTime}</p>
          <p>{bus.arrivalTime}</p>
          <p className="text-lg font-bold">{bus.from}</p>
          <p>{bus.to}</p>
          <p>{bus.duration}</p>
          <button className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700">
            Book
          </button>
        </div>
      ))}
    </div>
  );
};

export default BusDetails;
