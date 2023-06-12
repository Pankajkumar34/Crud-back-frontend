const express = require('express')
const app = express()
const monooConnect = require('./mogoodb/Mongoo')
const router=require('./Router/Router')
const cors=require('cors')
const port = process.env.PORT || 4000

// Requires Variables--------------------------

monooConnect()
app.use(cors())
require('dotenv').config()
app.use(express.json())
app.use("/app",router)
// use Varibales-------------------------------

app.listen(port, () => { console.log(`running,${port}`) })