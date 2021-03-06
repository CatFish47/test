var mongoose = require('mongoose');

var model = mongoose.model('user', new mongoose.Schema({
	name: {type: String}
	, phone: {type: String}
	, email: {type: String}
  , username: {type: String, unique: true}
  , password: {type: String}
  , salt: {type: String}
	, picture: {type: String}
}));

exports.getModel = function() {
	return model;
}
