var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	
	title: {
		type: String,
		unique: true
	},
	link: {
		type: String
	},
	url: {
		type: String,
		required: true
	}
	//favorite? TODO
	// favorite: [{
	// 	type: Schema.Types.ObjectId,
	// 	ref: "favorite"
	// }]
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;