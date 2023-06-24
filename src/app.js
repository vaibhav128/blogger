const express = require("express");

const { db } = require("./db/models");
const { usersRoute } = require("./routes/users");
const { postsRoute } = require("./routes/posts");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
// app.use("/", express.static("./dist"));
app.use("/", express.static(__dirname + "/public/dist"));
// app.use('/', express.static(__dirname + "/public"));
console.log(__dirname,"dirname printing")
// app.use('/all-posts', express.static(__dirname + "/public"));

// app.use(function (req, res, next) {
//   res.sendFile(__dirname + "/public/"+ 'index.html');
// });
app.use(function (req, res, next) {
  res.sendFile(__dirname + "/public/dist/"+ 'index.html');
});
db.sync()
  .then(() => {
    app.listen(8383, () => {
      console.log("server started on http://localhost:8383");
    });
  })
  .catch((err) => {
    console.error(new Error("Could not start database"));
    console.error(err);
  });
