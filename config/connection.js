// Set up database connection
var mysql = require('mysql');
var connection;

// add in the environment variable option for JAWSDB for heroku
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
	host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
	});
};


// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'burgers_db'
// });

// not strictly required, but best practice to establish connection
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id: " + connection.threadId);
});

// export the connection back to orm
module.exports = connection;