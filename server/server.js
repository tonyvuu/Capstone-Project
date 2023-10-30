const port = 3000;
const express = require("express");
const pg = require("pg");
const sequelize = require("sequelize");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const app = express();
app.use(express.json());
app.use(cors());

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
  const { firstName, lastName, username, email, password } = req.body;
  const existingUser = await Users.findOne({ where: { email: email } });

  if (existingUser) {
    console.error("Email already exists");
    return res.status(409).json({ error: "Email already exists" });
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
        username: username,
        email: email,
        password: hash,
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
    const returningUser = await Users.findOne(
    { where: { email: email } }
    );
    console.log(returningUser);
    if (!returningUser) {
      return res.status(401).json({ error: "User not found" });
    }

    const username = returningUser.username;
    const storedHash = returningUser.password;

    const validPassword = await bcrypt.compare(password, storedHash);

    if (validPassword) {
        // res.json({ message: "Sign in successful" });
        console.log("Sign in successful" )
    } else {
        return res.status(401).json({ error: "Invalid username or password" });
    }
    
  } catch (error) {
    console.error("Error signing in:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port 3000`);
});
