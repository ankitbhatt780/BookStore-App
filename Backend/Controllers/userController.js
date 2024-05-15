const userModel = require("../Model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = "ankitmernStackwebdeveloper@78";

async function newUser(req, res) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ msg: "please fill all the fields" });
  }

  const salt = await bcrypt.genSalt(10);
  const secPassword = await bcrypt.hash(password, salt);

  try {
    const preuser = await userModel.findOne({ email });
    if (preuser) {
      return res.status(400).json({ msg: "user already exits" });
    }

    const user = new userModel({
      name: name,
      email: email,
      password: secPassword,
    });

    const createdUser = await user.save();

    if (!createdUser) {
      return res.status(500).json("server Error");
    } else {
      return res.status(200).json({
        msg: "user created successfuly",
        user: {
          _id: createdUser._id,
          name: createdUser.name,
          email: createdUser.email,
        },
      });
    }
  } catch (err) {
    return res.status(401).json(err);
  }
}

async function login(req, res) {
  const email = req.body.email;
  try {
    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res.status(500).json({ msg: "User Not Found" });
    } else {
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!passwordMatch) {
        return res.status(500).json({ msg: "invalid username or password" });
      }
    }
    const data = {
      id: user._id,
    };
    const authToken = jwt.sign(data, jwtSecret);

    return res.status(200).json({
      success: true,
      authToken: authToken,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false, msg: "server error" });
  }
}

module.exports = { newUser, login };
