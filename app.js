const express = require('express')
const app = express()
const mongoose  = require('mongoose')
const PORT = process.env.PORT || 5000
const {MONGOURI} = require('./config/keys')


mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected',()=>{
    console.log("Connected MongoDB")
});

mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
});

require('./models/user')
require('./models/post')
require('./models/booking')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))
app.use(require('./routes/booking'))


app.listen(PORT,()=>{
    console.log("SERVER RUNNING on Port ",PORT)
})

