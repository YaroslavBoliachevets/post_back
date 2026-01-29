import "dotenv/config";
// import { PrismaClient } from "@prisma/client";
// import { prisma } from "./lib/prisma.ts";
// import { Express } from "express";

import { PrismaClient } from "./generated/prisma/client/client";

import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";

const connectionString = process.env.DATABASE_URL;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });
// console.log(prisma);

import express from "express";

const app = express();

const PORT = process.env.PORT || 5000;
app.get("/", (req: any, res: any) => {
	res.send("helo world");
});

const start = async () => {
	try {
		await prisma.$connect();
		console.log("connected to db");

		app.listen(PORT, () => {
			console.log(`Server started on port ${PORT}`);
		});
	} catch (error: any) {}
};

start();
// app.listen(PORT, console.log(`Server started on port ${PORT}`));
