import {PrismaClient} from "@prisma/client"
import { drizzle } from 'drizzle-orm/prisma/pg';

const prisma = new PrismaClient().$extends(drizzle());
declare global {
  var prisma: PrismaClient;
};

const prismadb = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;

