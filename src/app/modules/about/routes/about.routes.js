let express = require('express');
const { authenticate } = require('../../../middlewares/jwt.middleware');
const { get_about,add_about,edit_about,delete_about,get_about_id } = require('../bussiness/about.bussiness');
let router = express.Router();
router.post('/add_about',authenticate,add_about)
router.put('/update_about/:id',authenticate,edit_about)
router.get('/get_about/',authenticate,get_about)
router.get('/get_about/:id',get_about_id)
router.delete('/delete_about/:id',authenticate,delete_about)
module.exports = router;
