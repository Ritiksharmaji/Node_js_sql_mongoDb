const server = require('express')

const app = server()

app.get('/', (request, response) => {
  // const dateObject = new Date()
  // response.send(dateObject)

  const dateObject = new Date()

  // Format the date as DD-MM-YYYY
  const formatted = `${dateObject.getDate()}-${
    dateObject.getMonth() + 1
  }-${dateObject.getFullYear()}`

  // Send the formatted date as a response
  response.send(formatted)
})
app.listen(3000)
// module.exports = app
