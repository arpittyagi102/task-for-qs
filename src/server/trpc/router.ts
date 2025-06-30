import { initTRPC } from "@trpc/server";
import { PrismaClient } from "../../generated/prisma";

const t = initTRPC.create();
const prisma = new PrismaClient();

export const appRouter = t.router({
    hello: t.procedure.query(() => {
        return { message: "Hello from tRPC!" };
    }),

    getUniversityProfile: t.procedure.query(async () => {
        return await prisma.university.findFirst();
    }),

    getUniversityRankings: t.procedure.query(async () => {
        const university = await prisma.university.findFirst();
        if (!university) return [];

        return await prisma.ranking.findMany({
            where: { universityId: university.id },
            orderBy: { year: "asc" },
            take: 5,
        });
    }),
});

export type AppRouter = typeof appRouter;
