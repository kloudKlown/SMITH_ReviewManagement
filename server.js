/**
 * Created by suhas on 3/1/2017.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/app'));
require("./server/app.js")(app);
var port = process.env.PORT || 3001;
app.listen(port);