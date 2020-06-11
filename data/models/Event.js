import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  src: {
    type: String,
    required: true,
  },
  mediaType: {
    type: String,
    required: true,
  
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String
  },
  date: {
    type: Date,
    required: true
  },
})

module.exports = EventSchema;