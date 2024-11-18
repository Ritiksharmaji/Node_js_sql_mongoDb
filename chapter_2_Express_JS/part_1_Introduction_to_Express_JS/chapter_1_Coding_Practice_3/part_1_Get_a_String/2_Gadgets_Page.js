const server = require('express')

const app = server()

app.get('/gadgets', (request, response) => {
  response.sendFile('./gadgets.html', {root: __dirname})
})
console.log("server start in 3001")
app.listen(3001)
// module.exports = app
