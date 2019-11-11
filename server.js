// const express = require('express');

// const app = express();

// app.get('/api/customers', (req, res) => {
//   const customers = [
//     {id: 1, firstName: 'John', lastName: 'Doe'},
//     {id: 2, firstName: 'Brad', lastName: 'Traversy'},
//     {id: 3, firstName: 'Mary', lastName: 'Swanson'},
//     {id: 4, firstName: 'Mary2', lastName: 'Swanson2'},
//     {id: 5, firstName: 'Mary3', lastName: 'Swanson3'},
//     {id: 6, firstName: 'Mary4', lastName: 'Swanson4'},
//   ];

//   res.json(customers);
// });

// const port = 5000;

// app.listen(port, () => `Server running on port ${port}`);

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

const Users = require('./routes/users')

app.use('/users', Users)

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})