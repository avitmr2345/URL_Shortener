import User from "../models/user.js";
import { setUser } from "../service/auth.js";

async function handleUserSignUP(req, res) {
  const { name, email, password, role } = req.body;
  await User.create({
    name,
    email,
    password,
    role,
  });
  return res.redirect("/");
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user)
    return res.render("login.ejs", {
      error: "Invalid Username or Password",
    });
  const token = setUser(user);
  res.cookie("token", token);
  return res.redirect("/");
}

export { handleUserSignUP, handleUserLogin };
