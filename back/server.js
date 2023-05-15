const express = require("express");
const db = require("./db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./routes");
const app = express();
const models = require("./models");

app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use("/api", router);

const PORT = 3001;

db.sync({ force: false }).then(() =>
  app.listen(PORT, () => console.log("Listening on port: ", PORT))
);
