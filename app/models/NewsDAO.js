function NewsDAO(database){
    this._database = database;
}

NewsDAO.prototype.getNews = function(callback){
    this._database.query('SELECT * FROM news', callback);
}
NewsDAO.prototype.getNotice = function(callback){
    this._database.query('SELECT * FROM news WHERE id = 2', callback);
}
NewsDAO.prototype.saveNotice = function (notice, callback){
    this._database.query('INSERT INTO news SET ?', notice, callback);
}

module.exports = () => {
    return NewsDAO;
}