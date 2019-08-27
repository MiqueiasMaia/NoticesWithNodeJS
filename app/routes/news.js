module.exports = function (app) {
    app.get('/news', function(req, res) {
        var database = app.config.database();
        var newsModel = new app.app.models.NewsDAO(database);
        newsModel.getNews(function(error, result){
            res.render('news/news', { news : result, error : error });
        });
    });
}