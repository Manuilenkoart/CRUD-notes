const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const { DB } = require("../config");
// mongoose.Promise = global.Promise;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("mongoDb connected");
  })
  .catch((err) => {
    console.log(err);
  });
autoIncrement.initialize(mongoose.connection);
