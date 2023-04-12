const express = require("express");
const mysql = require("mysql2");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");


require("dotenv").config();

exports.connection = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "Uttkarsh123#@!",
    database: "IMDB",
  },
  { useNewUrlParser: true }
  );
  app.use(cors());
  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(morgan("dev")); 
  
  // router.post('/removeimages',remove);
  // app.use(bodyParser({limit: '50mb'}));
  const port = 8000;
  // fs.readdirSync("./routes").map((route) => {
  //   app.use("/api",require("./routes/" + route));
  // });
  fs.readdirSync("./routes").map((route)=>{
    app.use("/api",require("./routes/" + route))
  });
  
  
  app.listen(port, () => {
    console.log(`server is started on Port ${port}`);
});
