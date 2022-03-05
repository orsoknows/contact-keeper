const express = require('express');
const router = express.Router();

// @route		GET api/contacts
// @desc		Get all user contacts
// @access	Private
router.get('/', (req, res) => {
	res.send('Get all user contacts');
});

// @route		POST api/contacts
// @desc		Add new user contact
// @access	Private
router.post('/', (req, res) => {
	res.send('Add new user contact');
});

// @route		PUT api/contacts/:id
// @desc		Update user contact
// @access	Private
router.put('/:id', (req, res) => {
	res.send('Update user contact');
});

// @route		DELETE api/contacts/:id
// @desc		Delete user contact
// @access	Private
router.delete('/:id', (req, res) => {
	res.send('Delete user contact');
});

module.exports = router;
