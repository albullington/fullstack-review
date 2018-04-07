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
    //console.log('sending GET request to Git API', response.body);
    //console.log('parsed', JSON.parse(response.body)[0]);
    callback(JSON.parse(response.body)[0]);
  })
}

module.exports.getReposByUsername = getReposByUsername;