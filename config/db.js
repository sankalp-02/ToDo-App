const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("URI inside:", process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected🥳");

  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

// console.log("URI:", process.env.MONGO_URI);

module.exports = connectDB;