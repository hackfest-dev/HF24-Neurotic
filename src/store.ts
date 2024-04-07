import { create } from "zustand";

type StateStore = {
  addEventOpen: boolean;
  setAddEventOpen: () => void;
  longitude: number;
  setLongitude: (longitude: number) => void;
  latitude: number;
  setLatitude: (latitude: number) => void;
  busNo: string;
  setbusNo : (busNo : string) => void;
  deliveryid : string;
  setDeliveryId: (deliveryid: string) => void;
  receiverId : string;
  setReceiverId: (receiverid: string) => void;
  Pickup : string;
  setPickup: (Pickup: string) => void;
  Destination : string;
  setDestination: (Destination: string) => void;
};

export const useStateStore = create<StateStore>((set) => {
  return {
    addEventOpen: false,
    setAddEventOpen: () =>
      set((state) => ({ addEventOpen: !state.addEventOpen })),
    longitude: 0,
    setLongitude: (longitude: number) => set({ longitude }),
    latitude: 0,
    setLatitude: (latitude: number) => set({ latitude }),
    busNo: "0",
    setbusNo : (busNo: string) => set({busNo}),
    deliveryid : "0",
    setDeliveryId : (deliveryid: string) => set({deliveryid}),
    receiverId : "0",
    setReceiverId: (receiverId : string) => set({receiverId}),
    Pickup : "0",
    setPickup: (Pickup : string) => set({Pickup}),
    Destination : "0",
    setDestination: (Destination : string) => set({Destination}),
  };
});
