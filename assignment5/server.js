var express = require('express');
var app = express();
var notes = require('./routes/notes.js');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('This is the homepage');
});

app.get('/notes', notes.findAll);
app.get('/notes/:id', notes.findById);
app.post('/notes', notes.addNote);
app.put('/notes/:id', notes.updateNote);
app.delete('/notes/:id', notes.deleteNote);

app.listen(process.env.PORT || 3001, function() {
  console.log('Server has started on PORT 3001');
});
