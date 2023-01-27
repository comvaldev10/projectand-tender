var con = require('../../../db/mysql')
const get_bussiness_news = async (req, response) => {
  var sql = "select * from bussiness_news_"
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
const get_bussiness_news_id = async (req, response) => {
  var sql = "select * from bussiness_news_ where bussiness_news__id=" + req.params.id
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
const add_bussiness_news = async (req, response) => {
  try {
    if (req.user.role_id == 2) {
      let obj = {
        "bussiness_news_name": req?.body?.bussiness_news_name ? req?.body?.bussiness_news_name : '',
        "site_id": req?.body?.site_id ? req?.body?.site_id : '',
        "sequence": req?.body?.sequence ? req?.body?.sequence : '',
        "status": req?.body?.status ? req?.body?.status : '',
        "tenders_bussiness_news": req?.body?.tenders_bussiness_news ? req?.body?.tenders_bussiness_news : "0",
        "no_of_tenders": req?.body?.no_of_tenders ? req?.body?.no_of_tenders : '',
        "projects_bussiness_news": req?.body?.projects_bussiness_news ? req?.body?.projects_bussiness_news : "0",
        "no_of_projects": req?.body?.no_of_projects ? req?.body?.no_of_projects : '',
        "export_to_excel_bussiness_news": req?.body?.export_to_excel_bussiness_news ? req?.body?.export_to_excel_bussiness_news : '',
        "bussiness_news_cost": req?.body?.bussiness_news_cost ? req?.body?.bussiness_news_cost : '',
        "addition_user_cost": req?.body?.addition_user_cost ? req?.body?.addition_user_cost : '',
        "discount_bussiness_news": req?.body?.discount_bussiness_news ? req?.body?.discount_bussiness_news : '',
        "discount_percentage": req?.body?.discount_percentage ? req?.body?.discount_percentage : '',
        "date": req?.body?.date ? req?.body?.date : '',
        "feature_title3": req?.body?.feature_title3 ? req?.body?.feature_title3 : '',
        "feature_title1": req?.body?.feature_title1 ? req?.body?.feature_title1 : '',
        "feature_title2": req?.body?.feature_title2 ? req?.body?.feature_title2 : '',
        "feature_description1": req?.body?.feature_description1 ? req?.body?.feature_description1 : '',
        "feature_description2": req?.body?.feature_description2 ? req?.body?.feature_description2 : '',
        "feature_description3": req?.body?.feature_description3 ? req?.body?.feature_description3 : '',
        "feature_compare1": req?.body?.feature_compare1 ? req?.body?.feature_compare1 : '',
        "feature_compare2": req?.body?.feature_compare2 ? req?.body?.feature_compare2 : '',
        "feature_compare3": req?.body?.feature_compare3 ? req?.body?.feature_compare3 : '',
        "feature_compare4": req?.body?.feature_compare4 ? req?.body?.feature_compare4 : '',
        "feature_compare5": req?.body?.feature_compare5 ? req?.body?.feature_compare5 : '',
      }
      var sql = "insert into bussiness_news_(bussiness_news_name,site_id,sequence,status,tenders_bussiness_news,no_of_tenders,projects_bussiness_news,no_of_projects,export_to_excel_bussiness_news,bussiness_news_cost,addition_user_cost,discount_bussiness_news,discount_percentage,date,feature_title3,feature_title1,feature_title2,feature_description1,feature_description2,feature_description3,feature_compare1,feature_compare2,feature_compare3,feature_compare4,feature_compare5) values ?"
      var data1 = [Object.values(obj)]
      con.query(sql, [data1], (err, res) => {
        if (err)
          response.json(err);
        response.json(res)
      })
    }
    else {
      response.json("unauthorised user").status(401);
    }
  }
  catch (err) {
    return err
  }
}
const edit_bussiness_news = async (req, response) => {
  try {
    if (req.user.role_id == 2) {
      let obj = {
        "bussiness_news_name": req?.body?.bussiness_news_name ? req?.body?.bussiness_news_name : '',
        "site_id": req?.body?.site_id ? req?.body?.site_id : '',
        "sequence": req?.body?.sequence ? req?.body?.sequence : '',
        "status": req?.body?.status ? req?.body?.status : '',
        "tenders_bussiness_news": req?.body?.tenders_bussiness_news ? req?.body?.tenders_bussiness_news : "0",
        "no_of_tenders": req?.body?.no_of_tenders ? req?.body?.no_of_tenders : '',
        "projects_bussiness_news": req?.body?.projects_bussiness_news ? req?.body?.projects_bussiness_news : "0",
        "no_of_projects": req?.body?.no_of_projects ? req?.body?.no_of_projects : '',
        "export_to_excel_bussiness_news": req?.body?.export_to_excel_bussiness_news ? req?.body?.export_to_excel_bussiness_news : '',
        "bussiness_news_cost": req?.body?.bussiness_news_cost ? req?.body?.bussiness_news_cost : '',
        "addition_user_cost": req?.body?.addition_user_cost ? req?.body?.addition_user_cost : '',
        "discount_bussiness_news": req?.body?.discount_bussiness_news ? req?.body?.discount_bussiness_news : '',
        "discount_percentage": req?.body?.discount_percentage ? req?.body?.discount_percentage : '',
        "date": req?.body?.date ? req?.body?.date : '',
        "feature_title3": req?.body?.feature_title3 ? req?.body?.feature_title3 : '',
        "feature_title1": req?.body?.feature_title1 ? req?.body?.feature_title1 : '',
        "feature_title2": req?.body?.feature_title2 ? req?.body?.feature_title2 : '',
        "feature_description1": req?.body?.feature_description1 ? req?.body?.feature_description1 : '',
        "feature_description2": req?.body?.feature_description2 ? req?.body?.feature_description2 : '',
        "feature_description3": req?.body?.feature_description3 ? req?.body?.feature_description3 : '',
        "feature_compare1": req?.body?.feature_compare1 ? req?.body?.feature_compare1 : '',
        "feature_compare2": req?.body?.feature_compare2 ? req?.body?.feature_compare2 : '',
        "feature_compare3": req?.body?.feature_compare3 ? req?.body?.feature_compare3 : '',
        "feature_compare4": req?.body?.feature_compare4 ? req?.body?.feature_compare4 : '',
        "feature_compare5": req?.body?.feature_compare5 ? req?.body?.feature_compare5 : '',
      }
      var sql = "update bussiness_news_ set bussiness_news_name=? , site_id=? , sequence=? , status=? , tenders_bussiness_news=? , no_of_tenders=? , projects_bussiness_news=? , no_of_projects=? , export_to_excel_bussiness_news=? , bussiness_news_cost=? , addition_user_cost=? , discount_bussiness_news=? , discount_percentage=? , date=? , feature_title3=? , feature_title1=? , feature_title2=? , feature_description1=? , feature_description2=? , feature_description3=? , feature_compare1=? , feature_compare2=? , feature_compare3=? , feature_compare4=? , feature_compare5=? where bussiness_news__id=?"
      var data1 = Object.values(obj)
      data1.push(req.params.id)
      con.query(sql, data1, (err, res) => {
        if (err)
          response.json(err);
        response.json(res)
      })
    }
    else {
      response.json("unauthorised user").status(401);
    }
  }
  catch (err) {
    return err
  }
}
const delete_bussiness_news = async (req, response) => {
  try {
    if (req.user.role_id == 2) {
      var sql = "delete from bussiness_news_ where bussiness_news__id=" + req.params.id
      con.query(sql, (err, res) => {
        if (err)
          response.json(err);
        response.json(res)
      })
    }
    else {
      response.json("unauthorised user").status(401);
    }
  }
  catch (err) {
    return err
  }
}
module.exports = { get_bussiness_news, get_bussiness_news_id, edit_bussiness_news, delete_bussiness_news, add_bussiness_news };