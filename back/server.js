require("dotenv").config();
const express = require("express");
const PORT = process.env.SERVER_PORT;
const db = require("./config/db/index");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./routes");
const app = express();
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use("/api", router);

db.sync({ force: false }).then(() =>
  app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
);
