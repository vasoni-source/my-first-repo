import jsonServer from "json-server";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// Import both JSON files
import db from "./db.json" assert { type: "json" };
import db1 from "./db1.json" assert { type: "json" };

// Create routers
const router1 = jsonServer.router(db);
const router2 = jsonServer.router(db1);

// Add middlewares
server.use(middlewares);

// Custom routes for each db
server.use("/api", router1);  // access db.json data at /api/*
server.use("/api1", router2); // access db1.json data at /api1/*

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`✅ JSON Server running on port ${port}`);
  console.log(`➡️ db.json available at /api`);
  console.log(`➡️ db1.json available at /api1`);
});
