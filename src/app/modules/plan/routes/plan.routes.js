let express = require('express');
const { get_plan,add_plan,edit_plan,delete_plan,get_plan_id } = require('../bussiness/plan.bussiness');
let router = express.Router();
router.post('/add_plan',add_plan)
router.put('/edit_plan/:id',edit_plan)
router.get('/get_plan/',get_plan)
router.get('/get_plan/:id',get_plan_id)
router.delete('/delete_id',delete_plan)
module.exports = router;
