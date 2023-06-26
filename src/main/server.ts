import express from "express";
import router from "./config/routes";
import cors from "cors";

const app = express();

app.use(router);
app.use(cors());

const APP_PORT = process.env.PORT || 8080;

app.listen(APP_PORT, () => {
    console.log(`Server is running on port ${APP_PORT}`);
});