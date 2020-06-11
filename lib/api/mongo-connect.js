import mongoose from 'mongoose'
import EventSchema from '../../data/models/Event'

const mongoConnect = async () => {
  const connection = await mongoose.createConnection(
    'mongodb://localhost:27017/timeline',
    {
      useNewUrlParser: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
      useUnifiedTopology: true
    }
  );
  const Event = connection.model("User", EventSchema);
  return {
    connection,
    models: {
      Event
    }
  };
}

export default mongoConnect;