//Query one blogpost
const express = require("express");
const router = express.Router();

//Require Firebase
const firebase = require("firebase");

//Initialize Firestore Database
const db = firebase.firestore();

//Reference a specific collection
const blogposts = db.collection("blogposts");

router.get("/", (req, res) => res.send("No ID Provided."));

router.get("/:id", (req, res) => {
  const queryId = req.params.id;
  blogposts
    .doc(queryId)
    .get()
    .then(function (doc) {
      if (doc.exists) {
        // Checking if the document exists
        const data = doc.data();
        return res.send(data); //Send data to user who queried
      } else {
        return res.send("No document exists.");
      }
    })
    .catch(function (error) {
      return res.send(error);
    });
});

module.exports = router;
