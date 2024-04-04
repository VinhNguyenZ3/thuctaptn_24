const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;
const route = require('./routers');


app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
// app.use(morgan("combined"));
// Middware
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());

// Template engine
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources/views"));


route(app);





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
