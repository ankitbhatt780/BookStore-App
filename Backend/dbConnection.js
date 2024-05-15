// import mongoose from "mongoose";
// const URI = process.env.mongoURI;

// function dbConnect() {
//   mongoose
//     .connect(URI, {
//       usenewurlparser: true,
//       useunifiedtopology: true,
//     })
//     .then(() => {
//       console.log("data base connected");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
// export default dbConnect;

const mongoose = require("mongoose");

const URI =
  process.env.MONGO_URI ||
  "mongodb+srv://ankitbhatt780:Ankit780@cluster0.puyeqvw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const URI =
//   "mongodb+srv://ankitbhatt780:Ankit780@cluster0.puyeqvw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function dbConnect() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (err) {
    console.error(err);
  }
}

module.exports = dbConnect;
