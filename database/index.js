const mongoose = require("mongoose");

module.exports.connect = async (url) => {
  try {
    await mongoose.connect(url).then(() => console.log("[ DATABASE ] Connected ✓"));
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
