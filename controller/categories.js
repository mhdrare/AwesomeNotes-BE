'use strict';

const connection = require('../connection/connection')
const response = require('../response/response')

exports.getCategories = (req, res) => {
	connection.query(
		`SELECT * FROM categories`,
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

exports.getCategoriesById = (req, res) => {
	let id = req.params.id;

	connection.query(
		`SELECT * FROM categories WHERE id = ${id}`,
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

exports.postCategory = (req, res) => {
	let category = req.body.category;
	let url_image = req.body.url_image;

	connection.query(
		`INSERT INTO categories SET categoryName = '${category}', url_image = '${url_image}'`,
		(error, rows, fields) => {
			if (error) {
				response.error(error, res)
			} else {
				connection.query(
					`SELECT * FROM categories ORDER BY id DESC LIMIT 1`,
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
	);
}

exports.patchCategory = (req, res) => {
	let id = req.params.id;
	let category = req.body.category;
	let url_image = req.body.url_image;

	connection.query(
		`UPDATE categories SET categoryName = '${category}', url_image = '${url_image}' WHERE id = ${id}`,
		(error, rows, fields) => {
			if (error) {
				response.error(error, res)
			} else {
				response.successCategory(category, url_image, res)
			}
		}
	);
}

exports.deleteCategory = (req, res) => {
	let id = req.params.id;

	if (id) {
		connection.query(`DELETE FROM categories WHERE id = ${id}`,
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