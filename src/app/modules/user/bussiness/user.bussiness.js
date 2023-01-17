var con = require('../../../db/mysql')
const register = async (req, response) => {
  var emailcheck = `select * from user where user.email='${req.body.email}'`
  try {
    con.query(emailcheck, (err, res) => {
      if (err)
        response.json(err);
        if(res[0].email)
        {
      response.json("already exists")
        }
        else  {
          var sql = "INSERT INTO user(name,email,password,confirm_password,plan_id) VALUES ?"
          var data1 = [Object.values(req.body)]
      
          con.query(sql, [data1], (err, res) => {
            if (err)
              response.json(err);
            response.json(res)
          })
        }
    })
}
  catch (err) {
    return err
  }
}
const register2 = async (req, response) => {
  console.log(req.files,"aa")
  var data1 = Object.values(req.body)
  data1.push(req.params.id)
  var sql = "UPDATE user SET company_name=?, user_company_role=?, address=?, country=?, city=?, pin_zip=?, mobile_contact=?, office_contact=?, vat_detail=?, vat_date=?, vat_number=?, vat_image=?, purchase_additional_login=?, no_of_login_user=? where id=?"
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
  var sql = "select * from user inner join plan_purchase on plan_purchase.id=user.plan_id inner join plan_description on plan_description.plan_id=plan_purchase.id inner join plan_compare_description on plan_compare_description.plan_id=plan_purchase.id inner join sector_of_user_schema on sector_of_user_schema.user_id=user.id inner join project_sector_schema on sector_of_user_schema.sector_id=project_sector_schema.id inner join company_role_schema on company_role_schema.id=user.id inner join sub_project_sector_schema on sector_of_user_schema.sub_sector_id=sub_project_sector_schema.id inner join sub_sub_project_sector_schema on sector_of_user_schema.sub_sub_sector_id=sub_sub_project_sector_schema.id inner join tender_of_user_schema on sector_of_user_schema.user_id=user.id inner join tender_schema on tender_of_user_schema.tender_id=tender_schema.id inner join sub_tender_schema on sub_tender_schema.id=tender_of_user_schema.sub_tender_id where sector_of_user_schema.user_id=" + req.params.id
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
  var data1 = req.params.id
  var data2 = Object.values(req.body)
  data2.unshift(data1)
  var data2 = [data2]

  var sql = "INSERT INTO sector_of_user_schema(user_id,sector_id,sub_sector_id,sub_sub_sector_id,created_at,updated_at) VALUES ?"
  try {
    con.query(sql, [data2], (err, res) => {
      if (err)
        response.json(err);
      response.json(res)
    })
  }
  catch (err) {
    return err
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
  var data1 = req.params.id
  var data2 = Object.values(req.body)
  data2.unshift(data1)
  var data2 = [data2]
  var sql = "INSERT INTO tender_of_user_schema(user_id,tender_id,sub_tender_id,created_at,updated_at) VALUES ?"
  try {
    con.query(sql, [data2], (err, res) => {
      if (err)
        response.json(err);
      response.json(res)
    })
  }
  catch (err) {
    return err
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
  var sql = "select project_sector_schema.id as projectid,project_sector_schema.project_sector,sub_project_sector_schema.sub_project_sector as sub_sector,sub_project_sector_schema.id as sub_sector_id,sub_sub_project_sector_schema.id as sub_sub_project_sector_schema_id,sub_sub_project_sector_schema.sub_sub_project_sector from sub_sub_project_sector_schema left join sub_project_sector_schema on sub_sub_project_sector_schema.sub_sector_id=sub_project_sector_schema.id inner join project_sector_schema on sub_project_sector_schema.sector_id=project_sector_schema.id"
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
  var sql = "select * from sub_tender_schema inner join tender_schema on sub_tender_schema.tender_id=tender_schema.id"
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
  var sql = "select * from user inner join plan_purchase on plan_purchase.id=user.plan_id inner join plan_description on plan_description.plan_id=plan_purchase.id inner join plan_compare_description on plan_compare_description.plan_id=plan_purchase.id inner join company_role_schema on company_role_schema.id-user.role_id where user.id=" + req.params.id
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

module.exports = { register, register2, register3, add_project, delete_project, add_tender, delete_tender, terms, get_projects, get_tenders, get_user };