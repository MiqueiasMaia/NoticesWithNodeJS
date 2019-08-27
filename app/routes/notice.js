module.exports = function(app){
    app.get('/notice', function(req,res){
        var database = app.config.database();
        var noticeModel = new app.app.models.NewsDAO(database);
        noticeModel.getNotice(function(error, result){
            res.render('news/notice', {notice: result, error : error });
        });
    });
}