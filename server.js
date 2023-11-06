var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');
require('dotenv').config(); 

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

var Message = mongoose.model('Message',{
  name : String,
  message : String,
  createdAt: String,
  time: String
})

app.get('/config', (req, res) => {
  res.json({ serverUrl: process.env.SERVER_URL });
});

app.get('/messages', (req, res) => {
  Message.find({})
    .exec()
    .then((messages) => {
      res.send(messages);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});


app.get('/messages/:user', (req, res) => {
  var user = req.params.user;
  Message.find({ name: user })
    .exec()
    .then((messages) => {
      res.send(messages);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

app.post('/messages', async (req, res) => {
  try {
    var message = new Message(req.body);

    var currentDate = new Date();
    message.createdAt = currentDate.toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    message.time = currentDate.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    var savedMessage = await message.save();
    console.log('Message saved');

    var fullMessage = await Message.findOne({ _id: savedMessage._id });

    if (!fullMessage) {
      res.sendStatus(500);
      return;
    }

    io.emit('message', fullMessage);
    res.json({ message: 'Message Posted' });

  } catch (error) {
    res.sendStatus(500);
    return console.log('Error', error);
  } finally {
    console.log('Message Posted');
  }
});

io.on('connection', () =>{
  console.log('a user is connected')
})

mongoose.connect(process.env.DATABASE_URL);

mongoose.connection.on('open', () => {
  console.log('mongodb connected');
});

module.exports = [http, Message];

var server = http.listen(3000, () => {
  console.log('server is running on port', server.address().port);
});