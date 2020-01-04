// const express = require("express");
// const User = require("../../models/User");
// const auth = require("../../middleware/auth");
// const router = express.Router();

// router.post("/users", async (req, res) => {
//   // Create new user
//   try {
//     const user = new User(req.body);
//     await user.save();
//     const token = await user.generateAuthToken();
//     res.status(201).send({ user, token });
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// // user login
// router.post("/users/login", async (req, res) => {
//   try {
//     const { email, user } = req.body;
//     // check if they're valid
//     const checkUser = await User.findByCredentials(email, password);
//     if (!user) {
//       res.status(401).send({ error: "Login failed! username/email not found" });
//     }
//     const token = await user.generateAuthToken();
//     res.send({ user, token });
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// // s

// module.exports = router;
