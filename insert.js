//Import mysql
var mysql = require('mysql'); 

//Create connection using function
var connection = mysql.createConnection({
	//host		: 'localhost',
	//port: '3307',
	user		: 'root',
	password	: 'password',
	database    : 'articles',
	socketPath: '/tmp/mysql.sock'
});

//Connect to the database
connection.connect();

var article = {
	author: 'Pratima',
	title: 'node-mysql'
};

var query = connection.query('insert into articles set ?', article, function(err, result) {
	console.log(err);
	console.log(query.sql);
	console.log(result);
});
