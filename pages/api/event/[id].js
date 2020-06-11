import mongoMiddleware from '../../../lib/api/mongo-middleware';
import apiHandler from '../../../lib/api/api-handler';

export default mongoMiddleware(async (req, res, connection, models) => {
  const {
    query: { id, src, mediaType, title, description, date },
    method,
  } = req

  apiHandler(res, method, {
    GET: (response) => {
      models.Event.findById(id, (error, event) => {
        if (error) {
          connection.close();
          response.status(500).json({ error });
        } else {
          response.status(200).json(event);
          connection.close();
        }
      })
    },
    POST: (response) => {
      models.Event.findOneAndUpdate(id, {src, mediaType, title, description, date}, {}).exec((error, event) => {
        if (error) {
          connection.close()
          response.status(500).json({ error })
        } else {
          response.status(200).json(event)
          connection.close()
        }
      })
    }
  });
})