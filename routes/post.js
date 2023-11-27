const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  postText: {
    type: String,
    required: true
  },
  user : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  likes: [],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
