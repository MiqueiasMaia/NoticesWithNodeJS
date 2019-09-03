module.exports.news = function(app, req, res){
    var database = app.config.database();
    var newsModel = new app.app.models.NewsDAO(database);
    newsModel.getNews(function(error, result){
        res.render('news/news', { news : result, error : error });
    });
}

module.exports.notices = function(app, req, res){
    var database = app.config.database();
    var noticeModel = new app.app.models.NewsDAO(database);
    noticeModel.getNotice(function(error, result){
        res.render('news/notice', {notice: result, error : error });
    });
}