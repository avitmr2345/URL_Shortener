import express from "express";
import URL from "../models/url.js";
import { accessTo } from "../middlewares/auth.js";
const router = express.Router();

router.get("/admin/urls", accessTo(["ADMIN"]), async (req, res) => {
  const allUrls = await URL.find({});
  return res.render("home.ejs", { urls: allUrls });
});

router.get("/", accessTo(["NORMAL", "ADMIN"]), async (req, res) => {
  const allUrls = await URL.find({ createdBy: req.user._id });
  return res.render("home.ejs", { urls: allUrls });
});

router.get("/signup", async (req, res) => {
  return res.render("signup.ejs");
});

router.get("/login", async (req, res) => {
  return res.render("login.ejs");
});

export default router;
