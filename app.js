const express = require('express');
const path = require('path');
// Init App
const app = express();

//Load View Engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'pug');

// Home Route
/*app.get('/',function(req, res){
  res.send('Hello World');
});
*/
app.get('/',function(req, res){
    res.render('index',{
      title:'Hello world World'
    });
});
// Start Server
app.listen(3000, function(){
  console.log('Server start on port 3000...');
});
