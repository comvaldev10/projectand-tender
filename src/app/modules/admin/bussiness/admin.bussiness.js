var con = require('../../../db/mysql')
var jwt = require('jsonwebtoken');
var generate_token=(id)=>
{
    var token=jwt.sign({ id: id }, 'shhhhh');
    return token
}
const login = async (req,response) => {
  var sql = `Select * from user where email='${req.body.email}' AND password='${req.body.password}'`
  try {
    con.query(sql,(err, res) => {
      if (err)
        response.json(err);
    if(res[0]?.id)
 response.json(generate_token(res[0]?.id))
    })
  }
  catch (err) {
    return err
  }
}

const get_user = async (req,response) => {//get all user
   if(req.user.role_id==2)
{
    var sql ="select * from user inner join sector_of_user_schema on sector_of_user_schema.user_id=user.id inner join project_sector_schema on sector_of_user_schema.sector_id=project_sector_schema.pid inner join company_role_schema on company_role_schema.cid=user.id inner join sub_project_sector_schema on sector_of_user_schema.sub_sector_id=sub_project_sector_schema.spssid inner join sub_sub_project_sector_schema on sector_of_user_schema.sub_sub_sector_id=sub_sub_project_sector_schema.sspssid inner join tender_of_user_schema on sector_of_user_schema.user_id=user.id inner join tender_schema on tender_of_user_schema.tender_id=tender_schema.tsid inner join sub_tender_schema on sub_tender_schema.stsid=tender_of_user_schema.sub_tender_id"
    try {
      con.query(sql,(err, res) => {
        if (err)
          response.json(err);
          response.json(res);
      })
    }
    catch (err) {
      return err
    }
  }
  else
  {
    req.send("unauthorised user").status(200);
  }
}
const get_user_by_id = async (req,response) => {//get particular user
    if(req.user.role_id==2)
 {
  var sql ="select * from user inner join sector_of_user_schema on sector_of_user_schema.user_id=user.id inner join project_sector_schema on sector_of_user_schema.sector_id=project_sector_schema.pid inner join company_role_schema on company_role_schema.cid=user.id inner join sub_project_sector_schema on sector_of_user_schema.sub_sector_id=sub_project_sector_schema.spssid inner join sub_sub_project_sector_schema on sector_of_user_schema.sub_sub_sector_id=sub_sub_project_sector_schema.sspssid inner join tender_of_user_schema on sector_of_user_schema.user_id=user.id inner join tender_schema on tender_of_user_schema.tender_id=tender_schema.tsid inner join sub_tender_schema on sub_tender_schema.stsid=tender_of_user_schema.sub_tender_id where user.id="+req.params.id
     try {
       con.query(sql,(err, res) => {
         if (err)
           response.json(err);
           response.json(res);
       })
     }
     catch (err) {
       return err
     }
   }
   else
   {
     req.send("unauthorised user").status(401);
   }
 }
 
const pending_user = async (req,response) => {
    if(req.user.role_id==2)
 {
  var sql =`select * from user inner join sector_of_user_schema on sector_of_user_schema.user_id=user.id inner join project_sector_schema on sector_of_user_schema.sector_id=project_sector_schema.pid inner join company_role_schema on company_role_schema.cid=user.id inner join sub_project_sector_schema on sector_of_user_schema.sub_sector_id=sub_project_sector_schema.spssid inner join sub_sub_project_sector_schema on sector_of_user_schema.sub_sub_sector_id=sub_sub_project_sector_schema.sspssid inner join tender_of_user_schema on sector_of_user_schema.user_id=user.id inner join tender_schema on tender_of_user_schema.tender_id=tender_schema.tsid inner join sub_tender_schema on sub_tender_schema.stsid=tender_of_user_schema.sub_tender_id where user.subscribed=0`
     try {
       con.query(sql,(err, res) => {
         if (err)
           response.json(err);
           response.json(res);
       })
     }
     catch (err) {
       return err
     }
   }
   else
   {
     req.json1("unauthorised user").status(401);
   }
 }
 const add_project = async (req,response) => {
  try{
  if(req.user.role_id==2)
{
  var sql = "INSERT INTO project_sector_schema(project_sector) VALUES ?"
  var data1 = [Object.values(req.body)]
     con.query(sql,[data1],(err, res) => {
       if (err)
         response.json(err);
         response.json(res);
     })
    }
 
 else
 {
   req.json1("unauthorised user").status(401);
 }
}
 catch (err) {
  return err
}
 }

const sub_add_project = async (req,response) => {
  try{
  if(req.user.role_id==2)
{
  var sql = "INSERT INTO sub_project_sector_schema(sub_roject_sector) VALUES ?"
  var data1 = [Object.values(req.body)]
     con.query(sql,[data1],(err, res) => {
       if (err)
         response.json(err);
         response.json(res);
     })
    }
 
 else
 {
   req.json1("unauthorised user").status(401);
 }
}
 catch (err) {
  return err
}
 }
 const sub_sub_add_project = async (req,response) => {
  try{
  if(req.user.role_id==2)
{
  var sql = "INSERT INTO sub_project_sector_schema(sub_sub_roject_sector,sector_id,sub_sector_id) VALUES ?"
  var data1 = [Object.values(req.body)]
     con.query(sql,[data1],(err, res) => {
       if (err)
         response.json(err);
         response.json(res);
     })
    }
 
 else
 {
   req.json1("unauthorised user").status(401);
 }
}
 catch (err) {
  return err
}
 }


module.exports = {login,get_user,get_user_by_id,pending_user,add_project,sub_add_project,sub_sub_add_project};