import express from "express";
import URL from "../models/url.js";
const router = express.Router();

router.get("/", async (req, res) => {
  if (!req.user) return res.redirect("/login");
  const allUrls = await URL.find({ createdBy: req.user._id  });
  return res.render("home.ejs", { urls: allUrls });
});

router.get("/signup", async (req, res) => {
  return res.render("signup.ejs");
});

router.get("/login", async (req, res) => {
  return res.render("login.ejs");
});

export default router;
