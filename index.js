const express = require('express');
const mongoose = require("mongoose");
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo Yo Honey Singh!')
})

(async () => {
  try {
    const connect = await mongoose.connect('mongodb+srv://awais:pm4jdDQW0hUOGMPq@cluster0.6eh4ljy.mongodb.net/fyce-app', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log(`DataBase Connected at ${connect.connection.host}`);
  } catch (error) {
    console.log("DataBase connection error");
    process.exit(1);
  }
})();



app.listen(process.env.PORT || 3000)
