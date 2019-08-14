'use strict';

module.exports = function (app) {
	const categories = require('../controller/categories')
	const notes = require('../controller/notes')

	app.get('/notes', notes.getNotes)
	app.get('/notes/:id', notes.getNotesById)
	app.get('/notes/category/:catid', notes.getNotesByCategories)
	app.post('/notes/', notes.postNotes)
	app.patch('/notes/:id', notes.patchNotes)
	app.delete('/notes/:id', notes.deleteNotes)

	app.get('/categories', categories.getCategories)
	app.get('/categories/:id', categories.getCategoriesById)
	app.post('/categories/', categories.postCategory)
	app.patch('/categories/:id', categories.patchCategory)
	app.delete('/categories/:id', categories.deleteCategory)
}
