module.exports = (app) =>{
    app.get('/admin', (req, res) =>{
        app.app.controllers.admin.admin(app, req, res);
    });

    app.post('/admin/save-notice', (req, res) =>{
        app.app.controllers.admin.saveNotice(app, req, res);
    });
};

