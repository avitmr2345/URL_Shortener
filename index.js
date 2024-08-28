import express from "express";
import urlRoute from "./routes/url.js";
import URL from "./models/url.js";
import connectionToMongoDB from "./connection.js";

const app = express();
const PORT = 3000;

connectionToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() =>
  console.log("MongoDB connected")
);

app.use(express.json());
app.use("/url", urlRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    }
  );
  return res.redirect(entry.redirectURL);
});

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
