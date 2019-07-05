'use strict';

const connection = require('../connection/connection')
const response = require('../response/response')
const isEmpty = require('lodash.isempty')

exports.getNotes = (req, res) => {
	let search = req.query.search || '';
	let sort = req.query.sort || 'desc';
	let pages = req.query.page || 1;
	let limit = req.query.limit || 10;
	let offset = ((parseInt(pages) - 1)*limit);
	let total, totalPage, message, query;

	if (search != null || sort != null || pages != null || limit != null) {
		query = `SELECT notes.id, title, description, time, categories.categoryName, notes.category FROM notes JOIN categories ON notes.category = categories.id WHERE title LIKE '%${search}%' ORDER BY time ${sort} LIMIT ${limit} OFFSET ${offset}`;
	} else {
		query = `SELECT notes.id, title, description, time, categories.categoryName, notes.category FROM notes JOIN categories ON notes.category = categories.id ORDER BY time ${sort}`;
	}

	connection.query(
		`SELECT COUNT(*) AS total FROM notes WHERE title LIKE '%${search}%'`,
		(error, rows, field) => {
			total = rows[0].total;
			totalPage = Math.ceil(total/limit);
		}
	)

	connection.query(
		query,
		(error, rows, fields) => {
			if (error) {
				response.error(error, res)
			} else {
				if (rows.length === 0 || rows.length === '') {
					if (pages >= totalPage) {
						response.empty(res)
					}
				} else {
					response.pages(pages, limit, total, totalPage, rows, res);
				}
			}
		}
	);
}

exports.getNotesById = (req, res) => {
	let id = req.params.id;

	connection.query(
		`SELECT notes.id, title, description, time, categories.category FROM notes JOIN categories ON notes.category = categories.id WHERE notes.id = '${id}'`,
		(error, rows, fields) => {
			if (error) {
				response.error(error, res)
			} else {
				if (rows.length > 0) {
					response.success(rows, res)
				} else {
					response.empty(res)
				}
			}
		}
	);
}

exports.postNotes = (req, res) => {
	let title = req.body.title;
	let description = req.body.description;
	let category = req.body.category;

	if (!req.body.title || !req.body.description || !req.body.category) {
		response.empty(res)
	} else {
		connection.query(
			`INSERT INTO notes SET title = '${title}', description = '${description}', time = now(), category = ${category}`,
			(error, rows, fields) => {
				if (error) {
					response.error(error, res)
				} else {
					if (rows.length === 0) {
						response.empty(res)
					} else {
						connection.query(
							`SELECT notes.id, title, description, time, categories.categoryName FROM notes JOIN categories ON notes.category = categories.id ORDER BY time DESC LIMIT 1`,
							(error, rows, fields) => {
								if (error) {
									response.error(error, res)
								} else {
									response.success(rows, res)
								}
							}
						)
					}
				}
			}
		);	
	}
}

exports.patchNotes = (req, res) => {
	let id = req.params.id;
	let title = req.body.title;
	let description = req.body.description;
	let category = req.body.category;

	connection.query(
		`UPDATE notes SET title = '${title}', description = '${description}', time = now(), category = ${category} WHERE id = ${id}`,
		(error, rows, fields) => {
			if (error) {
				response.error(error, res)
			} else {
				if (rows.length === 0) {
					response.empty(res)
				} else {
					connection.query(
						`SELECT notes.id, title, description, time, categories.categoryName, categories.id FROM notes JOIN categories ON notes.category = categories.id WHERE notes.id = ${id}`,
						(error, rows, fields) => {
							if (error) {
								response.error(error, res)
							} else {
								response.success(rows, res)
							}
						}
					)
				}
			}
		}
	);
}

exports.deleteNotes = (req, res) => {
	let id = req.params.id;

	if (id) {
		connection.query(`DELETE FROM notes WHERE id = ${id}`,
		    (error, rows, fields, result) => {
				if (error) {
					response.error(error, res)
				} else {
					response.delete(id, res)
				}
			}
		);
	} else {
		response.empty(res)
	}
}
