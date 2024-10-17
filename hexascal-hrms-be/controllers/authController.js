const jwt = require("jsonwebtoken");
const { User, Counter } = require("../model/userModel");

const JWT_SECRET = process.env.SECRETKEY;

// Create a User
async function handleUserSingup(req, res) {
  try {
    // Extract user details from request body
    const {
      name,
      email,
      contact,
      address,
      position,
      password,
      repassword,
      role,
      joining_date,
      experience,
      bod,
      paidLeave,
      sickLeave,
      projectManagerId,
    } = req.body;

    if (
      !name ||
      !email ||
      !contact ||
      !address ||
      !position ||
      !password ||
      !repassword ||
      !role ||
      !joining_date ||
      !experience ||
      !bod
    ) {
      return res
        .status(400)
        .json({ status: "error", message: "Please Fillup all Required filed" });
    }

    if (password !== repassword) {
      return res
        .status(400)
        .json({ status: "error", message: "Please enter same repassword" });
    }

    const dup_email = await User.findOne({ email });
    if (dup_email) {
      return res.status(400).json({
        status: "error",
        message: "Please enter different this email is already exist",
      });
    }

    // create employeeId
    const counter = await Counter.findByIdAndUpdate(
      { _id: "employeeId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );

    if (!counter || !counter.seq) {
      return res.status(500).json({ message: "Failed to generate employeeId" });
    }

    // Generate 6 Character unique Id
    function generateUniqueId(length = 18) {
      return Array.from({ length }, () =>
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(
          Math.floor(Math.random() * 62)
        )
      ).join("");
    }
    const uniqueId = generateUniqueId();

    // Create the new user
    const total_leaves = Number(sickLeave) + Number(paidLeave);
    const user = await User.create({
      name,
      email,
      contact,
      address,
      position,
      password,
      repassword,
      role,
      joining_date,
      experience,
      paidLeave,
      sickLeave,
      bod,
      employeeId: counter.seq,
      totalLeave: total_leaves,
      remainingLeave: total_leaves,
      remainingSickLeave: sickLeave,
      remainingPaidLeave: paidLeave,
      projectManagerId,
      uniqueId,
    });

    // Respond with success message
    return res.status(200).json({
      status: "ok",
      message: "User successfully signed up",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server error" });
  }
}

// User Login
async function handleUserLogin(req, res) {
  try {
    // Find Login User
    const { email, password, uniqueId } = req.body;

    const userEmail = email.toLowerCase();

    const user = await User.findOne({ email: userEmail });
    if (!user || user.disabled === true) {
      return res
        .status(404)
        .json({ status: "error", message: "User not found" });
    } else if (userEmail != user.email || password != user.password) {
      return res
        .status(400)
        .json({ status: "error", message: "Email and password doesn't match" });
      // } else if (uniqueId != user.uniqueId && user.role !== "Admin") {
      //   return res.status(400).json({
      //     status: "error",
      //     message: "Please login only on your own Device.",
      //   });
    } else {
      // Create the data object to be included in the JWT
      const data = {
        user: {
          id: user._id,
          role: user.role,
          uniqueId: user.uniqueId,
          tokenVersion: user.tokenVersion,
        },
      };

      // Generate a JWT
      const token = jwt.sign(data, JWT_SECRET);
      res.cookie("jwt-token", token);
      return res.json({
        token: token,
        role: user.role,
        ProjectManager: user.projectManager,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server error" });
  }
}

module.exports = {
  handleUserSingup,
  handleUserLogin,
};
