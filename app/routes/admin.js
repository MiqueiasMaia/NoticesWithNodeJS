module.exports = (app) =>{
    app.get('/admin', (req, res) =>{
        res.render('admin/admin');
    });

    app.post('/admin/save-notice', (req, res) =>{
        var notice = req.body;
        var database = app.config.database();
        var newsModel = new app.app.models.NewsDAO(database);
        newsModel.saveNotice(notice, function(error, result){
            res.redirect('/news');
        });
    });

    /**
    application.post('/noticias/salvar', function(req,res){
        var noticia = req.body;

        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, function(error, result){
            res.redirect('/noticias');
        });
    });
     */
};

