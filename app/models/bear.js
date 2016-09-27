var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BearSchema = new Schema({
	name: {
		first: String,
		last: String
	}, 
	age: {
		type: Number,
		min: 0
	}
});

module.exports = mongoose.model('Bear', BearSchema);