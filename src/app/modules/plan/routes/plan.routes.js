let express = require('express');
const { authenticate } = require('../../../middlewares/jwt.middleware');
const { get_plan,add_plan,edit_plan,delete_plan,get_plan_id } = require('../bussiness/plan.bussiness');
let router = express.Router();
router.post('/add_plan',authenticate,add_plan)
router.put('/update_plan/:id',authenticate,edit_plan)
router.get('/get_plan/',get_plan)
router.get('/get_plan/:id',get_plan_id)
router.delete('/delete_plan/:id',authenticate,delete_plan)
module.exports = router;
