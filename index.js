const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hi there ruona, how are you doing");
});

app.listen(8000, () => {
  console.log("listen to port 8000");
});
