import { createTRPCRouter } from "~/server/api/trpc";
import { userRouter } from "./routers/userRouter";
import { testRouter } from "./routers/testRouter";
import { subjectRouter } from "./routers/subjectRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  test: testRouter,
  subject: subjectRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
