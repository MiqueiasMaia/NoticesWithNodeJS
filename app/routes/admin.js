module.exports = (app) =>{
    app.get('/admin', (req, res) =>{
        res.render('admin/admin', {errors: {}, notice:{}});
    });

    app.post('/admin/save-notice', (req, res) =>{
        var notice = req.body;
        req.assert('title', "The field title it's obrigatory").notEmpty();
        req.assert('resume', "The field resume it's obrigatory").notEmpty();
        req.assert('resume', "The field resume must have between 10 and 100 characters").len(10,100);
        req.assert('author', 'The field date is obrigatory').notEmpty();
        req.assert('date_notice', "The field date it's obrigatory").notEmpty().isDate({format:'YYYY-MM-DD'});
        req.assert('notice', "The field notice it's obrigatory").notEmpty();
        var errors = req.validationErrors();
        if (errors){
            console.log(errors);
            res.render('admin/admin', {errors: errors, notice: notice});
            return;
        } 

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

