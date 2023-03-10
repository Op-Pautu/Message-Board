const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Heyyy',
    user: 'Ain',
    added: new Date(),
  },
  {
    text: 'Morning ;)',
    user: 'Op',
    added: new Date(),
  },
];

router.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages });
});
router.get('/new', (req, res, next) => {
  res.render('form', { title: 'New message' });
});

router.post('/new', (req, res) => {
  const message = req.body.messageText;
  const author = req.body.messageUser;

  messages.push({
    text: message,
    user: author,
    added: new Date(),
  });

  res.redirect('/');
});

module.exports = router;
