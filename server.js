const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
    {id: 4, firstName: 'Mary2', lastName: 'Swanson2'},
    {id: 5, firstName: 'Mary3', lastName: 'Swanson3'},
    {id: 6, firstName: 'Mary4', lastName: 'Swanson4'},
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);