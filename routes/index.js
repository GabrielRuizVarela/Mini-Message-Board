const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date()
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date()
	}
];

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { messages, title: 'Mini Messageboard' });
});

router.post('/index', (req, res, next) => {
	const { text, user } = req.body;
	messages.push({ text, user, added: new Date() });
	res.redirect('/');
});

router.post('/new', (req, res, next) => {
	res.redirect('/new');
});

module.exports = router;
