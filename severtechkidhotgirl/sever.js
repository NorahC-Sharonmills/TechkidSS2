const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const RootRouter = require("./router")

mongoose.connect("mongodb://localhost/Sever",
                {
                    useNewUrlParser: true
                }, (err) => {
                    if(!err) console.log("DB Conneted");
                });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: false }));

app.use("/", RootRouter);
// app.get("/", (req, res) => {
//     res.send("HotGirl ne");
// });

const port = process.env.PORT || 1234;
app.listen(port, (err) => {
    if(!err) console.log("OK");
});