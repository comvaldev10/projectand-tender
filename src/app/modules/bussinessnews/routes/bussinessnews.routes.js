let express = require('express');
const { authenticate } = require('../../../middlewares/jwt.middleware');
const { get_bussiness_news,add_bussiness_news,edit_bussiness_news,delete_bussiness_news,get_bussiness_news_id } = require('../bussiness/bussinessnews.bussiness');
let router = express.Router();

router.post('/add_bussiness_news',authenticate,add_bussiness_news)
router.put('/update_bussiness_news/:id',authenticate,edit_bussiness_news)
router.get('/get_bussiness_news/',authenticate,get_bussiness_news)
router.get('/get_bussiness_news/:id',get_bussiness_news_id)
router.delete('/delete_bussiness_news/:id',authenticate,delete_bussiness_news)
module.exports=router;