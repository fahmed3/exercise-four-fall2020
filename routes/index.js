//Show all blogposts
const express = require("express");
const router = express.Router();

//Require Firebase
const firebase = require("firebase");

//Initialize Firestore Database
const db = firebase.firestore();

//Reference a specific collection
const blogposts = db.collection("blogposts");

router.get("/", (req, res) => {
  const blogpostsArray = [];
  blogposts
    .get()
    .then((querySnapshot) => {
      // Loop through each query snapshot and add to array
      querySnapshot.forEach((doc) => {
        blogpostsArray.push(doc.data());
      });
      return res.send(blogpostsArray);
    })
    .catch(function (e) {
      console.warn("error", e);
      return res.send(error);
    });
  //res.send("Show all Blog Posts")
});

module.exports = router;
