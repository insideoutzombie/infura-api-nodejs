// THIS is the mongodb Schema file for the block data

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlockSchema = new Schema({
  blockName: String,
  resultData: String,
});

// THIS associates the BlockSchema with mongoose
const Block = mongoose.model('block', BlockSchema);

// THIS exports the block for the rest of the app to use
module.exports = Block;
