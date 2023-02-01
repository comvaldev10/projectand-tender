let express = require('express');
const { authenticate } = require('../../../middlewares/jwt.middleware');
const { get_contact,add_contact,edit_contact,delete_contact,get_contact_id } = require('../bussiness/contact.bussiness');
let router = express.Router();
router.post('/add_contact',authenticate,add_contact)
router.put('/update_contact/:id',authenticate,edit_contact)
router.get('/get_contact/',get_contact)
router.get('/get_contact/:id',get_contact_id)
router.delete('/delete_contact/:id',authenticate,delete_contact)
module.exports = router;
