var mongoose = require('mongoose');

var model = mongoose.model('user', new mongoose.Schema({
	name: {type: String, unique: true}
	, phone: {type: String, unique: true}
	, email: {type: String}
  , password: {type: String}
}));

exports.getModel = function() {
	return model;
}
