import express from "express";
import conectDb from "./utils/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import companyRouter from "./routes/company.route.js";
import jobRouter from "./routes/job.route.js";
import applicationRouter from "./routes/application.route.js";

dotenv.config({});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,

}
app.use(cors(corsOptions));
let port = process.env.port || 3000;

app.use("/api/v1/user", userRouter);
app.use("/api/v1/company", companyRouter);
app.use("/api/v1/job", jobRouter);

app.use("/api/v1/application", applicationRouter);  


app.listen(port, () => {
    conectDb();
    console.log(`Server is running on port ${port}`);
});

