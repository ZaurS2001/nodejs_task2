const express = require('express');
const app = express();
const fs = require('fs');
app.get('/pkg/:id', function (req, res) {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (!err) {
        let obj = JSON.parse(data);
        res.send(obj.find((pkg) => pkg.id == req.params.id));
    } else {
      console.error(err);
    }
  });
});
app.get('/pkg', function (req, res) {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (!err) {
        let obj = JSON.parse(data);
        res.send(obj);
    } else {
      console.error(err);
    }
  });
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});