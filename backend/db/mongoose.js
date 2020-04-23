const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/TaskManager", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to mongoDB successfully");
  })
  .catch((e) => {
    console.log("Error occured");
    console.log(e);
  });
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);
module.exports = {
  mongoose,
};
