const fs = require('fs/promises');
const moment = require('moment');

const serverLog = async (req, _, next) => {
  const date = moment().format('DD-MM-YYYY_hh:mm:ss');
  const {url, method} = req;

  await fs.appendFile('server.log', `\n${date} ${method} ${url}`);
  next();
};

module.exports = serverLog;