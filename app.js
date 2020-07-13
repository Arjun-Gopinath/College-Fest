var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

const uri = 'mongodb+srv://dbUser:DBuser123451@cluster0.oyzgd.gcp.mongodb.net/testdb?retryWrites=true&w=majority';

User = require('./models/index');

var app = express();

mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);

app.use(express.static('public'))
app.use('/public',express.static('public'))

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

app.use(bodyParser.json()); 
app.use(express.static('/')); 
app.use(bodyParser.urlencoded({ extended: true })); 


mongoose.connect(uri,function(err){
    if (err) throw err;
    console.log('Connected to db');
});
var db = mongoose.connection;

app.post('/pages', (req, res) => {
	var user = req.body;
	console.log(user);
	User.addUser(user, (err, users) => {
		if(err){
			throw err;
		}
		res.json(users);
	});
});

app.get('/allUsers', function(req, res){
	User.getUser(function(err, users) {
		if(err){
			throw err;
		}
		res.json(users);
	});
});


app.listen(8080);
console.log('8080 is the magic port');