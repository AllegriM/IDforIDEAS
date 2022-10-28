const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
//{ force: true }
conn.sync().then(() => {
  let port = process.env.PORT || 3001
  server.listen(port, () => {
    console.log('server listening at '+port); // eslint-disable-line no-console
  });
});
