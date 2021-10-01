const express = require('express');
const app = express();

app.listen(3000,()=>{
    console.log('{');
    console.log('"Status" : "ok"');
    console.log('}');
})