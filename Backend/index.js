const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./dbConnection");
const bodyParser = require("body-parser");
const cors = require("cors");

const book_route = require("./Routes/routes");
const user_route = require("./Routes/userRoutes");
const app = express();

dotenv.config();

const port = process.env.PORT || 3000;

dbConnect();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use("/book", book_route);
app.use("/user", user_route);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// app.on("error", (error) => {
//   console.error(`Server error: ${error}`);
// });
