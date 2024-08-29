import express from "express";
import urlRoute from "./routes/url.js";
import staticRoute from "./routes/staticRouter.js";
import connectionToMongoDB from "./connection.js";

const app = express();
const PORT = 3000;

connectionToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() =>
  console.log("MongoDB connected")
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", staticRoute);
app.use("/url", urlRoute);

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
