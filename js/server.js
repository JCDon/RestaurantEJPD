const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req,res) => {
    res.send("bye");
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  