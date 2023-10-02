const mongoose = require('mongoose');

// MongoDB connection URL
const mongoURI = 'mongodb+srv://johnalexander:hE9nX7dEVFJZC9jR@ip-2-moringa.zcwmrtp.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check MongoDB connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = mongoose;

