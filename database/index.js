const mongoose = require('mongoose');
var promise = mongoose.connect('mongodb://localhost/fetcher', {
	useMongoClient: true, 
});

let repoSchema = mongoose.Schema({ 
  id: Number, 
	username: String, 
	repos: {
		_id: Number, 
		name: String, 
		url: String, 
		updatedDate: Date, 
	},
}); //https://developer.github.com/v3/ info here

let Repo = mongoose.model('Repo', repoSchema);


let save = (JSONdata) => { 
  // This function should save a repo or repos to
  // the MongoDB
  var githubRepo = new Repo({
		username: JSONdata.owner.login, 
		repos: {
			_id: JSONdata.id,
			name: JSONdata.name, 
			url: JSONdata.owner.url, 
			updatedDate: JSONdata.updated_at, 
		},
	});
  githubRepo.save()
}

module.exports.save = save;

//https://api.github.com/users/octocat/repos check this for example of how repo data comes back

//https://api.github.com/users{/user}/repos
	// var newRepo = new Repo({
	// 	id: 122334,
	// 	username: 'octocat', 
	// 	repos: {
	// 		name: 'git-consortium',
	// 		url: 'https://github.com/octocat/git-consortium', 
	// 		updatedDate: '2017-12-06T01:15:32Z', 
	// 	}
	// });