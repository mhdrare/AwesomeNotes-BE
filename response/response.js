'use strict';

exports.pages = (pages, limit, total, totalPage, rows, res) => {
	const data = {
		status: 200,
		data: rows,
		totalData: total,
		currentPage: parseInt(pages),
		totalPage: totalPage,
		limit: parseInt(limit)
	}
	res.json(data);
	res.end();
}

exports.success = (values, res) => {
	const data = {
		status: 200,
		values: values,
	};
	res.json(data);
	res.end();
}

exports.successNotes = (title, description, category, res) => {
	const data = {
		status: 200,
		values: {
			title,
			description,
			category,
		},
	};
	res.json(data);
	res.end();
}

exports.successCategory = (category, url_image, res) => {
	const data = {
		status: 200,
		values: {
			category,
			url_image
		},
	};
	res.json(data);
	res.end();
}

exports.delete = (id, res) => {
	const data = {
		status: 200,
		values: {
			id,
		},
	};
	res.json(data);
	res.end();
}

exports.error = (error, res) => {
	const data = {
		status: 500,
		error: error,
	};
	res.json(data);
	res.end();	
}

exports.empty = (res) => {
	const data = {
		status: 200,
		message: 'Data is empty or not found!',
	};
	res.json(data);
	res.end();	
}