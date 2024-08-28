import express from "express";
import { handleGenerateShortURL } from "../controllers/url.js";
const router = express.Router();

router.post("/", handleGenerateShortURL);

export default router;
