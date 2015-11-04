var mongoose = require('mongoose');
var Article = require('./Article');

mongoose.connect('mongodb://mcsp:microscope@ds048878.mongolab.com:48878/microscope');
mongoose.connection.on('error', () => console.log('mongoDB connection error'));
mongoose.connection.once('open', () => console.log('mongoDB connection open'));