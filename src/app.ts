import "dotenv/config";
// import { PrismaClient } from "@prisma/client";
// import { prisma } from "./lib/prisma.ts";
// import { Express } from "express";

import express from "express";

const app = express();

const PORT = process.env.PORT || 5000;
app.get("/", (req: any, res: any) => {
	res.send("helo world");
});

// const start = async () => {
// 	try {
// 		await prisma.$connect();
// 		console.log("connected to db");

// 		app.listen(PORT, () => {
// 			console.log(`Server started on port ${PORT}`);
// 		});
// 	} catch (error: any) {}
// };

// app.listen(PORT, console.log(`Server started on port ${PORT}`));
