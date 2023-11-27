const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/pinterest');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  }],
  dp: {
    type: String 
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
