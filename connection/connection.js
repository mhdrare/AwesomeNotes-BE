const mysql = require('mysql');
require('dotenv').config();

var conn = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
});

conn.connect(function (err) {
	if (err) {
		throw err;
	} else {
		console.log('Database connected!');
	}
});

module.exports = conn;