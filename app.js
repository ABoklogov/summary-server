const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { serverLog } = require('./middlewares');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
app.use(logger(formatsLogger));
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: 10000 }));
app.use(express.static('public')); // для отдачи статичных файлов

// логируем все входящие запросы в файл server.log
app.use(serverLog);

app.get('/product', (req, res) => {
  res.send('<h1>product</h1>');
});

app.use((_, res) => {
  res.status(404).json({
    status: 'error',
    code: 404,
    message: 'Not found'
  });
});

app.use((err, _, res, __) => {
  const { status = 500, message = 'Server error', data = null } = err;
  res.status(status).json({
    status: 'error',
    code: status,
    data,
    message: message
  });
});

module.exports = app;