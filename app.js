

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

mongodb+srv://saheramr:<password>@cluster0.hkxmtiw.mongodb.net/?retryWrites=true&w=majority