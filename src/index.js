const path = require("path");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
  res.send("Hello World! Mario Full Stack JavaScript developer");
});

app.listen(port, () => {
  console.log(`Server is listening at http://127.0.0.1:${port}`);
});
