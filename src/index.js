
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const createError = require("./utils/createError")
const errorHandler = require("./middleware/error");
const notFoundHandler = require("./middleware/notFound");


const web = express();
web.use(cors());

web.use(errorHandler);
web.use("*", notFoundHandler)

const port = process.env.PORT
web.listen(port, () => {
    console.log(`\nServer run on port ${port}\n\nURL : http://localhost:${port}`);
});
