module.exports = function (app) {
    app.get('/news', function(req, res) {
        app.app.controllers.news.news(app, req, res);
    });

    app.get('/notice', function(req,res){
        app.app.controllers.news.notices(app, req, res);
    });
}