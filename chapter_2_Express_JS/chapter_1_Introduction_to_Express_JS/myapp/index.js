const express = require('express') // creating a http instance by express-js

const server = express() // assing the instance to a variable
// here server variable is the express server instance object so all the methods and functionality of express we can use by server variable....
server.get('/', (request, response) => {
  console.log('server started...!')
  //console.log(request)
  response.send('hello Ritik sharma')
})

server.get('/date', (request, response) => {
  console.log('server started...!')
  let date_object = new Date()
  response.send(` today date:${date_object}`)
})

server.get('/page', (request, response) => {
  console.log('home oage loaded...!')
  response.sendFile('./page.html', {root: __dirname})
})

server.listen(3000)
