const { model, Schema } = require("mongoose");

const userSchema = new Schema({}, { versionKey: false });

module.exports = model("User", userSchema);
