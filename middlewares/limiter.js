const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // ожидание - 15 минут
  max: 10, // максимальное число запросов - 10
  handler: (req, res) => {
    res.status(403).json({
      code: 403,
      message: 'Request limit exceeded'
    });
  }
});

module.exports = limiter;