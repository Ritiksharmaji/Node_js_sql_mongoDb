const express = require('express')
// const addDays = require('date-fns/addDays')
const { addDays } = require('date-fns');

const app = express()

app.get('/', (request, response) => {
  // Get today's date
  const currentDate = new Date()

  // Calculate the date after 100 days
  const futureDate = addDays(currentDate, 100)

  // Format the date as DD/MM/YYYY
  //   const formattedDate = `${String(futureDate.getDate()).padStart(2, '0')}/${
  //     String(futureDate.getMonth() + 1).padStart(2, '0')}/${futureDate.getFullYear()}`;

  const formatedDate = `${futureDate.getDate()}/${
    futureDate.getMonth() + 1
  }/${futureDate.getFullYear()}`

  // Send the formatted date as a response
  response.send(formatedDate)
})

app.listen(3000)
// Export the express instance using default export syntax
// module.exports = app
