const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { serverLog } = require('./middlewares');
const { resumeRouter } = require('./routes/api');
const { portfolioRouter } = require('./routes/api');
const { authRouter } = require('./routes/api');
const { NotFound } = require('http-errors');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
const corsOptions = {
  origin: process.env.CORS_ORIGIN
};

app.use(logger(formatsLogger));
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json({ limit: 10000 }));
app.use(express.static('public')); // для отдачи статичных файлов

// логируем все входящие запросы в файл server.log
app.use(serverLog());

app.use('/api/v1/resume', resumeRouter);
app.use('/api/v1/portfolio', portfolioRouter);
app.use('/api/v1/auth', authRouter);

app.use('/api/v1/test', (req, res) => {
  res.send('<h2>test</h2>')
});

app.use((_, res) => {
  throw new NotFound('Not found');
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