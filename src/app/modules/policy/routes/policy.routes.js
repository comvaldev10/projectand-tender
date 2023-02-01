let express = require('express');
const { authenticate } = require('../../../middlewares/jwt.middleware');
const { get_event,add_event,edit_event,delete_event,get_event_id } = require('../bussiness/policy.bussiness');
let router = express.Router();

router.post('/add_event',authenticate,add_event)
router.put('/update_event/:id',authenticate,edit_event)
router.get('/get_event/',get_event)
router.get('/get_event/:id',get_event_id)
router.delete('/delete_event/:id',authenticate,delete_event)
module.exports=router;