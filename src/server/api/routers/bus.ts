import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

enum Plan {
  STANDARD = "STANDARD",
  EXPRESS = "EXPRESS",
}

enum DeliveryStatus {
  PENDING = "PENDING",
  DELIVERED = "DELIVERED",
}

enum OrderStatus {
    ACCEPTED = "ACCEPTED",
    PENDING = "PENDING",
    DECLINED = "DECLINED"
  }

export const busRouter = createTRPCRouter({
    addbusorder : publicProcedure
    .input(z.object({
        trackingID : z.string(),
        numberPlate : z.string(),
        Pickup: z.string(),
        Destination: z.string(),
        rid : z.string(),
        Status : z.enum([OrderStatus.ACCEPTED, OrderStatus.DECLINED, OrderStatus.PENDING])
    })).mutation(async ({ctx, input}) => {
        return ctx.db.busOrders.create({
            data: {
                trackingID: input.trackingID,
                numberPlate: input.numberPlate,
                Pickup : input.Pickup,
                Destination: input.Destination,
                rid : input.rid,
                Status: input.Status
            }
        })
    }),
    getpendingorder : publicProcedure
    .input(z.object({
        numberPlate : z.string(),
    })).query(async ({ctx, input}) => {
        return ctx.db.busOrders.findMany({
            where : {
                numberPlate: input.numberPlate,
                Status : "PENDING"
            }
        })
    }),
    getacceptedorder : publicProcedure
    .input(z.object({
        numberPlate : z.string(),
    })).query(async ({ctx, input}) => {
        return ctx.db.busOrders.findMany({
            where : {
                numberPlate: input.numberPlate,
                Status : "ACCEPTED"
            }
        })
    }),
    
});

