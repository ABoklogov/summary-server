require('dotenv').config()
const app = require('../app')

const { PORT = 3000 } = process.env

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`)
})