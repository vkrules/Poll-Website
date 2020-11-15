const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();
app.set("view engine", "ejs");



app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req,res) {
    res.sendFile(__dirname + "/index.html");
})


app.post("/", function(req,res) {
    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const email = req.body.email;
    res.send("Thank You for signing up " + firstName + ".");
})


app.listen(3000, function() {
    console.log("Server listening at port 3000");
});
