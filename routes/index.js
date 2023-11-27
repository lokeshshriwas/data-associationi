var express = require('express');
var router = express.Router();
const userModel = require("./users")
const postModel = require("./post")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get("/create", async function(req, res){
  let createduser = await userModel.create({
    username: "lokesh",
    password: "lokesh123",
    fullname: "lokesh shriwas",
    email: "lokesh@lokesh.com",
    posts: [],
  })
  res.send(createduser)
})

router.get("/createpost", async function(req, res){
  let createpost = await postModel.create({
    postText: "hello there",
    user: "65649aea1c5afb2207ea6d13"
  })

  let dbUser = await userModel.findById("65649aea1c5afb2207ea6d13")
  dbUser.posts.push(createpost)
  await dbUser.save()
  res.send("done")
})

router.get("/find", async function(req, res){
  let finduser = await userModel.findById("65649aea1c5afb2207ea6d13").populate("posts")
  res.send(finduser)
})
module.exports = router;
