const express = require('express');
const app = express();
app.use(express.static('public'));
const path = require('path');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
})

const server = app.listen(3000, function () {
    console.log("Express App running at http://127.0.0.1:3000");
});