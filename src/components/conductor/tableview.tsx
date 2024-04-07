import React from "react";
import { useStateStore } from "~/store";
import { api } from "~/utils/api";

export const TableView = () => {
  const {busNo} = useStateStore();
  const { data: orders} = api.bus.getpendingorder.useQuery({numberPlate: "NAV828"});
  const { data: orderss } = api.bus.getacceptedorder.useQuery({numberPlate: "NAV828"});


  const handleAccept = async (orderNumber: number) => {
    try {

      console.log(`Order ${orderNumber} accepted.`);
      // Optionally, update the UI to reflect the accepted status
    } catch (error) {
      console.error('Error accepting order:', error);
      // Handle errors appropriately, e.g., display an error message to the user
    }
  };

  const handleDecline = (orderNumber: number) => {
    // Implement your logic for declining the order here
    console.log(`Order ${orderNumber} declined.`);
  };

  return (
    <>
      <div className="existing">
        <h1 className="my-7 text-center text-4xl text-white ">
          Existing Orders
        </h1>
        <div className="mb-10 flex w-[100vw] justify-center overflow-x-auto ">
          <table className="w-3/4 table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Order Number</th>
                <th className="px-4 py-2">Number of Items</th>
                <th className="px-4 py-2">Pickup</th>
                <th className="px-4 py-2">Destination</th>
                <th className="px-4 py-2">Receiver's Name</th>
              </tr>
            </thead>
            <tbody>
              {orderss?.map((order, index) => (
                <tr key={index}>
                             <td className="border px-4 py-2">{order.trackingID}</td>
                  <td className="border px-4 py-2">{order.orderNum}</td>
                  <td className="border px-4 py-2">{order.Pickup}</td>
                  <td className="border px-4 py-2">{order.Destination}</td>
                  <td className="border px-4 py-2">{order.rid}</td>
                  <td className="border px-4 py-2">{order.Status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="upcoming">
        <h1 className="my-7 text-center text-4xl text-white ">
          Upcoming Orders
        </h1>
        <div className="mb-10 flex w-[100vw] justify-center overflow-x-auto ">
          <table className="w-3/4 table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Order Number</th>
                <th className="px-4 py-2">Number of Items</th>
                <th className="px-4 py-2">Pickup</th>
                <th className="px-4 py-2">Destination</th>
                <th className="px-4 py-2">Receiver's Name</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{order.trackingID}</td>
                  <td className="border px-4 py-2">{order.orderNum}</td>
                  <td className="border px-4 py-2">{order.Pickup}</td>
                  <td className="border px-4 py-2">{order.Destination}</td>
                  <td className="border px-4 py-2">{order.rid}</td>
                  <td className="border px-4 py-2">{order.Status}</td>
                  <td className="border px-4 py-2">
                    <button
                      className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
                      onClick={() => handleAccept(order.orderNum)}
                    >
                      Accept
                    </button>
                    <button
                      className="ml-2 rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
                      onClick={() => handleDecline(order.orderNum)}
                    >
                      Decline
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TableView;
