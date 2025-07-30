const { setUser, getUser } = require("../services/auth");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

async function handleUserSignUp(req, res) {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "user already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      password: hashedPassword,
    });

    const token = setUser(user);
  res.cookie("token", token);

    res.json({
      user: {
        id: newUser._id,
        email: newUser.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function handleUserLogin(req, res) {
try {
    const { email, password } = req.body;

    const user = await User.findOne({ email});
    if (!user) return res.status(404).json({message: "Invalid credentials"});
  
    const match = await bcrypt.compare(password, user.password)
    if(!match) return res.status(404).json({message: "Invalid credentials"});
  
    const token = setUser(user);
    res.cookie("token", token);
} 
    catch (error) {
        res.status(500).json({message: error.message})
    }


}

async function handleGetUser(req, res){
    const user = await User.findById(req.user.id).select("-password")
    res.json(user)
}

function handleLogoutUser(req, res){
    res.clearCookie('token')
    res.json({message: "Logged out"})
}

module.exports = {
  handleUserLogin,
  handleUserSignUp,
  handleGetUser
};
