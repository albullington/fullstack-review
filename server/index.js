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
	console.log('this is the username', data);
  helpers.getReposByUsername(data, db.save);
  //console.log('this is my database', db);
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  res.send(req.body.data);
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  res.send('send is working');
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

