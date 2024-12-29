import express from "express"
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import ConnectDB  from "./src/config/db.js"
import authRoutes from "./src/routes/auth.route.js";
import postsRoutes from "./src/routes/post.route.js"
import cors from "cors";

configDotenv();
const app = express();
app.use(bodyParser.json())

app.use(express.json());
app.use(cors());

ConnectDB();



app.use("/api", authRoutes);
app.use("/api", postsRoutes);




// Start the server
app.listen(5000, () => console.log('Server running on http://localhost:5000'));
