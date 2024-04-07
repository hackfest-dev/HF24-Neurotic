import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

import QRCode from "qrcode";

export const qrRouter = createTRPCRouter({
  getSenderQR: publicProcedure
  .input(z.object({ trackingID: z.string() }))
  .query(async ( {ctx,input} ) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const data = await ctx.db.senderQR.findFirst({
      where: {
        deliveryId : input.trackingID
      }
    })
    const jsonStringData = JSON.stringify(data);
    console.log(jsonStringData);
    const qr = QRCode.toDataURL(jsonStringData);

    return qr;
  }),
  getRecieverQR: publicProcedure
  .input(z.object({ trackingID: z.string() }))
  .query(async ( {ctx,input} ) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const data = await ctx.db.receiverQR.findFirst({
      where: {
        deliveryId : input.trackingID
      }
    })
    const jsonStringData = JSON.stringify(data);
    console.log(jsonStringData);
    const qr = QRCode.toDataURL(jsonStringData);

    return qr;
  }),
});
