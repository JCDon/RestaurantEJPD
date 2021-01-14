const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

let numSeated = tableSeated.length;
let numWaiting = tableWaiting.length;
const totalTables = numSeated + numWaiting;

// two arrays, one for five tables and one for a waiting list.

const tableSeated = [
  {
    routeName: "tableone",
    name: "Joe Doe",
    email: "email", 
    mobile: "mobile",
  },
  {
    routeName: "tabletwo",
    name: "Jane Doe",
    email: "email",
    mobile: "mobile", 
  },
  
]

const tableWaiting = [
  {
    routeName: "waitingone",
    name: "Jack Lancaster",
    email: "email",
    mobile: "mobile",
        
  },
  {
    routeName: "waitingtwo",
    name: "Jill Lancaster",
    email: "JL@email.com",
    mobile: "360-698-9981",
        
  },
  {
    routeName: "waitingthree",
    name: "Pedro Finones",
    email: "pedro@email.com",
    mobile: "206-226-2547",
        
  },
  {
    routeName: "waitingfour",
    name: "Patty Finones",
    email: "patty@email.com",
    mobile: "206-226-5462",
        
  },
  {
    routeName: "waitingfive",
    name: "Lucky",
    email: "lucky@email.com",
    mobile: "562-897-8844",
        
  },
];


// every request after that is sent to the waiting list.


exports.getAll = (req, res) => {
    console.log("All customers seated: \n" + JSON.stringify(customers, null, 4));
    res.send(customers);
}


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

