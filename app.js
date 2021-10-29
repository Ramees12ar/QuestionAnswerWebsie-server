const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 1000000 }));
app.use(cors());
const questions=require('./routes');
app.use(express.json());
app.use('/api',questions);
app.get('/',(req,res)=>{
    res.send('hi');
})

const port = process.env.PORT || '4000'
app.listen(port, (req,res) => {
    console.log(`server running at port ${port}`)
})