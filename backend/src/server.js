import cors from "cors";
import express from "express";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import connectDB from "./config/db.js";
import ratelimiter from "./middlewares/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;



app.use(cors({
  origin: 'http://localhost:5173', 
}));
app.use(express.json()); // Middleware to parse JSON bodies
app.use(ratelimiter); // Apply rate limiting middleware

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
  });
}).catch((error) => {
  console.error("Database connection error:", error);
});

