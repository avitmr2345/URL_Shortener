import express from "express";
import {
  handleGenerateShortURL,
  handleRedirectURL,
  handleGetAnalytics,
} from "../controllers/url.js";
const router = express.Router();

router.post("/", handleGenerateShortURL);
router.get("/:shortId", handleRedirectURL);
router.get("/analytics/:shortId", handleGetAnalytics);

export default router;
