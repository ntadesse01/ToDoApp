import express from "express";
import cors from "cors";
import { PORT, HOST } from "./config/secret.js";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

import applicationRouter from "./router/index.js"
app.use("/api",applicationRouter)

//testing route
app.get("/", (req, res, next) => {
  return res.status(200).json({
    success: true,
    message: "testing",
  });
});

app.listen(PORT, HOST, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`servor is running http://${HOST}:${PORT}`);
  }
});
