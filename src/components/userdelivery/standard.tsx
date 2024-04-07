// Import necessary modules and components
"use client";
import { useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";
import { v4 as uuidv4 } from 'uuid';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "~/utils/api";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useStateStore } from "~/store";
import { useToast } from "~/components/ui/use-toast"


enum Plan {
  STANDARD = "STANDARD",
  EXPRESS = "EXPRESS",
}

enum DeliveryStatus {
  PENDING = "PENDING",
  DELIVERED = "DELIVERED",
}

const formSchema = z.object({
  remail: z.string(),
  rfirstname: z.string(),
  rlastname: z.string(),
  rphone: z.string(),
  sphone: z.string(),
  fromPlace: z.string(),
  toPlace: z.string(),
  fromaddress: z.string(),
  toaddress: z.string(),
  items: z.string(),
});
export default function Standard() {
  const { data: session } = useSession();
  const user = session?.user;
  const {setDeliveryId , setReceiverId, setDestination, setPickup} = useStateStore();
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      remail: "",
      rfirstname: "",
      rlastname: "",
      rphone: "",
      sphone: "",
      fromPlace: "",
      toPlace: "",
      fromaddress: "",
      toaddress: "",
      items: "1",
    },
  });
  const router = useRouter();
  const destinationOptions = [
    "Mangalore",
    "Manipal",
    "Padubidri",
    "Udupi",
    "Kundapura",
    "Moodbidri",
    "Kinnigoli",
    "Surathkal",
    "Mulki",
    "Bantwal",
    "Puttur",
    "Sullia",
    "Belthangady",
    "Dharmasthala",
    "Karkala",
    "Kapu",
    "Kota",

    // Uttara Kannada
    "Ankola",
    "Bhatkal",
    "Honnavar",
    "Karwar",
    "Kumta",
    "Mundgod",
    "Sirsi",
    "Siddapura",
    "Yellapur",

    // Additional towns/cities
    "Ajekar",
    "Bajpe",
    "Belur",
    "Brahmavar",
    "Byndoor",
    "Coondapur",
    "Gangolli",
    "Hebri",
    "Hiriyadka",
    "Hosanagara",
    "Kaup",
    "Kemmannu",
    "Madanthyar",
    "Murdeshwar",
    "Panambur",
    "Perampalli",
    "Santhekatte",
    "Shirva",
    "Someshwara",
    "Taluk",
    "Vandse",
    "Vitla",
  ];

  const addExpress = api.delivery.create.useMutation();

  // Fetch receiver's ID outside of onSubmit
  const receiverEmail = form.watch("remail");
  const receiverQuery = api.user.useremail.useQuery({ text: receiverEmail });
  const trackingid:string = uuidv4();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log("Submitting form with values:", values);

      // Use receiverQuery.data.id here
      await addExpress.mutateAsync({
        trackingID : trackingid,
        senderID: user?.id ?? "01001",
        receiverID: receiverQuery.data?.id ?? "01001",
        fromPlace: values.fromPlace,
        toPlace: values.toPlace,
        sphone: values.sphone,
        rphone: values.rphone,
        plan: Plan.STANDARD,
        scanNumber: 1000,
        status: DeliveryStatus.PENDING,
        items: parseInt(values.items),
        
      });

      setDeliveryId(trackingid);
      setReceiverId(receiverQuery.data?.id ?? "0");
      setPickup(values.fromPlace);
      setDestination(values.toPlace);
      toast({
        title: "Standard Delivery",
        description: `ID : ${trackingid}`,
      });
      console.log("Form submitted successfully", values);
      await router.push("/busses");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <MaxWidthWrapper className="mx-auto mb-10 mt-10 w-full max-w-md rounded-none bg-white p-4 shadow-input dark:bg-black md:rounded-2xl md:p-8">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Welcome to WebWay
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Let us know your details to get started
      </p>
      <div style={{ padding: "20px" }}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
              <FormField
                control={form.control}
                name="rfirstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{"First Name"}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Dhanush"
                        {...field}
                        style={{ padding: "10px" }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rlastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{"Last Name"}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Naik"
                        {...field}
                        style={{ padding: "10px" }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="remail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Receivers Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Email"
                      {...field}
                      style={{ padding: "10px" }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rphone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Receivers Phone No.</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Phone No."
                      {...field}
                      style={{ padding: "10px" }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sphone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senders Phone No.</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Phone No."
                      {...field}
                      style={{ padding: "10px" }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fromPlace"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pickup location</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      style={{ padding: "10px", fontSize: "16px" }}
                    >
                      <option value="" disabled>
                        Select Destination
                      </option>
                      {destinationOptions.map((place) => (
                        <option key={place} value={place}>
                          {place}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="toPlace"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>frm</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      style={{ padding: "10px", fontSize: "16px" }}
                    >
                      <option value="" disabled>
                        Select Destination
                      </option>
                      {destinationOptions.map((place) => (
                        <option key={place} value={place}>
                          {place}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="items"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Items</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Num of Items"
                      {...field}
                      style={{ padding: "10px" }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" style={{ padding: "10px" }}>
              {"Submit"}
            </Button>
          </form>
        </Form>
      </div>
    </MaxWidthWrapper>
  );
}
