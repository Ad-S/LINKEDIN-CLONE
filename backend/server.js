const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require("passport");

const users = require("./routes/api/users");
const details = require("./routes/api/details");
const applicants = require("./routes/api/applicants");
const recruiters = require("./routes/api/recruiters");
const applied = require("./routes/api/applied");

const app = express();

app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('ITs connected'))
    .catch(err => console.log(err));

    // Passport middleware
  app.use(passport.initialize());
// Passport config
  require("./config/passport")(passport);

    app.use("/api/users", users);
    app.use("/api/details", details);
    app.use("/api/applicants", applicants);
    app.use("/api/recruiters", recruiters);
    app.use("/api/applied", applied);



    const port = process.env.PORT || 5000;
    
    app.listen(port, () => console.log(`server started on port ${port}`));
