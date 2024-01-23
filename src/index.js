
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoute = require("./routes/auth-route");

const createError = require("./utils/createError")
const errorHandler = require("./middlewares/error");
const notFoundHandler = require("./middlewares/notFound");

const web = express();
web.use(cors());

web.use("/auth", authRoute);

web.use(errorHandler);
web.use("*", notFoundHandler)

const port = process.env.PORT
web.listen(port, () => {
    console.log(`\nServer run on port ${port}\n\nURL : http://localhost:${port}`);
});
