var con = require('../../../db/mysql')
var jwt = require('jsonwebtoken');
var generate_token=(id)=>
{
    var token=jwt.sign({ id: id }, 'shhhhh');
    return token
}
const login = async (req,response) =>{
  var sql = `Select * from user where email='${req.body.email}' AND password='${req.body.password}'`
  console.log(sql,"aa")
  try {
    con.query(sql,(err, res) => {
      if (err)
        response.json(err);
        console.log(res)
    if(res[0]?.user_id)
    {
 response.json(generate_token(res[0]?.user_id))
  }
else{
  response.json("Invalid user")
}
})
  }
  catch (err) {
    return err
  }
}
const get_user = async (req,response) => {//get all user
   if(req.user.role_id==2)
{
    var sql ="select * from user"
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
  var sql ="select * from user where user_id="+req.params.id
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
 const complete_user = async (req,response) => {
  if(req?.user?.role_id==2)
{
var sql =`select * from user inner join sector_of_user_schema on sector_of_user_schema.user_id=user.user_id where user.subscribed=1`
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
  console.log("aaa");
   response.json("unauthorised user").status(401);
 }
}
const pending_user = async (req,response) => {
  console.log(req.user,"aaa")
    if(req.user.role_id==2)
 {
  var sql =`select * from user where user.subscribed=0`
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
    console.log("aaa");
     req.json("unauthorised user").status(401);
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
   req.json("unauthorised user").status(401);
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
   req.json("unauthorised user").status(401);
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
   req.json("unauthorised user").status(401);
 }
}
 catch (err) {
  return err
}
 }


module.exports = {login,get_user,get_user_by_id,pending_user,add_project,sub_add_project,sub_sub_add_project,complete_user};