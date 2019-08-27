function NewsDAO(database){
    this._database = database;
}

NewsDAO.prototype.getNews = function(callback){
    this._database.query('SELECT * FROM news', callback);
}
NewsDAO.prototype.getNotice = function(callback){
    this._database.query('SELECT * FROM news WHERE id = 2', callback);
}
NewsDAO.prototype.saveNotice = (notice, callback) =>{
    try{
        this._database.query('INSERT INTO noticias SET ?', notice, callback);
    }catch(e){
        console.log(this._database);
        console.log(e);
    }
    
}


module.exports = () => {
    return NewsDAO;
}