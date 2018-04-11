var mongoose = require('mongoose');

var model = mongoose.model('user', new mongoose.Schema({
	name: {type: String, unique: true}
	, phone: {type: String, unique: true}
	, email: {type: String}
  , username: {type: String}
  , password: {type: String}
  , salt: {type: String}
}));

exports.getModel = function() {
	return model;
}
