var con = require('../../../db/mysql')
var jwt = require('jsonwebtoken');
var generate_token = (id) => {
  var token = jwt.sign({ id: id }, 'shhhhh');
  return token
}
const login = async (req, response) => {
  var sql = `Select * from user where email='${req.body.email}' AND password='${req.body.password}'`
  console.log(sql, "aa")
  try {
    con.query(sql, (err, res) => {
      if (err)
        response.json(err);
      console.log(res)
      if (res[0]?.user_id) {
        response.json(generate_token(res[0]?.user_id))
      }
      else {
        response.json("Invalid user")
      }
    })
  }
  catch (err) {
    return err
  }
}
const get_user = async (req, response) => {//get all user
  if (req.user.role_id == 2) {
    var sql = "select * from user"
    try {
      con.query(sql, (err, res) => {
        if (err)
          response.json(err);
        response.json(res);
      })
    }
    catch (err) {
      return err
    }
  }
  else {
    req.send("unauthorised user").status(200);
  }
}
const get_user_by_id = async (req, response) => {//get particular user
  if (req.user.role_id == 2) {
    var sql = "select * from user where user_id=" + req.params.id
    try {
      con.query(sql, (err, res) => {
        if (err)
          response.json(err);
        response.json(res);
      })
    }
    catch (err) {
      return err
    }
  }
  else {
    req.send("unauthorised user").status(401);
  }
}
const complete_user = async (req, response) => {
  if (req?.user?.role_id == 2) {
    var sql = `select * from user inner join sector_of_user_schema on sector_of_user_schema.user_id=user.user_id where user.subscribed=1`
    try {
      con.query(sql, (err, res) => {
        if (err)
          response.json(err);
        response.json(res);
      })
    }
    catch (err) {
      return err
    }
  }
  else {
    console.log("aaa");
    response.json("unauthorised user").status(401);
  }
}
const pending_user = async (req, response) => {
  console.log(req.user, "aaa")
  if (req.user.role_id == 2) {
    var sql = `select * from user where user.subscribed=0`
    try {
      con.query(sql, (err, res) => {
        if (err)
          response.json(err);
        response.json(res);
      })
    }
    catch (err) {
      return err
    }
  }
  else {
    console.log("aaa");
    req.json("unauthorised user").status(401);
  }
}
const add_project = async (req, response) => {
  try {
    if (req.user.role_id == 2) {
      var sql = "INSERT INTO project_sector_schema(project_sector) VALUES ?"
      var data1 = [Object.values(req.body)]
      con.query(sql, [data1], (err, res) => {
        if (err)
          response.json(err);
        response.json(res);
      })
    }

    else {
      req.json("unauthorised user").status(401);
    }
  }
  catch (err) {
    return err
  }
}
const sub_add_project = async (req, response) => {
  try {
    if (req.user.role_id == 2) {
      var sql = "INSERT INTO sub_project_sector_schema(sub_roject_sector) VALUES ?"
      var data1 = [Object.values(req.body)]
      con.query(sql, [data1], (err, res) => {
        if (err)
          response.json(err);
        response.json(res);
      })
    }

    else {
      req.json("unauthorised user").status(401);
    }
  }
  catch (err) {
    return err
  }
}
const sub_sub_add_project = async (req, response) => {
  try {
    if (req.user.role_id == 2) {
      var sql = "INSERT INTO sub_project_sector_schema(sub_sub_roject_sector,sector_id,sub_sector_id) VALUES ?"
      var data1 = [Object.values(req.body)]
      con.query(sql, [data1], (err, res) => {
        if (err)
          response.json(err);
        response.json(res);
      })
    }

    else {
      req.json("unauthorised user").status(401);
    }
  }
  catch (err) {
    return err
  }
}

const get_project = async (req, response) => {
  try {
    if (req.user.role_id == 2) {
      var sql = "select * from sector_of_user_schema where user_id=" + req.params.id
      con.query(sql, (err, res) => {
        if (err)
          response.json(err);
        response.json(res);
      })
    }

    else {
      req.json("unauthorised user").status(401);
    }
  }
  catch (err) {
    return err
  }
}
const get_project_by_id = async (req, response) => {
  try {
    if (req.user.role_id == 2) {
      var sql = "select * from project_sector_schema where project_id=" + req.params.id
      con.query(sql, (err, res) => {
        if (err)
          response.json(err);
        response.json(res);
      })
    }

    else {
      req.json("unauthorised user").status(401);
    }
  }
  catch (err) {
    return err
  }
}
const get_sub_project_by_id = async (req, response) => {
  try {
    if (req.user.role_id == 2) {
      var sql = "select * from sub_project_sector_schema where sub_project_id=" + req.params.id
      con.query(sql, (err, res) => {
        if (err)
          response.json(err);
        response.json(res);
      })
    }

    else {
      req.json("unauthorised user").status(401);
    }
  }
  catch (err) {
    return err
  }
}
const get_sub_sub_project_by_id = async (req, response) => {
  try {
    if (req.user.role_id == 2) {
      var sql = "select * from sub_sub_project_sector_schema where sub_sub_project_id=" + req.params.id
      con.query(sql, (err, res) => {
        if (err)
          response.json(err);
        response.json(res);
      })
    }

    else {
      req.json("unauthorised user").status(401);
    }
  }
  catch (err) {
    return err
  }
}
const get_tender = async (req, response) => {
  try {
    if (req.user.role_id == 2) {
      var sql = "select * from tender_of_user_schema where user_id=" + req.params.id
      con.query(sql, (err, res) => {
        if (err)
          response.json(err);
        response.json(res);
      })
    }

    else {
      req.json("unauthorised user").status(401);
    }
  }
  catch (err) {
    return err
  }
}
const get_tender_by_id = async (req, response) => {
  try {
    if (req.user.role_id == 2) {
      var sql = "select * from tender_schema where tender_id=" + req.params.id
      con.query(sql, (err, res) => {
        if (err)
          response.json(err);
        response.json(res);
      })
    }

    else {
      req.json("unauthorised user").status(401);
    }
  }
  catch (err) {
    return err
  }
}
const get_sub_tender_by_id = async (req, response) => {
  try {
    if (req.user.role_id == 2) {
      var sql = "select * from sub_tender_schema where sub_tender_id=" + req.params.id
      con.query(sql, (err, res) => {
        if (err)
          response.json(err);
        response.json(res);
      })
    }

    else {
      req.json("unauthorised user").status(401);
    }
  }
  catch (err) {
    return err
  }
}
const what_we_do1 = async (req, response) => {
  try {
    
      var sql = "select * from what_we_do"
      con.query(sql, (err, res) => {
        if (err)
         return response.json(err);
        response.json(res);
      })
    

   
  }
  catch (err) {
    return err
  }
}
const what_we_do = async (req, response) => {
  try {
    console.log(req.body, "a")
    if (req.user.role_id == 2) {
      let obj = {
        what_we_do_heading: req?.body?.what_we_do_heading ? req?.body?.what_we_do_heading : '',
        what_we_do_description: req?.body?.what_we_do_description ? req?.body?.what_we_do_description : '',
        what_we_do_button_name: req?.body?.what_we_do_button_name ? req?.body?.what_we_do_button_name : '',
        what_we_do_button_link: req?.body?.what_we_do_button_link ? req?.body?.what_we_do_button_link : '',
        what_we_do_heading1: req?.body?.what_we_do_heading1 ? req?.body?.what_we_do_heading1 : '',
        what_we_do_heading2: req?.body?.what_we_do_heading2 ? req?.body?.what_we_do_heading2 : '',
        what_we_do_heading3: req?.body?.what_we_do_heading3 ? req?.body?.what_we_do_heading3 : '',
        what_we_do_heading4: req?.body?.what_we_do_heading4 ? req?.body?.what_we_do_heading4 : '',
        what_we_do_heading5: req?.body?.what_we_do_heading5 ? req?.body?.what_we_do_heading5 : '',
        what_we_do_heading6: req?.body?.what_we_do_heading6 ? req?.body?.what_we_do_heading6 : '',
        service_we_provide_heading: req?.body?.service_we_provide_heading ? req?.body?.service_we_provide_heading : '',
        service_we_provide_sub_heading: req?.body?.service_we_provide_sub_heading ? req?.body?.service_we_provide_sub_heading : '',
        service_we_provide_button_name: req?.body?.service_we_provide_button_name ? req?.body?.service_we_provide_button_name : '',
        service_we_provide_button_link: req?.body?.service_we_provide_button_link ? req?.body?.service_we_provide_button_link : '',
        third_section_heading1: req?.body?.third_section_heading1 ? req?.body?.third_section_heading1 : '',
        third_section_heading2: req?.body?.third_section_heading2 ? req?.body?.third_section_heading2 : '',
        third_section_heading3: req?.body?.third_section_heading3 ? req?.body?.third_section_heading3 : '',
        third_section_alt_tag: req?.body?.third_section_alt_tag ? req?.body?.third_section_alt_tag : '',
        third_section_alt_tag1: req?.body?.third_section_alt_tag1 ? req?.body?.third_section_alt_tag1 : '',
        third_section_alt_tag2: req?.body?.third_section_alt_tag2 ? req?.body?.third_section_alt_tag2 : '',
        insights_heading: req?.body?.insights_heading ? req?.body?.insights_heading : '',
        insights_button_name: req?.body?.insights_button_name ? req?.body?.insights_button_name : '',
        insights_button_link: req?.body?.insights_button_link ? req?.body?.insights_button_link : '',
        insights_description: req?.body?.insights_description ? req?.body?.insights_description : '',
        lead_and_insights_projects: req?.body?.lead_and_insights_projects ? req?.body?.lead_and_insights_projects : '',
        lead_and_insights_tenders: req?.body?.lead_and_insights_tenders ? req?.body?.lead_and_insights_tenders : '',
        lead_and_insights_contractors: req?.body?.lead_and_insights_contractors ? req?.body?.lead_and_insights_contractors : '',
        lead_and_insights_consultants: req?.body?.lead_and_insights_consultants ? req?.body?.lead_and_insights_consultants : '',
        industries_we_serve_heading: req?.body?.industries_we_serve_heading ? req?.body?.industries_we_serve_heading : '',
        industries_we_serve_descripion: req?.body?.industries_we_serve_descripion ? req?.body?.industries_we_serve_descripion : '',
        sectors_we_serve_heading: req?.body?.sectors_we_serve_heading ? req?.body?.sectors_we_serve_heading : '',
        sectors_we_serve_description: req?.body?.sectors_we_serve_description ? req?.body?.sectors_we_serve_description : '',
        sectors_we_serve_sector: req?.body?.sectors_we_serve_sector ? req?.body?.sectors_we_serve_sector : '',
        latest_news_heading: req?.body?.latest_news_heading ? req?.body?.sectors_we_serve_sector : '',
        latest_news_description: req?.body?.latest_news_description ? req?.body?.latest_news_description : '',
        blank: req?.body?.blank ? req?.body?.blank : '',
        seo_title: req?.body?.seo_title ? req?.body?.seo_title : '',
        seo_description: req?.body?.seo_description ? req?.body?.seo_description : '',
        seo_keyword: req?.body?.seo_keyword ? req?.body?.seo_keyword : '',
        seo_slug: req?.body?.seo_slug ? req?.body?.seo_slug : ''
      }
      var data1 = [Object.values(obj)]
      console.log(data1,"qq")
      var sql = "insert into what_we_do(what_we_do_heading,what_we_do_description,what_we_do_button_name,what_we_do_button_link,what_we_do_heading1,what_we_do_heading2,what_we_do_heading3,what_we_do_heading4,what_we_do_heading5,what_we_do_heading6,service_we_provide_heading,service_we_provide_sub_heading,service_we_provide_button_name,service_we_provide_button_link,third_section_heading1,third_section_heading2,third_section_heading3,third_section_alt_tag,third_section_alt_tag1,third_section_alt_tag2,insights_heading,insights_button_name,insights_button_link,insights_description,lead_and_insights_projects,lead_and_insights_tenders,lead_and_insights_contractors,lead_and_insights_consultants,industries_we_serve_heading,industries_we_serve_descripion,sectors_we_serve_heading,sectors_we_serve_description,sectors_we_serve_sector,latest_news_heading,latest_news_description,blank,seo_title,seo_description,seo_keyword,seo_slug) values ?"
      con.query(sql, [data1], (err, res) => {
        if (err)
        {
          console.log("sssqq")
         return response.json(err);
        }
        else
        {
          console.log("sssqq1233")
        response.json(res);
        }
      })
    }
    else {
      req.json("unauthorised user").status(401);
    }
  }
  catch (err) {
    return err
  }
}
module.exports = { login, what_we_do,what_we_do1, get_sub_tender_by_id, get_tender, get_tender_by_id, get_user, get_sub_sub_project_by_id, get_sub_project_by_id, get_user_by_id, pending_user, add_project, sub_add_project, sub_sub_add_project, complete_user, get_project, get_project_by_id };