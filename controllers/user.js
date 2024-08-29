import User from "../models/user.js";

async function handleUserSignUP(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
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
  return res.redirect("/");
}

export { handleUserSignUP, handleUserLogin };
