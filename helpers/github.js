const request = require('request');
const config = require('./config.js');


let getReposByUsername = (username, callback) => {
  let options = {
    url: 'https://api.github.com/users/' + username + '/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  request.get(options, function(error, response, body) {
    var parsed = JSON.parse(response.body);

    parsed.forEach(function(repo) {
      callback(repo);
    })
    //console.log(JSON.parse(response.body)); //for each loop to grab data
    //callback(JSON.parse(response.body)[0]);
  })
}

module.exports.getReposByUsername = getReposByUsername;