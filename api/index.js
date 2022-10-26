const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
//{ force: true }
conn.sync().then(() => {
  server.listen(process.env.PORT || 3001, () => {
    console.log('server listening at'+process.env.PORT); // eslint-disable-line no-console
  });
});
