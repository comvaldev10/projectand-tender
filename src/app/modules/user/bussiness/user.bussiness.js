var con = require('../../../db/mysql')
const register = async (req, response) => {
  console.log(req.body,req.body.email,"ss")
  var emailcheck = `select * from user where user.email='${req.body.email}'`
  try {
    con.query(emailcheck, (err, res) => {
      if (err)
        response.json(err);
        if(res[0]?.email)
        {
      response.json("already exists")
        }
        else  {
          var sql = "INSERT INTO user(name,email,password,confirm_password,plan_id) VALUES ?"
          var data1 = [Object.values(req.body)]
      console.log(data1,"ss")
          con.query(sql, [data1], (err, res) => {
            if (err)
              response.json(err);
              else{
            response.json(res)
        }})
        }
    })
}
  catch (err) {
    return err
  }
}
const register2 = async (req, response) => {

  const obj=
  {company_name:req.body.company_name,
    user_company_role:req.body.user_company_role,
    address:req.body.address,
    country:req.body.country,
    city:req.body.city,
    pin_zip:req.body.pin_zip,
    mobile_contact:req.body.mobile_contact,
    office_contact:req.body.office_contact,
    vat_detail:req.body?.vat_detail==undefined||req.body?.vat_detail==''||req.body?.vat_detail==0||req.body?.vat_detail=='0'?'':req.body?.vat_detail,
    vat_date:req.body?.vat_date==undefined||req.body?.vat_date==''||req.body?.vat_date==0||req.body?.vat_date=='0'?'':req.body?.vat_date,
    vat_number:req.body?.vat_number==undefined||req.body?.vat_number==''||req.body?.vat_number==0||req.body?.vat_number=='0'?'':req.body?.vat_number,
    vat_image:req.body?.vat_image==undefined||req.body?.vat_image==''||req.body?.vat_image==0||req.body?.vat_image=='0'?'':req.body?.vat_image,
    purchase_additional_login:req.body?.purchase_additional_login==undefined||req.body?.purchase_additional_login==''||req.body?.purchase_additional_login==0||req.body?.purchase_additional_login=='0'?'':req.body?.purchase_additional_login,
    no_of_login_user:req.body?.no_of_login_user==undefined||req.body?.no_of_login_user==''||req.body?.no_of_login_user==0||req.body?.no_of_login_user=='0'?'':req.body?.no_of_login_user,
    price:req.body?.price==undefined||req.body?.price==''||req.body?.price==0||req.body?.price=='0'?'':req.body?.price,
  }  
  var data1 = Object.values(obj)
  data1.push(req.params.id)
  var sql = "UPDATE user SET company_name=?, user_company_role=?, address=?, country=?, city=?, pin_zip=?, mobile_contact=?, office_contact=?, vat_detail=?, vat_date=?, vat_number=?, purchase_additional_login=?, no_of_login_user=?,vat_image=?,price=? where user_id=?"
  try {
    
    con.query(sql, data1, (err, res) => {
      if (err)
        response.json(err);
      response.json(res)
    })
  }
  catch (err) {
    return err
  }
}
const register3 = async (req, response) => {
  var sql = "select * from user inner join plan_purchase on plan_purchase.plan_purchase_id=user.plan_id inner join sector_of_user_schema on sector_of_user_schema.user_id=user.user_id inner join project_sector_schema on sector_of_user_schema.sector_id=project_sector_schema.project_id inner join company_role_schema on company_role_schema.company_id=user.user_id inner join sub_project_sector_schema on sector_of_user_schema.sub_sector_id=sub_project_sector_schema.sub_project_id inner join sub_sub_project_sector_schema on sector_of_user_schema.sub_sub_sector_id=sub_sub_project_sector_schema.sub_sub_project_id inner join tender_of_user_schema on sector_of_user_schema.user_id=user.user_id inner join tender_schema on tender_of_user_schema.tender_id=tender_schema.tender_id inner join sub_tender_schema on sub_tender_schema.sub_tender_id=tender_of_user_schema.sub_tender_id where user.user_id=" + req.params.id
  try {
    con.query(sql, (err, res) => {
      if (err)
        response.json(err);
      response.json(res)
    })
  }
  catch (err) {
    return err
  }
}
const add_project = async (req, response) => {
  try
  {
  var data1 = req.params.id
req.body.forEach(element => {
  var sql1="select * from sector_of_user_schema where user_id="+req.params.id+" and sector_id="+element.sector_id+" and sub_sector_id="+element.sub_sector_id+" and sub_sub_sector_id="+element.sub_sub_sector_id
  con.query(sql1, (err, res) => {
    if (err)
      response.json(err);
      if(!res[0]?.sector_id)
      {
        console.log(res,"aa")
    var data2 = Object.values(element)
  data2.unshift(req.params.id)
  var data3 = [data2]
      var sql = "INSERT INTO sector_of_user_schema(user_id,sector_id,sub_sector_id,sub_sub_sector_id) VALUES ?"
    con.query(sql, [data3], (err, res1) => {
      if (err)
        response.json(err);
        console.log(res1)
    })
    }
    else
    {
      var sql2 = "DELETE FROM sector_of_user_schema WHERE user_id="+req.params.id+" AND sector_id=" + element.sector_id + " AND sub_sector_id=" + element.sub_sector_id + " AND sub_sub_sector_id=" + element.sub_sub_sector_id
        con.query(sql2, (err, res2) => {
          if (err)
            response.json(err);
            console.log(res2)
        })
      }      
  })
})
response.json("add_delete both done")
}
catch(err)
{
response.json(err)
}
}

const delete_project = async (req, response) => {
  var data1 = req.params.id

  var sql = "DELETE FROM sector_of_user_schema WHERE user_id=" + data1 + " AND sector_id=" + req.body.sector_id + " AND sub_sector_id=" + req.body.sub_sector_id + " AND sub_sub_sector_id=" + req.body.sub_sub_sector_id
  try {
    con.query(sql, (err, res) => {
      if (err)
        response.json(err);
      response.json(res)
    })
  }
  catch (err) {
    return err
  }
}

const add_tender = async (req, response) => {
  try
  {
  var data1 = req.params.id
req.body.forEach(element => {
  var sql1="select * from tender_of_user_schema where user_id="+req.params.id+" and tender_id="+element.tender_id+" and sub_tender_id="+element.sub_tender_id
  con.query(sql1, (err, res) => {
    if (err)
      response.json(err);
      if(!res[0]?.tender_id)
      {
        console.log(res,"aa")
    var data2 = Object.values(element)
  data2.unshift(req.params.id)
  var data3 = [data2]
      var sql = "INSERT INTO tender_of_user_schema(user_id,tender_id,sub_tender_id) VALUES ?"
    con.query(sql, [data3], (err, res1) => {
      if (err)
        response.json(err);
        console.log(res1)
    })
    }
    else
    {
      var sql2 = "DELETE FROM tender_of_user_schema WHERE user_id="+req.params.id+" AND tender_id=" + element.tender_id + " AND sub_tender_id=" + element.sub_tender_id
        con.query(sql2, (err, res2) => {
          if (err)
            response.json(err);
            console.log(res2)
        })
      }      
  })
})
response.json({status:'success',data:"add_delete both done"})
}
catch(err)
{
response.json(err)
}
}
const delete_tender = async (req, response) => {
  var data1 = req.params.id

  var sql = "DELETE FROM tender_of_user_schema WHERE user_id=" + data1 + " AND sub_tender_id=" + req.body.sub_tender_id + " AND tender_id=" + req.body.tender_id
  try {
    con.query(sql, (err, res) => {
      if (err)
        response.json(err);
      response.json(res)
    })
  }
  catch (err) {
    return err
  }
}
const terms = async (req, response) => {
  var data1 = Object.values(req.body)
  data1.push(req.params.id)
  var sql = "UPDATE user SET term_and_condition=? where id=?"
  try {
    con.query(sql, data1, (err, res) => {
      if (err)
        response.json(err);
      response.json(res)
    })
  }
  catch (err) {
    return err
  }
}

const get_projects = async (req, response) => {
  var sql = "select * from project_sector_schema"
  try {
    con.query(sql, (err, res) => {
      if (err)
        response.json(err);
      response.json(res)
    })
  }
  catch (err) {
    return err
  }
}
const get_sub_projects = async (req, response) => {
  var sql = "select * from sub_project_sector_schema"
  try {
    con.query(sql, (err, res) => {
      if (err)
        response.json(err);
      response.json(res)
    })
  }
  catch (err) {
    return err
  }
}
const get_sub_sub_projects = async (req, response) => {
  console.log("aa")
  var sql = "select sub_sub_project_sector_schema.sub_sub_project_id,sub_sub_project_sector_schema.sub_sub_project_sector,sub_project_sector_schema.sub_project_id,sub_project_sector_schema.sub_project_sector,project_sector_schema.project_id,project_sector_schema.project_sector from sub_sub_project_sector_schema inner join sub_project_sector_schema on sub_sub_project_sector_schema.sub_sector_id=sub_project_sector_schema.sub_project_id inner join project_sector_schema on project_sector_schema.project_id=sub_project_sector_schema.sector_id"
  try {
    con.query(sql, (err, res) => {
      if (err)
        response.json(err);
      response.json(res)
    })
  }
  catch (err) {
    return err
  }
}

const get_tenders = async (req, response) => {
  var sql = "select * from tender_schema"
  try {
    con.query(sql, (err, res) => {
      if (err)
        response.json(err);
      response.json(res)
    })
  }
  catch (err) {
    return err
  }
}
const get_sub_tenders = async (req, response) => {
  var sql = "select * from sub_tender_schema"
  try {
    con.query(sql, (err, res) => {
      if (err)
        response.json(err);
      response.json(res)
    })
  }
  catch (err) {
    return err
  }
}


const get_user = async (req, response) => {
  var sql = "select * from user inner join company_role_schema on company_role_schema.company_id=user.role_id  inner join plan_purchase on plan_purchase.plan_purchase_id=user.plan_id where user.user_id=" + req.params.id
  try {
    con.query(sql, (err, res) => {
      if (err)
        response.json(err);
      response.json(res)
    })
  }
  catch (err) {
    return err
  }
}


const user_plan_update = async (req, response) => {
  var obj={
    "price":req.body.price,
    "plan_id":req.body.plan_id,
    "no_of_login_user":req.body.no_of_login_user
  }
  var data1 = Object.values(obj)
  data1.push(req.params.id)
  var sql = "update user set price=?,plan_id=?,no_of_login_user=? where user_id=?"
  try {
    con.query(sql,data1,(err, res) => {
      if (err)
        response.json(err);
      response.json(res)
    })
  }
  catch (err) {
    return err
  }
}
module.exports = { register, register2, register3, add_project, delete_project, add_tender, delete_tender, terms, get_projects,get_sub_projects,get_sub_sub_projects,get_tenders,get_sub_tenders,get_user,user_plan_update};