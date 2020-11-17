const express = require("express");

const app = express();

const port = process.env.PORT || 4000;

// Configuration Values for Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBVpuMahIvKThO6N2WODOY91GktCDByAug",
  authDomain: "exercise-four-8bbda.firebaseapp.com",
  databaseURL: "https://exercise-four-8bbda.firebaseio.com",
  projectId: "exercise-four-8bbda",
  storageBucket: "exercise-four-8bbda.appspot.com",
  messagingSenderId: "88501971037",
  appId: "1:88501971037:web:ed5fda20c45883d51c85b4",
  measurementId: "G-HHYR5JBS7C",
};

const firebase = require("firebase");
firebase.initializeApp(firebaseConfig);

//Routes import
const indexRoute = require("./routes/index.js");
const postRoute = require("./routes/post.js");
const createRoute = require("./routes/createBlogpost.js");

//Routes
app.use("/", indexRoute);
app.use("/post", postRoute);
app.use("/create", createRoute);

app.listen(port, () =>
  console.log(`Exercise Four is running at localhost:${port}`)
);
