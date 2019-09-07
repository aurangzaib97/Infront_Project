const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.resolve(__dirname, "../dist")));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("port is enabled");
});
