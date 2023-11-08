const port = 3000;
const express = require("express");
const pg = require("pg");
const sequelize = require("sequelize");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "https://mystery-case-game.vercel.app",
  })
);
const session = require("express-session");

app.use(
  session({
    secret: "digitalCrafts",
    resave: false,
    saveUninitialized: true,
  })
);

const {
  Alibis,
  Criminal_Records,
  Documents,
  Interviews,
  Locations,
  People,
  Police_Reports,
  Scores,
  Users,
} = require("./models");

// middleware to test if authenticated
const authenticated = (req, res, next) => {
  if (req.session.user) {
    next();
  } else next("/login");
};

app.get("/testGet", async (req, res) => {
  console.log("Working...");
  res.send("Hola");
});

app.get("/users", async (req, res) => {
  console.log("hi");
  const userData = await Users.findAll();
  console.log(userData);
  res.json(userData);
});

app.post("/register", async (req, res) => {
  if (req.body === undefined) {
    console.log("Body not received");
  }

  console.log("Body: ", req.body);
  const { firstName, lastName, email, password, reenterpassword } = req.body;
  const existingUser = await Users.findOne({ where: { email: email } });

  if (existingUser) {
    console.error("Email already exists");
    return res.status(409).json({ error: "Email already exists" });
  } else if (reenterpassword !== password) {
    console.error("Passwords do not match");
    return res.status(409).json({ error: "Passwords do not match" });
  }

  bcrypt.hash(password, saltRounds, async (err, hash) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(password, saltRounds, hash);

    try {
      const newUser = await Users.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hash,
        reenterpassword: hash,
        attempts: 0,
      });
      res.json({ message: `User created successfully: ${newUser}` });
      console.log(`User created successfully: ${newUser}`);
    } catch (error) {
      console.error(error);
      return res.send("An error occurred during registration");
    }
  });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const returningUser = await Users.findOne({ where: { email: email } });
    if (!returningUser) {
      return res.status(401).json({ error: "User not found" });
    }

    const username = returningUser.username;
    const storedHash = returningUser.password;

    const validPassword = await bcrypt.compare(password, storedHash);

    if (validPassword) {
      req.session.isAuthenticated = true; // Set session data
      req.session.username = username; // Store the username in the session
      req.session.userID = returningUser.id; // Store the user's ID in the session

      console.log("Sign in successful");
      console.log(req.session);
      console.log(req.session.username);
      console.log(req.session.userID);
      console.log(req.session.isAuthenticated);

      res.status(200).json({ returningUser }); // Return the username to the client
      // res.send({returningUser})
    } else {
      return res.status(401).json({ error: "Invalid username or password" });
    }
  } catch (error) {
    console.error("Error signing in:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    console.log("Logout Successful");
    res.status(200).json({ message: "Logged out" });
  });
});

app.get("/scoresTable", async (req, res) => {
  const allScores = await Scores.findAll();
  console.log("Scores should be sent");
  res.send(allScores);
});
app.get("/usersTable", async (req, res) => {
  const allUsers = await Users.findAll();
  console.log("Users");
  res.send(allUsers);
});
app.get("/user", async (req, res) => {
  const { user_id } = req.body;

  const user = await Users.findOne({ where: { user_id: user_id } });
  console.log(user_id, user.highScore);
  res.send(user);
});

app.post("/addScore", async (req, res) => {
  const { user_id, score } = req.body;
  const user = await Users.findOne({ where: { user_id: user_id } });
  const attempts = user.attempts;
  const newScore = await Scores.create({
    user_id,
    score,
  });
  const allScores = await Scores.findAll();
  // Update User's High Score
  if (score < user.highScore || user.highScore == null) {
    await Users.update({ highScore: score }, { where: { user_id: user_id } });
  }
  await Users.update(
    { attempts: attempts + 1 },
    { where: { user_id: user_id } }
  );
  res.status(201).json({
    message: "Score added successfully",
    data: newScore,
    user,
    allScores,
  });
});

app.get("/getHighScores", async (req, res) => {
  const highScores = await Users.findAll({
    where: {
      highScore: {
        [sequelize.Op.not]: null,
      },
    },
    order: [["highScore", "asc"]],
  });
  res.send(highScores);
});

app.put("/addAttempt", async (req, res) => {
  const { user_id, attempt } = req.body;
  const user = await Users.findOne({ where: { user_id: user_id } });
  const attempts = user.attempts;
  await Users.update(
    { attempts: attempts + 1 },
    { where: { user_id: user_id } }
  );
  res.status(201).json({
    message: "Attempt added successfully",
    data: `Attempts: ${attempts + 1}`,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port 3000`);
});
