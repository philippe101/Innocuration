var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var methodOverride = require("method-override");


// var Note = require("./models/note.js");
var Article = require("./models/article.js");

var request = require("request");
var cheerio = require("cheerio");
//JS ES6 Promises
mongoose.Promise = Promise;


var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({
	extended: false
}));

// app.use(methodOverride('_method'));

app.use(express.static("./public"));



//TODO!
app.set('', __dirname + '/');



//DB config mongoose

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/innocurate";

mongoose.connect(MONGODB_URI);

// var databaseUri = "mongodb://localhost/innocurate";
// if (process.env.MONGODB_URI) {
// 	mongoose.connect(process.env.MONGODB_URI);
// }else {
// 	mongoose.connect(databaseUri);
// }

var db = mongoose.connection;



db.on("error", function(error) {
	console.log("Mongoose Error: ", error);
});

db.once("open", function() {
	console.log("Mongoose connection successful");
});

var routes = require('./controllers/controller');
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});


// var Article = require('./models/Article.js');

//Routes
// app.get("/", function(req, res) {
// 	Article.find({},function (error, data) {
// 		if (error) {
// 			res.send(error);			
// 		}
// 		else {
// 			var newsObj = {
// 				Article: data
// 			};
// 			res.render("index", newsObj);
// 		}
// 	});
// });

// app.get("/scrape", function(req, res) {
// 	request("http://archive.org", function(error, response, html){
// 		var $ = cheerio.load(html);

// 		$("h4.headline-link").each(function(i, element) {

// 			var result = {};

// 			result.title = $(this).text();
// 			result.link = $(this).parent("a").attr("href");

// 			var entry = new Article(result);

// 			entry.save(function(err, doc) {
// 				if(err) {
// 					console.log(err);
// 				}
// 				else {
// 					console.log(doc);
// 				}
// 			});
// 		});
// 		res.redirect("/");
// 		console.log("Successfully Scraped");
// 	});
// });

// app.post("/notes/:id", function(req, res) {
// 	var newNote = new Note(req.body);
// 	newNote.save(function (error, doc) {
// 		if (error) {
// 			console.log(error);
// 		}
// 		else {
// 			console.log("this is the DOC " + doc);
// 			Article.findOneAndUpdate({
// 				"_id": req.params.id 
// 			},
// 				{ $push: { "note": doc._id } }, {new: true}, function(err, doc) {
// 					if (err) {
// 						console.log(err);
// 					}
// 					else {
// 						console.log("note saved: " + doc);
// 						res.redirect("/notes/" + req.params.id);
// 					}
// 			});
// 		}
// 	});
// });

// app.get("/notes/:id", function(req, res) {
// 	console.log("This is the req.params: " + req.params.id);
// 	Article.find({
// 		"_id": req.params.id
// 	})
// 	.populate("note")
// 	.exec(function(error, doc) {
// 		if (error) {
// 			console.log(error);
// 		}
// 		else {

// 			var notesObj = {
// 				Article: doc
// 			};
// 			console.log(notesObj);
// 		}
// 	});
// });


// app.post("/delete/:id", function(req, res) {
// 	Article.remove({
// 		"_id": req.params.id
// 	})
// 	.exec(function(error, doc) {
// 		if (error) {
// 			console.log(error);
// 		}
// 		else {
// 			console.log("note deleted");
// 			res.redirect("/");
// 		}
// 	});
// });




app.listen(PORT, function() {
	console.log("App running on PORT" + PORT + "|");
});





























