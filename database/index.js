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

//console.log('this is my repo in mongoose', promise.collections.repos.collections);

let find = () => {
	return Repo.find();
}

module.exports.save = save;
module.exports.find = find;