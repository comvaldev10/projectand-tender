let express = require('express');
let router = express.Router(),
{file_upload,register,user_plan_update,register2,register3,add_project,delete_project,add_tender,delete_tender,terms,get_projects,get_sub_projects,get_sub_sub_projects,get_tenders,get_sub_tenders,get_user} = require("../bussiness/user.bussiness");
const multer  = require('multer')
var storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, 'uploads');
  },
  filename: function (request, file, callback) {
    console.log(file);
    callback(null, Date.now()+file.originalname)
  }
});
var upload = multer({storage: storage}).array('vat_image', 1000);
router.post('/register',register)
router.post('/file_upload',upload,file_upload)
router.put('/register2/:id',upload,register2)
router.get('/register/:id',register3)
router.put('/add_project/:id',add_project)
router.delete('/delete_project/:id',delete_project)
router.put('/add_tender/:id',add_tender)
router.delete('/delete_tender/:id',delete_tender)
router.put('/terms/:id',terms)
router.get('/get_projects',get_projects)
router.get('/get_sub_projects',get_sub_projects)
router.get('/get_sub_sub_projects',get_sub_sub_projects)
router.get('/get_tenders',get_tenders)
router.get('/get_sub_tenders',get_sub_tenders)
router.get('/get_user/:id',get_user)
router.put('/user_plan_update/:id',user_plan_update)

module.exports = router;

