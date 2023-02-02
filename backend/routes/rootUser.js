const express = require("express"); 
const router = express.Router();
const userData = require("../models/authenticatedUser");
const rootPosts = require("../models/postsByRoot");
const jwt = require('jsonwebtoken')
const verifyToken = require('../middlewares/verifyToken')


let email = "root@email.com";
let password = "rootpass@321";

router.post("/login", async (req, res) => {
  try {
    if (req.body.email === email && req.body.password === password) {
      let payload = {subject: email+password}
      let token = jwt.sign(payload,'secretKey')
       res.json({ message: "matching" , token});
    } else {
      res.json({ message: "unmatching" });
    }
  } catch (error) {
    console.log("login error:", error);
  }
});

router.get("/collect", async (req, res) => {
  try {
    let data = await userData.find();
    res.send(data);
  } catch (error) {
    console.log("from collecting all User data", error);
  }
});

router.get("/toggleAdmin/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let change = [{ $set: { isAdmin: { $not: "$isAdmin" } } }];
    let changed = await userData.findByIdAndUpdate({ _id: id }, change, {
      new: true,
    });
    res.send(changed);
  } catch (error) {
    console.log("toggling error:", error);
  }
});

router.put("/publish",  async (req, res) => {
  try {
    let content = req.body.content.changingThisBreaksApplicationSecurity
    let category = req.body.category

    let data = {
      publishedby: req.body.author,
      date: new Date(),
      content: content,
      image: "path to image",
      headline: req.body.headline
    }

    let saved = await rootPosts.findOneAndUpdate({name: category},{$push:{posts: data}},{new:true})
    res.send(saved)

  } catch (error) {
    console.log("root user post error", error);
  }
});

router.post("/createCategory",  async (req, res) => {
  try {
    const newCat = new rootPosts( { name: req.body.data });
    const savedCat = await newCat.save();
    res.send(savedCat);
  } catch (error) {
    console.log("root user category creation error", error);
  }
});

router.get("/getCategory", async(req, res)=>{
    try {
        let data = await rootPosts.find({},{name:1});
        res.send(data)
    } catch (error) {
        console.log("root user could not get categories: ", error)
    }
})

router.post('/getCatPosts', async(req, res)=>{
  try {
    
     let data = await rootPosts.find({name:req.body.category},{"posts._id": 1, "posts.headline":1})
     res.send(data[0])

  } catch (error) {
    console.log("Error in getting posts ", error)
  }
})

router.post('/deletePost',  async(req, res)=>{
  try {
    console.log(req.body)
      let name = req.body.category
      let id = req.body.id
      console.log(id)
    let data = await rootPosts.updateOne({name:name},{$pull:{posts:{_id: id}}},{new:true})
    res.send(data) 
  } catch (error) {
    console.log("Error in deleting posts ", error)
  }
})

router.put('/newContent',  async(req, res)=>{
  try {
    let name = req.body.category
    let id = req.body.id
    let content = req.body.ckeditorContent
    let data = await rootPosts.findOneAndUpdate({name: name, "posts._id": id }, { $set: { "posts.$.content": content } },{new:true} )
    res.status(200).send()

  } catch (error) {
    console.log("Error in editing content of the posts ", error)
  }
})

router.put('/newHeadline',   async(req, res)=>{
  try {
    let name = req.body.category
    let id = req.body.id
    let headline = req.body.heading
    let data = await rootPosts.findOneAndUpdate({name: name, "posts._id": id }, { $set: { "posts.$.headline": headline } },{new:true} )
    res.status(200).send()
    
  } catch (error) {
    console.log("Error in editing content of the posts ", error)
  }
})



router.post('/getContent', async(req, res)=>{
  try {
     let data = await rootPosts.findOne({name:req.body.category, "posts._id": req.body.id}, {"posts.$":1})
     res.send(data.posts[0])

  } catch (error) {
    console.log("Error in getting content ", error)
  }
})

router.put('/editCat',  async(req, res)=>{
  try {
     let id = req.body.id
    let name = req.body.name
    let data = await rootPosts.findByIdAndUpdate({"_id": id}, {$set:{name:name}})
    res.send(data)
  } catch (error) {
    console.log(" error in editing category name: ", error)
  }
})

router.delete('/delCat/:id', async(req, res)=>{
  try {
    let id = req.params.id
    let data = await rootPosts.findByIdAndDelete({"_id": id})
    res.send(data)
  } catch (error) {
    console.log(" error in deleteing category name: ",error)
  }
})

router.get('/userPosts/:name', async(req, res)=>{
  try {
    let name = req.params.name;
    let data = await rootPosts.find({ 'posts': { $elemMatch: { 'publishedby': name } } })
    res.send(data)
  } catch (error) {
    console.log(" error in getting Users posts: ",error)
  }
})

router.get('/allPosts', async(req, res)=>{
  try {
    let data = await rootPosts.find({}, {'posts': 1})
    res.send(data)
  } catch (error) {
    console.log(" error in getting All posts: ",error)
  }
})
module.exports = router;
