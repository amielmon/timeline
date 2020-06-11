import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const client = new MongoClient('mongodb+srv://amielmon:Pajarillaga99%21@bunch-fdal9.mongodb.net/timeline?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('timeline');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;