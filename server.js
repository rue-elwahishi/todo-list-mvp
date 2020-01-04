const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

const items = require("./Routes/API/item.js");
// const user = require("./Routes/API/user");

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
// bodyparser middleware;
app.use(bodyParser.json());

// conecting to client
app.use(express.static(path.join(__dirname, "client", "build")));

// DB config
const db = require("./config/keys.js");
// connect to MONGO
mongoose
  .connect(db.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));
//   use Routes
// app.use(user);
app.use("/API/item", items);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const PORT = process.env.PORT || 2000;
app.listen(PORT, function() {
  console.log("Server is listening...");
});
