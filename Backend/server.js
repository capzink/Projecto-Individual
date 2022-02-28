const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
var cors = require("cors");




const connectDB = require("./Db/Dbconnection");


const port = process.env.PORT 
app.use(express.json());
app.use(cors());
const userRoute = require("./routes/users");
const pinRoute = require("./routes/pins");
const uploadRoute = require('./routes/upload')
app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);
app.use("/api/file", uploadRoute);


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log("connected to DB");
    app.listen(port, () => {
      console.log("Listening on port", +port);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
