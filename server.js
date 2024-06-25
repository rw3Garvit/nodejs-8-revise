require("dotenv").config();
let http = require("http");
let express = require("express");
const routes = require("./routes");
const dbConnect = require("./db/dbConnect");
const cookieParser = require("cookie-parser");
let app = express();

//for body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//for cookie
app.use(cookieParser());

//routes

app.use("/v1", routes);

//database-mongoDB
dbConnect();

//server
http.createServer(app).listen(process.env.PORT, () => {
  console.log(`server started on port no ${process.env.PORT}`);
});
