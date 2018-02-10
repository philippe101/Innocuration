var express = require('express');
var router = express.Router();
var User = require('../models/user');

var Article = require('../models/Article.js');


router.get("/", function(req, res) {
	res.sendFile(process.cwd() + "/public/index.html");
});

router.get("/api/saved", function(req, res) {

	Article.find({}, function(err, docs) {

		if(err){
			console.log(err);
		}
		else {
			res.json(docs);
		}
		// var resultData = [];

		// data.forEach(function (article) {
		// 	resultData.push({
		// 		title: article.title,
		// 		url: article.url
		// 	});
		}
		// res.send(resultData);
		
	});
});

router.post("/api/saved", function(req, res) {

	var entry = new Article (req.body);

	entry.save(function(err, doc) {

		if(err) {
			console.log(err);
			res.sendStatus(400);
		}
		else {
			console.log(doc);
			res.sendStatus(200);
		}
	});
});

router.post("api/delete/:articleMongoId", function(req, res) {
	console.log(req.params.articleMongoId)
	
	Article.findByAndRemove(req.params.articleMongoId, function(err, todo) {
		if(err) {
			console.log(err);
			res.sendStatus(400);
		}
		else {
			res.sendStatus(200);
		}
	});
});


router.get("*", function(req, res) {
	res.redirect("/");
});


// GET route for reading data
router.get('/', function (req, res, next) {
  return res.sendFile(path.join(__dirname + '/Home.jsx'));
});


//POST route for updating data
router.post('/user', function (req, res, next) {
  // confirm that user typed same password twice
  if (req.body.password !== req.body.password) {
    var err = new Error('Passwords do not match.');
    err.status = 400;
    res.send("passwords dont match");
    return next(err);
  }

  if (req.body.email &&
    req.body.password) {

    var userData = {
      email: req.body.email,
      password: req.body.password,
    }

    User.create(userData, function (error, user) {
      if (error) {
        return next(error);
      } else {
        req.session.userId = user._id;
        return res.redirect('/profile');
      }
    });

  } else if (req.body.logemail && req.body.logpassword) {
    User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
      if (error || !user) {
        var err = new Error('Wrong email or password.');
        err.status = 401;
        return next(err);
      } else {
        req.session.userId = user._id;
        return res.redirect('/profile');
      }
    });
  } else {
    var err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
})

// GET route after registering
// router.get('/profile', function (req, res, next) {
//   User.findById(req.session.userId)
//     .exec(function (error, user) {
//       if (error) {
//         return next(error);
//       } else {
//         if (user === null) {
//           var err = new Error('Not authorized! Go back!');
//           err.status = 400;
//           return next(err);
//         } else {
//           return res.send('<h1>Name: </h1>' + user.username + '<h2>Mail: </h2>' + user.email + '<br><a type="button" href="/logout">Logout</a>')
//         }
//       }
//     });
// });

// GET for logout logout
// router.get('/logout', function (req, res, next) {
//   if (req.session) {
//     // delete session object
//     req.session.destroy(function (err) {
//       if (err) {
//         return next(err);
//       } else {
//         return res.redirect('/');
//       }
//     });
//   }
// });


module.exports = router;



























