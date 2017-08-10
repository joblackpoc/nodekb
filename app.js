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
  let articles = [
    {
      id:1,
      title:'Article One',
      author:'Joblackpoc',
      body:'This is article one'
    },
    {
      id:2,
      title:'Article Two',
      author:'Joblackpoc',
      body:'This is article two'
    },
    {
      id:3,
      title:'Article Three',
      author:'Joblackpoc',
      body:'This is article three'
    }
  ];
    res.render('index',{
      title:'Articles',
      articles:articles
    });
});
//Add Route
app.get('/articles/add', function(req, res){
  res.render('add_article',{
    title:'Add article'
  });
});

// Start Server
app.listen(3000, function(){
  console.log('Server start on port 3000...');
});
