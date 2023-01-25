let express = require('express');
const { authenticate } = require('../../../middlewares/jwt.middleware');
const { get_site, add_site, edit_site, delete_site, get_site_id } = require('../bussiness/site_details.bussiness');
let router = express.Router();
router.post('/add_site', authenticate, add_site)
router.put('/update_site/:id', authenticate, edit_site)
router.get('/get_site/', get_site)
router.get('/get_site/:id', get_site_id)
router.delete('/delete_site/:id', authenticate, delete_site)
module.exports = router;
