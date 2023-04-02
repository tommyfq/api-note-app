/**
 * This is the main server file which initializes and configures the application's express server.
 * It connects to the database and listens for incoming requests on a designated port.
 * @module server.js
*/

const express = require("express");
const cors = require("cors");
const db = require("./app/models");

const app = express();

// Set CORS options for allowing access from localhost:8081
var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Connect to the MongoDB database
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to note app" });
});

// Import and use routes
require("./app/routes/note.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});