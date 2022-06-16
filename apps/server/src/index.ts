import logger from 'jet-logger';
import './pre-start'; // Must be the first import
import server from './server';

// Constants
const serverStartMsg = 'Express server started on port: ';
const port = process.env.PORT || 4000;

// Start server-2
server.listen(port, () => {
  logger.info(serverStartMsg + port);
});
