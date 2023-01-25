var con = require('../../../db/mysql')
const get_plan = async (req, response) => {
  var sql = "select * from plan_purchase"
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
const get_plan_id = async (req, response) => {
  var sql = "select * from plan_purchase where plan_purchase_id="+req.params.id
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
const add_plan = async (req, response) => {
    try {
      if(req.user.role_id == 2)
      {
      let obj={
    "plan_name":req?.body?.plan_name?req?.body?.plan_name:'',
    "site_id": req?.body?.site_id?req?.body?.site_id:'',
    "sequence": req?.body?.sequence?req?.body?.sequence:'',
    "status": req?.body?.status?req?.body?.status:'',
    "tenders_plan": req?.body?.tenders_plan?req?.body?.tenders_plan:"0",
    "no_of_tenders": req?.body?.no_of_tenders?req?.body?.no_of_tenders:'',
    "projects_plan": req?.body?.projects_plan?req?.body?.projects_plan:"0",
    "no_of_projects": req?.body?.no_of_projects?req?.body?.no_of_projects:'',
    "export_to_excel_plan":req?.body?.export_to_excel_plan?req?.body?.export_to_excel_plan:'',
    "plan_cost": req?.body?.plan_cost?req?.body?.plan_cost:'',
    "addition_user_cost": req?.body?.addition_user_cost?req?.body?.addition_user_cost:'',
    "discount_plan":req?.body?.discount_plan?req?.body?.discount_plan:'',
    "discount_percentage":req?.body?.discount_percentage?req?.body?.discount_percentage:'',
    "date": req?.body?.date?req?.body?.date:'',
    "feature_title3": req?.body?.feature_title3?req?.body?.feature_title3:'',
    "feature_title1": req?.body?.feature_title1?req?.body?.feature_title1:'',
    "feature_title2": req?.body?.feature_title2?req?.body?.feature_title2:'',
    "feature_description1": req?.body?.feature_description1?req?.body?.feature_description1:'',
    "feature_description2": req?.body?.feature_description2?req?.body?.feature_description2:'',
    "feature_description3":req?.body?.feature_description3?req?.body?.feature_description3:'',
    "feature_compare1": req?.body?.feature_compare1?req?.body?.feature_compare1:'',
    "feature_compare2": req?.body?.feature_compare2?req?.body?.feature_compare2:'',
    "feature_compare3": req?.body?.feature_compare3?req?.body?.feature_compare3:'',
    "feature_compare4": req?.body?.feature_compare4?req?.body?.feature_compare4:'',
    "feature_compare5":req?.body?.feature_compare5?req?.body?.feature_compare5:'',
      }
      var sql = "insert into plan_purchase(plan_name,site_id,sequence,status,tenders_plan,no_of_tenders,projects_plan,no_of_projects,export_to_excel_plan,plan_cost,addition_user_cost,discount_plan,discount_percentage,date,feature_title3,feature_title1,feature_title2,feature_description1,feature_description2,feature_description3,feature_compare1,feature_compare2,feature_compare3,feature_compare4,feature_compare5) values ?"
      var data1 = [Object.values(obj)]
      con.query(sql, [data1], (err, res) => {
        if (err)
          response.json(err);
        response.json(res)
      })
    }
    else{
      response.json("unauthorised user").status(401);
    }
  }
    catch (err) {
      return err
    }
  }
  const edit_plan = async (req, response) => {
    try {
      if(req.user.role_id == 2)
      {
      let obj={
    "plan_name":req?.body?.plan_name?req?.body?.plan_name:'',
    "site_id": req?.body?.site_id?req?.body?.site_id:'',
    "sequence": req?.body?.sequence?req?.body?.sequence:'',
    "status": req?.body?.status?req?.body?.status:'',
    "tenders_plan": req?.body?.tenders_plan?req?.body?.tenders_plan:"0",
    "no_of_tenders": req?.body?.no_of_tenders?req?.body?.no_of_tenders:'',
    "projects_plan": req?.body?.projects_plan?req?.body?.projects_plan:"0",
    "no_of_projects": req?.body?.no_of_projects?req?.body?.no_of_projects:'',
    "export_to_excel_plan":req?.body?.export_to_excel_plan?req?.body?.export_to_excel_plan:'',
    "plan_cost": req?.body?.plan_cost?req?.body?.plan_cost:'',
    "addition_user_cost": req?.body?.addition_user_cost?req?.body?.addition_user_cost:'',
    "discount_plan":req?.body?.discount_plan?req?.body?.discount_plan:'',
    "discount_percentage":req?.body?.discount_percentage?req?.body?.discount_percentage:'',
    "date": req?.body?.date?req?.body?.date:'',
    "feature_title3": req?.body?.feature_title3?req?.body?.feature_title3:'',
    "feature_title1": req?.body?.feature_title1?req?.body?.feature_title1:'',
    "feature_title2": req?.body?.feature_title2?req?.body?.feature_title2:'',
    "feature_description1": req?.body?.feature_description1?req?.body?.feature_description1:'',
    "feature_description2": req?.body?.feature_description2?req?.body?.feature_description2:'',
    "feature_description3":req?.body?.feature_description3?req?.body?.feature_description3:'',
    "feature_compare1": req?.body?.feature_compare1?req?.body?.feature_compare1:'',
    "feature_compare2": req?.body?.feature_compare2?req?.body?.feature_compare2:'',
    "feature_compare3": req?.body?.feature_compare3?req?.body?.feature_compare3:'',
    "feature_compare4": req?.body?.feature_compare4?req?.body?.feature_compare4:'',
    "feature_compare5":req?.body?.feature_compare5?req?.body?.feature_compare5:'',
      }
      var sql = "update plan_purchase set plan_name=?,site_id=?,sequence,status=?,tenders_plan=?,no_of_tenders=?,projects_plan=?,no_of_projects=?,export_to_excel_plan=?,plan_cost=?,addition_user_cost,discount_plan=?,discount_percentage=?,date=?,feature_title3=?,feature_title1=?,feature_title2=?,feature_description1=?,feature_description2=?,feature_description3=?,feature_compare1=?,feature_compare2=?,feature_compare3=?,feature_compare4=?,feature_compare5=? where plan_purchase_id=?"
      var data1 = Object.values(obj)
      data1.push(req.params.id)
      con.query(sql, (err, res) => {
        if (err)
          response.json(err);
        response.json(res)
      })
    }
    else{
      response.json("unauthorised user").status(401);
    }
  } 
    catch (err) {
      return err
    }
  }
  const delete_plan = async (req, response) => {
    var sql = "delete from plan_purchase where plan_purchase_id="+req.params.id
    try {
      con.query(sql, [data1], (err, res) => {
        if (err)
          response.json(err);
        response.json(res)
      })
    }
    catch (err) {
      return err
    }
  }
module.exports = {get_plan,get_plan_id,edit_plan,delete_plan,add_plan};