const express = require('express');
const helpers = require('../helpers/github');
const db = require('../database/index');
let app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.post('/repos', function (req, res) {
	if (!req.body) {
		res.sendStatus(400);
	}
  var data = req.body.data;
	//console.log('this is the username', data);
  helpers.getReposByUsername(data, db.save);
  const results = [];
  db.find()
    .then(function(repos) {
      results.push(repos[0].repos.name);
      console.log('results array inner scope', results);
      res.send(JSON.stringify(results));
    });
  //res.send(req.body.data);
});

app.get('/repos', function (req, res) {
  // This route should send back the top 25 repos

  //console.log('results array outer scope', results);
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

