const express = require("express");
const app = express();
const path = require('path');
const db = require("./db.json");

const PORT = 8080;

app.use(express.static('public'));


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});


app.get("/profile", (req, res) => {
    res.send(db.profile);
})


app.get("/profile/first-name", (req, res) => {
    res.send(db.profile.firstName);
})


app.get("/profile/last-name", (req, res) => {
    res.send(db.profile.lastName);
})


app.get("/profile/gender", (req, res) => {
    res.send(db.profile.gender);
})


app.get("/profile/phone-number", (req, res) => {
    res.send(db.profile.phoneNumber);
})


app.get("/profile/current-address", (req, res) => {
    res.send(db.profile.currentAddress);
})


app.get("/profile/permanent-address", (req, res) => {
    res.send(db.profile.permanentAddress);
})


app.get("/profile/email", (req, res) => {
    res.send(db.profile.email);
})

app.get("/profile/birthdate", (req, res) => {
    res.send(db.profile.birthdate);
})

app.get("/profile/course", (req, res) => {
    res.send(db.profile.course);
})

app.get("/profile/university", (req, res) => {
    res.send(db.profile.university);
})

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));