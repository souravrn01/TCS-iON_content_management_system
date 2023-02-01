const express = require('express')
const cors = require('cors')
const logger = require('morgan')
require('./middlewares/mongoDB')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(logger('dev'))
app.use(cors())

//api route
const api = require('./routes/api')
app.use('/api',api)


var port  = process.env.PORT || 4500;
app.listen(port,()=>{
    console.log(`...Server running at port: ${port}...`);
})
