var mysql = require('mysql');

var connMySQL  = () =>{
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'portal_noticias'
    });
};

module.exports = () => {
    return connMySQL;
};