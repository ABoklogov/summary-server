const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'
app.use(logger(formatsLogger))
app.use(helmet())
app.use(cors())
app.use(express.json({ limit: 10000 }))
app.use(express.static('public')) // для отдачи статичных файлов


app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    code: 404,
    message: 'Not found'
  })
})

app.use((err, _, res, __) => {
  const { status = 500, message = 'Server error', data = null } = err
  res.status(status).json({
    status: 'error',
    code: status,
    data,
    message: message
  })
})

module.exports = app