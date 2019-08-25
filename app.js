var app = require('./config/server');

var routeNews = require('./app/routes/news')(app);
var routeAdmin = require('./app/routes/admin')(app);
var routeHome = require('./app/routes/home')(app);

app.listen(3000, () =>{
    console.log('Servidor iniciado com Express.');
});