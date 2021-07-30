//require express && mongoose , cors ,dotenv
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
/*--------------------------------- */
const persons = require('./routes/persons')
const connectdb = require('./config/connectdb')
const app = express()
dotenv.config();
connectdb();
/******/
// use express middleware
app.use('/api/users',persons) // every route inside of the persons routes begin with users : http://localhost:5000/users
app.use(express.json())
app.use(cors());
// PORT 
const PORT = process.env.PORT || 5000
app.listen(PORT,(err)=>{
    if (err){console.log(err)}
    else { console.log( `Server is running at ${PORT}`)}
})

// our server is successfully connected to the DB , So we can start creating routes for our backend app