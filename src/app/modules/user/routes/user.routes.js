let express = require('express');
let router = express.Router(),
{register,register2,register3,add_project,delete_project,add_tender,delete_tender,terms,get_projects,get_sub_projects,get_sub_sub_projects,get_tenders,get_sub_tenders,get_user} = require("../bussiness/user.bussiness");
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,'uploads');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()+file.originalname
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
const upload = multer({ storage: storage })
const cpuploads=upload.fields([{ name: 'vat_images', maxCount: 1 }])
router.post('/register',register)
router.put('/register2/:id',cpuploads,register2)
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

module.exports = router;

