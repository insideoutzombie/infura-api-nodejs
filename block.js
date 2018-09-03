// THIS is the mongodb Schema file for the block data

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlockSchema = new Schema({
  blockName: String,

  // text:{
  //   type: String,
  //   required: true,
  //   minlength: 1,
  //   trim: true
  // },
  // completed: {
  //   type: Boolean
  // }
});

// THIS associates the BlockSchema with mongoose
const Block = mongoose.model('block', BlockSchema);

// THIS exports the block for the rest of the app to use
module.exports = Block;
