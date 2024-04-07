import { deliveryRouter } from "~/server/api/routers/delivery";
import { userRouter } from "~/server/api/routers/user";
import { qrRouter } from "~/server/api/routers/qr";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { busRouter } from "./routers/bus";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  delivery: deliveryRouter,
  user: userRouter,
  qr: qrRouter,
  bus: busRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
