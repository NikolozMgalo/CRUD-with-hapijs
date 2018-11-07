const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CarSchema = new Schema ({
	name: {
		required: true,
		type: String
	},
	releaseYear: Number,
	condition: String,
	color: String,
	mileage: Number,
})

module.exports = mongoose.model("Car", CarSchema);