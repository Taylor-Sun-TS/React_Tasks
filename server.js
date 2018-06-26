const express = require('express');
var path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'src')))
app.use('/test-report', express.static('jest/coverage/lcov-report'))
app.get('/',function(req,res){
  res.send('Hello world');
});

app.listen(port,function(){
  console.log(`we have started our server on port ${port}`);
})