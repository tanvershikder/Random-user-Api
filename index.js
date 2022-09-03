const express = require('express');
const dbConnect = require('./utlitis/dbConnection');
const app = express()

const port = process.env.PORT || 5000;
const userRoute = require('./Route/v1/User.Route')


// console.log("done");

app.use(express.json());

dbConnect()

// all user
app.use('/',userRoute)


app.get('/', (req, res) => {
  res.send('Random User is running')
})


// if no route ar found

app.all("*",(req,res)=>{
  res.send("No Route Founded")
})



app.listen(port, () => {
  console.log(`Random User listening on port ${port}`)
})
