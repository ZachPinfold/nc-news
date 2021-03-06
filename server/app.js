const express = require("express");
const apiRouter = require("./routes/api.router.js");
const { send404, handleInternalError, handleCustomError, handlePSQLErrors } = require("./controllers/error.controller");
const app = express();
const cors = require('cors')
app.use(cors())

app.use(express.json());
app.use("/api", apiRouter);
app.use(send404);

app.use(handlePSQLErrors)
app.use(handleCustomError)
app.use(handleInternalError)
module.exports = app;


// app.listen(3060, () => {
//     console.log('listening to server')
// })