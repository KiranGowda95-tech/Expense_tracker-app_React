const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const connectedDB = mongoose.connection;

// connectedDB.on("error", console.error.bind(console, "connection error:"));

// connectedDB.once("open", () => {
//   console.log("Connected to MongoDB");
// });

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `MongoDB Connected:${conn.connection.host}`.cyan.underline.bold
    );
  } catch (err) {
    console.log(`Error:${err.message}`.red);
    process.exit(1);
  }
};

module.exports = connectDB;
