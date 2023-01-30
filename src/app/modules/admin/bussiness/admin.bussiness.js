var con = require('../../../db/mysql')
var jwt = require('jsonwebtoken');
var generate_token = (id) => {
  var token = jwt.sign({ id: id }, 'shhhhh');
  return token
}
const login = async (req, response) => {
  var sql = `Select * from user where email='${req.body.email}' AND password='${req.body.password}'`
  try {
    con.query(sql, (err, res) => {
      if (err)
        response.json(err);
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
  try {
    var sql = "select * from user"
    if (req.user.role_id == 2) {
      con.query(sql, (err, res) => {
        if (err)
          response.json(err);
        response.json(res);
      })
    }
    else {
      req.send("unauthorised user").status(200);
    }
  }
  catch (err) {
    return err
  }
}
const get_user_by_id = async (req, response) => {//get particular user
  try {
    if (req.user.role_id == 2) {
      var sql = "select * from user where user_id=" + req.params.id
      con.query(sql, (err, res) => {
        if (err)
          response.json(err);
        response.json(res);
      })
    }
    else {
      req.send("unauthorised user").status(401);
    }
  }
  catch (err) {
    return err
  }
}
const complete_user = async (req, response) => {
  try {
    if (req?.user?.role_id == 2) {
      var sql = `select * from user inner join sector_of_user_schema on sector_of_user_schema.user_id=user.user_id where user.subscribed=1`
      con.query(sql, (err, res) => {
        if (err)
          response.json(err);
        response.json(res);
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
const pending_user = async (req, response) => {
  try {
    if (req.user.role_id == 2) {
      var sql = `select * from user where user.subscribed=0`
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
const add_project = async (req, response) => {
  try {
    if (req.user.role_id == 2) {
      var sql3 = `select project_sector from project_sector_schema where project_sector='${req.body.project_sector}'`
      con.query(sql3, (err, res5) => {
        if (err)
          return response.json(err);
        if (!(res5[0]?.project_sector == undefined)) {
          response.json("already exists")
        }
        else {
          var sql = `INSERT INTO project_sector_schema(project_sector)VALUE('${req.body.project_sector}')`
          con.query(sql, (err1, res1) => {
            if (err1)
              response.json(err1);
            var sql1 = "select * from site_details"
            con.query(sql1, (err, res2) => {
              if (err)
                response.json(err);
              res2.forEach((a) => {
                var sql2 = "insert into edit_project_sector(sector_name,site_id,sector_id) values ?"
                let obj2 = {
                  sector_name: req?.body?.project_sector ? req?.body?.project_sector : '',
                  site_id: a?.site_details_id,
                  sector_id: res1?.insertId ? res1?.insertId : '',
                }
                var data2 = [Object.values(obj2)]
                con.query(sql2, [data2], (err, res) => {
                  if (err)
                    response.json(err);
                })
              })
            })

          })
          response.json("inserted")
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
const sub_add_project = async (req, response) => {
  console.log(req.body,"ss")
  try {
    if (req.user.role_id == 2) {
      var sql3 = `select sub_project_sector from sub_project_sector_schema where sub_project_sector='${req.body.sub_project_sector}' && sector_id='${req.body.sector_id}'`
      con.query(sql3, (err, res5) => {
        console.log(res5, "aaa")
        if (err)
          return response.json(err);
        if (!(res5[0]?.sub_project_sector == undefined)) {
          response.json("already exists")
        }
        else {
          var sql = `INSERT INTO sub_project_sector_schema(sub_project_sector,sector_id)VALUE('${req.body.sub_project_sector}','${req.body.sector_id}')`
          con.query(sql, (err1, res1) => {
            if (err1)
              console.log(res1,"aaa")
            var sql1 = "select * from site_details"
            con.query(sql1, (err, res2) => {
              if (err)
                response.json(err);
              res2.forEach((a) => {
                var sql2 = "insert into edit_project_sub_sector(sub_sector_name,site_id,sub_sector_id,sector_id) values ?"
                let obj2 = {
                  sub_sector_name:req?.body?.sub_project_sector?req?.body?.sub_project_sector : '',
                  site_id: a?.site_details_id,
                  sub_sector_id: res1?.insertId ? res1?.insertId : '',
                  sector_id: req?.body?.sector_id ? req?.body?.sector_id : ''
                }
                var data2 = [Object.values(obj2)]
                con.query(sql2, [data2], (err, res) => {
                  if (err)
                    response.json(err);
                })
              })
            })

          })
          response.json("inserted")
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
const sub_sub_add_project = async (req, response) => {
  try {
    if (req.user.role_id == 2) {
      var sql3 = `select sub_sub_project_sector from sub_sub_project_sector_schema where sub_sub_project_sector='${req.body.sub_sub_project_sector}' && sub_sector_id='${req.body.sub_sector_id}'`
      con.query(sql3, (err, res5) => {
        if (err)
          return response.json(err);
        if (!(res5[0]?.sub_sub_project_sector == undefined)) {
          response.json("already exists")
        }
        else {
          var sql = `INSERT INTO sub_sub_project_sector_schema(sub_sub_project_sector,sub_sector_id)VALUE('${req.body.sub_sub_project_sector}','${req.body.sub_sector_id}')`
          con.query(sql, (err1, res1) => {
            if (err1)
            response.json(err1);
            var sql1 = "select * from site_details"
            con.query(sql1, (err, res2) => {
              if (err)
                response.json(err);
                console.group(res2,"ss")
              res2.forEach((a) => {
                var sql2 = "insert into editproduct(sub_sub_sector_name,site_id,sub_sector_id) values ?"
                let obj2 = {
                  sub_sub_sector_name: req?.body?.sub_sub_project_sector ? req?.body?.sub_sub_project_sector : '',
                  site_id: a?.site_details_id,
                  sub_sector_id: req?.body?.sub_sector_id ? req?.body?.sub_sector_id : ''
                }
                console.log(obj,"aa")
                var data2 = [Object.values(obj2)]
                con.query(sql2, [data2], (err, res) => {
                  if (err)
                    response.json(err);
                })
              })
            })

          })
          response.json("inserted")
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
const what_we_do3 = async (req, response) => {
  try {
    var sql = "select * from what_we_do where what_we_do_id=" + req.params.id
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
        latest_news_heading: req?.body?.latest_news_heading ? req?.body?.latest_news_heading : '',
        latest_news_description: req?.body?.latest_news_description ? req?.body?.latest_news_description : '',
        blank: req?.body?.blank ? req?.body?.blank : '',
        seo_title: req?.body?.seo_title ? req?.body?.seo_title : '',
        seo_description: req?.body?.seo_description ? req?.body?.seo_description : '',
        seo_keyword: req?.body?.seo_keyword ? req?.body?.seo_keyword : '',
        seo_slug: req?.body?.seo_slug ? req?.body?.seo_slug : '',
        what_we_do_image1: req?.body?.what_we_do_image1 ? req?.body?.what_we_do_image1 : '',
        what_we_do_image2: req?.body?.what_we_do_image2 ? req?.body?.what_we_do_image2 : '',
        what_we_do_image3: req?.body?.what_we_do_image3 ? req?.body?.what_we_do_image3 : '',
        what_we_do_image4: req?.body?.what_we_do_image4 ? req?.body?.what_we_do_image4 : '',
        what_we_do_image5: req?.body?.what_we_do_image5 ? req?.body?.what_we_do_image5 : '',
        what_we_do_image6: req?.body?.what_we_do_image6 ? req?.body?.what_we_do_image6 : '',
        third_section_image1: req?.body?.third_section_image1 ? req?.body?.third_section_image1 : '',
        third_section_image2: req?.body?.third_section_image2 ? req?.body?.third_section_image2 : '',
        third_section_image3: req?.body?.third_section_image3 ? req?.body?.third_section_image3 : '',
        third_section_description1: req?.body?.third_section_description1 ? req?.body?.third_section_description1 : '',
        third_section_description2: req?.body?.third_section_description2 ? req?.body?.third_section_description2 : '',
        third_section_description3: req?.body?.third_section_description3 ? req?.body?.third_section_description3 : '',
      }
      var data1 = [Object.values(obj)]
      var sql = "insert into what_we_do(what_we_do_heading,what_we_do_description,what_we_do_button_name,what_we_do_button_link,what_we_do_heading1,what_we_do_heading2,what_we_do_heading3,what_we_do_heading4,what_we_do_heading5,what_we_do_heading6,service_we_provide_heading,service_we_provide_sub_heading,service_we_provide_button_name,service_we_provide_button_link,third_section_heading1,third_section_heading2,third_section_heading3,third_section_alt_tag,third_section_alt_tag1,third_section_alt_tag2,insights_heading,insights_button_name,insights_button_link,insights_description,lead_and_insights_projects,lead_and_insights_tenders,lead_and_insights_contractors,lead_and_insights_consultants,industries_we_serve_heading,industries_we_serve_descripion,sectors_we_serve_heading,sectors_we_serve_description,sectors_we_serve_sector,latest_news_heading,latest_news_description,blank,seo_title,seo_description,seo_keyword,seo_slug, what_we_do_image1, what_we_do_image2, what_we_do_image3, what_we_do_image4, what_we_do_image5, what_we_do_image6,third_section_image1,third_section_image2,third_section_image3,third_section_description1,third_section_description2,third_section_description3) values ?"
      con.query(sql, [data1], (err, res) => {
        if (err) {
          return response.json(err);
        }
        else {
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
const what_we_do2 = async (req, response) => {
  try {
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
        latest_news_heading: req?.body?.latest_news_heading ? req?.body?.latest_news_heading : '',
        latest_news_description: req?.body?.latest_news_description ? req?.body?.latest_news_description : '',
        blank: req?.body?.blank ? req?.body?.blank : '',
        seo_title: req?.body?.seo_title ? req?.body?.seo_title : '',
        seo_description: req?.body?.seo_description ? req?.body?.seo_description : '',
        seo_keyword: req?.body?.seo_keyword ? req?.body?.seo_keyword : '',
        seo_slug: req?.body?.seo_slug ? req?.body?.seo_slug : '',
        what_we_do_image1: req?.body?.what_we_do_image1 ? req?.body?.what_we_do_image1 : '',
        what_we_do_image2: req?.body?.what_we_do_image2 ? req?.body?.what_we_do_image2 : '',
        what_we_do_image3: req?.body?.what_we_do_image3 ? req?.body?.what_we_do_image3 : '',
        what_we_do_image4: req?.body?.what_we_do_image4 ? req?.body?.what_we_do_image4 : '',
        what_we_do_image5: req?.body?.what_we_do_image5 ? req?.body?.what_we_do_image5 : '',
        what_we_do_image6: req?.body?.what_we_do_image6 ? req?.body?.what_we_do_image6 : '',
        third_section_image1: req?.body?.third_section_image1 ? req?.body?.third_section_image1 : '',
        third_section_image2: req?.body?.third_section_image2 ? req?.body?.third_section_image2 : '',
        third_section_image3: req?.body?.third_section_image3 ? req?.body?.third_section_image3 : '',
        third_section_description1: req?.body?.third_section_description1 ? req?.body?.third_section_description1 : '',
        third_section_description2: req?.body?.third_section_description2 ? req?.body?.third_section_description2 : '',
        third_section_description3: req?.body?.third_section_description3 ? req?.body?.third_section_description3 : '',
      }
      var data1 = Object.values(obj)
      data1.push(req.params.id)
      var sql = "update what_we_do SET what_we_do_heading=? , what_we_do_description=? , what_we_do_button_name=? , what_we_do_button_link=?  ,what_we_do_heading1=? , what_we_do_heading2=? , what_we_do_heading3=? , what_we_do_heading4=? , what_we_do_heading5=? , what_we_do_heading6=? , service_we_provide_heading=? , service_we_provide_sub_heading=? , service_we_provide_button_name=? , service_we_provide_button_link=? , third_section_heading1=? , third_section_heading2=? , third_section_heading3=? , third_section_alt_tag=? , third_section_alt_tag1=? , third_section_alt_tag2=? , insights_heading=? , insights_button_name=? , insights_button_link=? , insights_description=? , lead_and_insights_projects=? , lead_and_insights_tenders=? , lead_and_insights_contractors=? , lead_and_insights_consultants=? , industries_we_serve_heading=? , industries_we_serve_descripion=? , sectors_we_serve_heading=? , sectors_we_serve_description=? , sectors_we_serve_sector=? , latest_news_heading=? , latest_news_description=? , blank=? , seo_title=? , seo_description=? , seo_keyword=? , seo_slug=? , what_we_do_image1=? , what_we_do_image2=?, what_we_do_image3=?, what_we_do_image4=?, what_we_do_image5=?, what_we_do_image6=? , third_section_image1=? , third_section_image2=? , third_section_image3=? , third_section_description1=? , third_section_description2=? , third_section_description3=? where what_we_do_id=?"
      con.query(sql, data1, (err, res) => {
        if (err)
          return response.json(err);
        response.json({ status: 'success', data: res })

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
const add_sub_admin = async (req, response) => {//get all user
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
const add_tender = async (req, response) => {
  if (req.user.role_id == 2) {
    try {
      if (req.user.role_id == 2) {
        var sql = "INSERT INTO tender_schema(tender) VALUES ?"
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
}
const add_sub_tender = async (req, response) => {
  try {
    if (req.user.role_id == 2) {
      var sql = "INSERT INTO sub_tender_schema(sub_tender,tender_id) VALUES ?"
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
const edit_project_sector = async (req, response) => {
  try {
    if (req.user.role_id == 2) {
      let obj = {
        sector_name: req?.body?.sector_name ? req?.body?.sector_name : " ",
        alt_tag: req?.body?.alt_tag ? req?.body?.alt_tag : " ",
        listing_page_description: req?.body?.listing_page_description ? req?.body?.listing_page_description : " ",
        listing_page_image: req?.body?.listing_page_image ? req?.body?.listing_page_image : " ",
        banner_heading: req?.body?.banner_heading ? req?.body?.banner_heading : " ",
        banner_sub_heading: req?.body?.banner_sub_heading ? req?.body?.banner_sub_heading : " ",
        section_heading: req?.body?.section_heading ? req?.body?.section_heading : " ",
        short_description: req?.body?.short_description ? req?.body?.short_description : " ",
        detailed_description: req?.body?.detailed_description ? req?.body?.detailed_description : " ",
        inner_page_sector_name: req?.body?.inner_page_sector_name ? req?.body?.inner_page_sector_name : " ",
        inner_page_sector_select: req?.body?.inner_page_sector_select ? req?.body?.inner_page_sector_select : " ",
        inner_page_detailed_description: req?.body?.inner_page_detailed_description ? req?.body?.inner_page_detailed_description : " ",
        project_type1: req?.body?.project_type1 ? req?.body?.project_type1 : " ",
        project_type1_title: req?.body?.project_type1_title ? req?.body?.project_type1_title : " ",
        project_type1_description: req?.body?.project_type1_description ? req?.body?.project_type1_description : " ",
        project_type2: req?.body?.project_type2 ? req?.body?.project_type2 : " ",
        project_type2_title: req?.body?.project_type2_title ? req?.body?.project_type2_title : " ",
        project_type2_description: req?.body?.project_type2_description ? req?.body?.project_type2_description : " ",
        graph: req?.body?.graph ? req?.body?.graph : " ",
        graph_description: req?.body?.graph_description ? req?.body?.graph_description : " ",
        industry_report: req?.body?.industry_report ? req?.body?.industry_report : "0",
        lastest_news: req?.body?.lastest_news ? req?.body?.lastest_news : " ",
        lastest_description: req?.body?.lastest_description ? req?.body?.lastest_description : " ",
        seo_title: req?.body?.seo_title ? req?.body?.seo_title : " ",
        seo_description: req?.body?.seo_description ? req?.body?.seo_description : " ",
        seo_keyword: req?.body?.seo_keyword ? req?.body?.seo_keyword : " ",
        seo_slug: req?.body?.seo_slug ? req?.body?.seo_slug : " ",
        call_to_action_heading: req?.body?.call_to_action_heading ? req?.body?.call_to_action_heading : " ",
        call_to_action_description: req?.body?.call_to_action_description ? req?.body?.call_to_action_description : " ",
        call_to_action_button_name: req?.body?.call_to_action_button_name ? req?.body?.call_to_action_button_name : " ",
        call_to_action_button_link: req?.body?.call_to_action_button_link ? req?.body?.call_to_action_button_link : " ",
        call_to_action_bar: req?.body?.call_to_action_bar ? req?.body?.call_to_action_bar : "0",
        site_id: req?.body?.site_id ? req?.body?.site_id : "",
        graph_check: req?.body?.graph_check ? req?.body?.graph_check : "0",
        inner_page_check: req?.body?.inner_page_check ? req?.body?.inner_page_check : "0"
      }
      var data1 = [Object.values(obj)]
      var sql = "INSERT INTO edit_project_sector(sector_name,alt_tag,listing_page_description,listing_page_image,banner_heading,banner_sub_heading,section_heading,short_description,detailed_description,inner_page_sector_name,inner_page_sector_select,inner_page_detailed_description,project_type1,project_type1_title,project_type1_description,project_type2,project_type2_title,project_type2_description,graph,graph_description,industry_report,lastest_news,lastest_description,seo_title,seo_description,seo_keyword,seo_slug,call_to_action_heading,call_to_action_description,call_to_action_button_name,call_to_action_button_link,call_to_action_bar,site_id,graph_check,inner_page_check) VALUES ?"
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
const edit_project_sector1 = async (req, response) => {
  try {
    if (req.user.role_id == 2) {
      var sql3 = `select soft_delete from project_sector_schema where project_id='${req.query.sector_id}'`
      con.query(sql3, (err, res5) => {
        if (err)
          return response.json(err);
        if (res5[0]?.soft_delete == '1' || res5[0]?.soft_delete == 1) {
          response.json("already deleted")
        }
        else {
          let obj = {
            sector_name: req?.body?.sector_name ? req?.body?.sector_name : " ",
            alt_tag: req?.body?.alt_tag ? req?.body?.alt_tag : " ",
            listing_page_description: req?.body?.listing_page_description ? req?.body?.listing_page_description : " ",
            listing_page_image: req?.body?.listing_page_image ? req?.body?.listing_page_image : " ",
            banner_heading: req?.body?.banner_heading ? req?.body?.banner_heading : " ",
            banner_sub_heading: req?.body?.banner_sub_heading ? req?.body?.banner_sub_heading : " ",
            section_heading: req?.body?.section_heading ? req?.body?.section_heading : " ",
            short_description: req?.body?.short_description ? req?.body?.short_description : " ",
            detailed_description: req?.body?.detailed_description ? req?.body?.detailed_description : " ",
            inner_page_sector_name: req?.body?.inner_page_sector_name ? req?.body?.inner_page_sector_name : " ",
            inner_page_sector_select: req?.body?.inner_page_sector_select ? req?.body?.inner_page_sector_select : " ",
            inner_page_detailed_description: req?.body?.inner_page_detailed_description ? req?.body?.inner_page_detailed_description : " ",
            project_type1: req?.body?.project_type1 ? req?.body?.project_type1 : " ",
            project_type1_title: req?.body?.project_type1_title ? req?.body?.project_type1_title : " ",
            project_type1_description: req?.body?.project_type1_description ? req?.body?.project_type1_description : " ",
            project_type2: req?.body?.project_type2 ? req?.body?.project_type2 : " ",
            project_type2_title: req?.body?.project_type2_title ? req?.body?.project_type2_title : " ",
            project_type2_description: req?.body?.project_type2_description ? req?.body?.project_type2_description : " ",
            graph: req?.body?.graph ? req?.body?.graph : " ",
            graph_description: req?.body?.graph_description ? req?.body?.graph_description : " ",
            industry_report: req?.body?.industry_report ? req?.body?.industry_report : "0",
            lastest_news: req?.body?.lastest_news ? req?.body?.lastest_news : " ",
            lastest_description: req?.body?.lastest_description ? req?.body?.lastest_description : " ",
            seo_title: req?.body?.seo_title ? req?.body?.seo_title : " ",
            seo_description: req?.body?.seo_description ? req?.body?.seo_description : " ",
            seo_keyword: req?.body?.seo_keyword ? req?.body?.seo_keyword : " ",
            seo_slug: req?.body?.seo_slug ? req?.body?.seo_slug : " ",
            call_to_action_heading: req?.body?.call_to_action_heading ? req?.body?.call_to_action_heading : " ",
            call_to_action_description: req?.body?.call_to_action_description ? req?.body?.call_to_action_description : " ",
            call_to_action_button_name: req?.body?.call_to_action_button_name ? req?.body?.call_to_action_button_name : " ",
            call_to_action_button_link: req?.body?.call_to_action_button_link ? req?.body?.call_to_action_button_link : " ",
            call_to_action_bar: req?.body?.call_to_action_bar ? req?.body?.call_to_action_bar : "0",
            site_id: req?.body?.site_id ? req?.body?.site_id : req.query.site_id,
            graph_check: req?.body?.graph_check ? req?.body?.graph_check : "0",
            inner_page_check: req?.body?.inner_page_check ? req?.body?.inner_page_check : "0",
            publish: req?.body?.publish ? req?.body?.publish : "0",
            sector_id: req?.body?.sector_id ? req?.body?.sector_id : req.query.sector_id
          }
          var data1 = Object.values(obj)
          data1.push(req.query.sector_id)
          data1.push(req.query.site_id)
          var sql = "update edit_project_sector set sector_name=? , alt_tag=? , listing_page_description=? , listing_page_image=? , banner_heading=? , banner_sub_heading=? , section_heading=? , short_description=? , detailed_description=? , inner_page_sector_name=? , inner_page_sector_select=? , inner_page_detailed_description=? , project_type1=? , project_type1_title=? , project_type1_description=? , project_type2=? , project_type2_title=? , project_type2_description=? , graph=? , graph_description=? , industry_report=? , lastest_news=? , lastest_description=? , seo_title=? , seo_description=? , seo_keyword=? , seo_slug=? , call_to_action_heading=? , call_to_action_description=? , call_to_action_button_name=? , call_to_action_button_link=? , call_to_action_bar=? , site_id=? , graph_check=? , inner_page_check=?, publish=? , sector_id=? where sector_id=? && site_id=?"
          con.query(sql, data1, (err, res) => {
            if (err)
              response.json(err);
            response.json(res);
          })
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
const edit_project_sector2 = async (req, response) => {
  try {
    var sql3 = `select soft_delete from project_sector_schema where project_id='${req.query.sector_id}'`
      con.query(sql3, (err, res5) => {
        if (err)
          return response.json(err);
        if (res5[0]?.soft_delete == '1' || res5[0]?.soft_delete == 1) {
          response.json("already deleted")
        }
        else
        {
          var sql = "select * from edit_project_sector inner join project_sector_schema on project_sector_schema.project_id=edit_project_sector.sector_id inner join site_details on site_details.site_details_id=edit_project_sector.site_id  where edit_project_sector.soft_delete='0' && edit_project_sector.sector_id=" + req.query.sector_id + "&& edit_project_sector.site_id=" + req.query.site_id
        con.query(sql, (err, res) => {
          if (err)
            return response.json(err);
          response.json(res);
        })
        }
      })
  }
  catch (err) {
    return err
  }
}
const edit_project_sector3 = async (req, response) => {
  try {
    var sql = "select * from edit_project_sector where soft_delete='0'"
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
const update_project = async (req, response) => {
  try {
    let obj = {
      project_sector: req?.body?.project_sector ? req?.body?.project_sector : ""
    }
    var data1 = Object.values(obj)
    data1.push(req.params.id)
    var sql = "update project_sector_schema set project_sector=? where project_id=?"
    con.query(sql, data1, (err, res) => {
      if (err)
        return response.json(err);
      response.json(res);
    })
  }
  catch (err) {
    return err
  }
}
const update_sub_project = async (req, response) => {
  try {
    let obj = {
      sub_project_sector: req?.body?.sub_project_sector ? req?.body?.sub_project_sector : "",
      sector_id: req?.body?.sector_id ? req?.body?.sector_id : ""
    }
    var data1 = Object.values(obj)
    data1.push(req.params.id)
    var sql = "update sub_project_sector_schema set sub_project_sector=? , sector_id=? where sub_project_id=?"
    con.query(sql, data1, (err, res) => {
      if (err)
        return response.json(err);
      response.json(res);
    })
  }
  catch (err) {
    return err
  }
}
const update_sub_sub_project = async (req, response) => {
  try {
    let obj = {
      sub_sub_project_sector: req?.body?.sub_sub_project_sector ? req?.body?.sub_sub_project_sector : "",
      sub_sector_id: req?.body?.sub_sector_id ? req?.body?.sub_sector_id : ""
    }
    var data1 = Object.values(obj)
    data1.push(req.params.id)
    var sql = "update sub_sub_project_sector_schema set sub_sub_project_sector=? , sub_sector_id=? where sub_sub_project_id=?"
    con.query(sql, data1, (err, res) => {
      if (err)
        return response.json(err);
      response.json(res);
    })
  }
  catch (err) {
    return err
  }
}
const update_tender = async (req, response) => {
  try {
    let obj = {
      tender: req?.body?.tender ? req?.body?.tender : "",
    }
    var data1 = Object.values(obj)
    data1.push(req.params.id)
    var sql = "update tender_schema set tender=? where tender_id=?"
    con.query(sql, data1, (err, res) => {
      if (err)
        return response.json(err);
      response.json(res);
    })
  }
  catch (err) {
    return err
  }
}
const update_sub_tender = async (req, response) => {
  try {
    let obj = {
      sub_tender: req?.body?.sub_tender ? req?.body?.sub_tender : "",
      tender_id: req?.body?.tender_id ? req?.body?.tender_id : "",
    }
    var data1 = Object.values(obj)
    data1.push(req.params.id)
    var sql = "update sub_tender_schema set sub_tender=? , tender_id=?  where sub_tender_id=?"
    con.query(sql, data1, (err, res) => {
      if (err)
        return response.json(err);
      response.json(res);
    })
  }
  catch (err) {
    return err
  }
}
const delete_sub_tender = async (req, response) => {
  try {
    var sql = "DELETE FROM sub_tender_schema where sub_tender_id=" + req.params.id
    con.query(sql, (err, res) => {
      if (err)
        return response.json(err);
      var sql1 = "DELETE FROM tender_of_user_schema where sub_tender_id=" + req.params.id
      con.query(sql1, (err, res1) => {
        if (err)
          return response.json(err);
        response.json(res1);
      })
    })
  }
  catch (err) {
    return err
  }
}
const delete_tender = async (req, response) => {
  try {
    var sql1 = "DELETE FROM tender_schema where tender_id=" + req.params.id
    con.query(sql1, (err, res) => {
      if (err)
        return response.json(err);
      var sql = "DELETE FROM sub_tender_schema where tender_id=" + req.params.id
      con.query(sql, (err, res1) => {
        if (err)
          return response.json(err);
        var sql2 = "DELETE FROM tender_of_user_schema where tender_id=" + req.params.id
        con.query(sql2, (err, res1) => {
          if (err)
            return response.json(err);
          response.json(res1);
        })
      })
    })
  }
  catch (err) {
    return err
  }
}
const delete_project = async (req, response) => {
  try {
    var sql1 = "DELETE FROM project_sector_schema where project_id=" + req.params.id
    con.query(sql1, (err, res) => {
      if (err)
        return response.json(err);
      var sql3 = "DELETE FROM sub_sub_project_sector_schema where sub_sector_id IN (select sub_project_id as sub_sector_id from sub_project_sector_schema where sector_id=" + req.params.id + ")"
      con.query(sql3, (err, res4) => {
        if (err)
          return response.json(err);
        response.json(res4);
      })
      var sql = "DELETE FROM sub_project_sector_schema where sector_id=" + req.params.id
      con.query(sql, (err, res1) => {
        if (err)
          return response.json(err);
        var sql5 = "DELETE FROM sector_of_user_schema where sector_id=" + req.params.id
        con.query(sql5, (err, res4) => {
          if (err)
            return response.json(err);
          response.json(res4);
        })
      })
    })
  }
  catch (err) {
    return err
  }
}
const delete_sub_project = async (req, response) => {
  try {
    var sql1 = "DELETE FROM sub_project_sector_schema where sub_project_id=" + req.params.id
    con.query(sql1, (err, res) => {
      if (err)
        return response.json(err);
      var sql = "DELETE FROM sub_sub_project_sector_schema where sub_sector_id=" + req.params.id
      con.query(sql, (err, res1) => {
        if (err)
          return response.json(err);
        var sql5 = "DELETE FROM sector_of_user_schema where sub_sector_id=" + req.params.id
        con.query(sql5, (err, res2) => {
          if (err)
            return response.json(err);
          response.json(res2)
        })
      })
    })
  }
  catch (err) {
    return err
  }
}
const delete_sub_sub_project = async (req, response) => {
  try {
    var sql = "DELETE FROM sub_sub_project_sector_schema where sub_sub_project_id=" + req.params.id
    con.query(sql, (err, res1) => {
      if (err)
        return response.json(err);
      var sql5 = "DELETE FROM sector_of_user_schema where sub_sub_sector_id=" + req.params.id
      con.query(sql5, (err, res2) => {
        if (err)
          return response.json(err);
        response.json(res2)
      })
    })
  }
  catch (err) {
    return err
  }
}
const edit_project_sub_sector = async (req, response) => {
  try {
    if (req.user.role_id == 2) {
      let obj = {
        alt_tag: req?.body?.alt_tag ? req?.body?.alt_tag : " ",
        page_image: req?.body?.page_image ? req?.body?.page_image : " ",
        banner_heading: req?.body?.banner_heading ? req?.body?.banner_heading : " ",
        banner_sub_heading: req?.body?.banner_sub_heading ? req?.body?.banner_sub_heading : " ",
        section_heading: req?.body?.section_heading ? req?.body?.section_heading : " ",
        short_description: req?.body?.short_description ? req?.body?.short_description : " ",
        detailed_description: req?.body?.detailed_description ? req?.body?.detailed_description : " ",
        product_sector_name: req?.body?.product_sector_name ? req?.body?.product_sector_name : " ",
        product_sector_select: req?.body?.product_sector_select ? req?.body?.product_sector_select : " ",
        product_detailed_description: req?.body?.product_detailed_description ? req?.body?.product_detailed_description : " ",
        project_type1: req?.body?.project_type1 ? req?.body?.project_type1 : " ",
        project_type1_title: req?.body?.project_type1_title ? req?.body?.project_type1_title : " ",
        project_type1_description: req?.body?.project_type1_description ? req?.body?.project_type1_description : " ",
        project_type2: req?.body?.project_type2 ? req?.body?.project_type2 : " ",
        project_type2_title: req?.body?.project_type2_title ? req?.body?.project_type2_title : " ",
        project_type2_description: req?.body?.project_type2_description ? req?.body?.project_type2_description : " ",
        lastest_sub_title: req?.body?.lastest_sub_title ? req?.body?.lastest_sub_title : " ",
        seo_title: req?.body?.seo_title ? req?.body?.seo_title : " ",
        seo_description: req?.body?.seo_description ? req?.body?.seo_description : " ",
        seo_keyword: req?.body?.seo_keyword ? req?.body?.seo_keyword : " ",
        seo_slug: req?.body?.seo_slug ? req?.body?.seo_slug : " ",
        call_to_action_sub_title: req?.body?.call_to_action_sub_title ? req?.body?.call_to_action_sub_title : " ",
        call_to_action_button_name: req?.body?.call_to_action_button_name ? req?.body?.call_to_action_button_name : " ",
        call_to_action_button_link: req?.body?.call_to_action_button_link ? req?.body?.call_to_action_button_link : " ",
        call_to_action_bar: req?.body?.call_to_action_bar ? req?.body?.call_to_action_bar : "0",
        publish: req?.body?.publish ? req?.body?.publish : "0",
        sector_id: req?.body?.sector_id ? req?.body?.sector_id : req.query.sector_id,
        sub_sector_name: req?.body?.sub_sector_name ? req?.body?.sub_sector_name : "",
        sub_sector_id: req?.body?.sub_sector_id ? req?.body?.sub_sector_id : req.query.sub_sector_id,
      }
      var data1 = [Object.values(obj)]
      var sql = "INSERT INTO edit_project_sub_sector(alt_tag,page_image,banner_heading,banner_sub_heading,section_heading,short_description,detailed_description,product_sector_name,product_sector_select,product_detailed_description,project_type1,project_type1_title,project_type1_description,project_type2,project_type2_title,project_type2_description,lastest_sub_title,seo_title,seo_description,seo_keyword,seo_slug,call_to_action_sub_title,call_to_action_button_name,call_to_action_button_link,call_to_action_bar,publish,sector_id,sub_sector_name) VALUES ?"
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
const edit_project_sub_sector1 = async (req, response) => {
  try {
    if (req.user.role_id == 2) {
      var sql3 = `select soft_delete from sub_project_sector_schema where sub_project_id='${req.query.sub_sector_id}'`
      con.query(sql3, (err, res5) => {
        if (err)
          return response.json(err);
        console.log(res5, "aa")
        if (res5[0]?.soft_delete == '1' || res5[0]?.soft_delete == 1) {
          response.json("already exists")
        }
        else {
          let obj = {
            alt_tag: req?.body?.alt_tag ? req?.body?.alt_tag : " ",
            page_image: req?.body?.page_image ? req?.body?.page_image : " ",
            banner_heading: req?.body?.banner_heading ? req?.body?.banner_heading : " ",
            banner_sub_heading: req?.body?.banner_sub_heading ? req?.body?.banner_sub_heading : " ",
            section_heading: req?.body?.section_heading ? req?.body?.section_heading : " ",
            short_description: req?.body?.short_description ? req?.body?.short_description : " ",
            detailed_description: req?.body?.detailed_description ? req?.body?.detailed_description : " ",
            product_sector_name: req?.body?.product_sector_name ? req?.body?.product_sector_name : " ",
            product_sector_select: req?.body?.product_sector_select ? req?.body?.product_sector_select : " ",
            product_detailed_description: req?.body?.product_detailed_description ? req?.body?.product_detailed_description : " ",
            project_type1: req?.body?.project_type1 ? req?.body?.project_type1 : " ",
            project_type1_title: req?.body?.project_type1_title ? req?.body?.project_type1_title : " ",
            project_type1_description: req?.body?.project_type1_description ? req?.body?.project_type1_description : " ",
            project_type2: req?.body?.project_type2 ? req?.body?.project_type2 : " ",
            project_type2_title: req?.body?.project_type2_title ? req?.body?.project_type2_title : " ",
            project_type2_description: req?.body?.project_type2_description ? req?.body?.project_type2_description : " ",
            lastest_sub_title: req?.body?.lastest_sub_title ? req?.body?.lastest_sub_title : " ",
            seo_title: req?.body?.seo_title ? req?.body?.seo_title : " ",
            seo_description: req?.body?.seo_description ? req?.body?.seo_description : " ",
            seo_keyword: req?.body?.seo_keyword ? req?.body?.seo_keyword : " ",
            seo_slug: req?.body?.seo_slug ? req?.body?.seo_slug : " ",
            call_to_action_sub_title: req?.body?.call_to_action_sub_title ? req?.body?.call_to_action_sub_title : " ",
            call_to_action_button_name: req?.body?.call_to_action_button_name ? req?.body?.call_to_action_button_name : " ",
            call_to_action_button_link: req?.body?.call_to_action_button_link ? req?.body?.call_to_action_button_link : " ",
            call_to_action_bar: req?.body?.call_to_action_bar ? req?.body?.call_to_action_bar : "0",
            publish: req?.body?.publish ? req?.body?.publish : "0",
            site_id: req?.body?.site_id ? req?.body?.site_id : req.query.site_id,
            sub_sector_id: req?.body?.sub_sector_id ? req?.body?.sub_sector_id : req.query.sub_sector_id,
          }
          var data1 = Object.values(obj)
          data1.push(req.query.site_id)
          data1.push(req.query.sub_sector_id)
          var sql = "update edit_project_sub_sector set alt_tag=? , page_image=? , banner_heading=? , banner_sub_heading=? , section_heading=? , short_description=? , detailed_description=? , product_sector_name=? , product_sector_select=? , product_detailed_description=? , project_type1=? , project_type1_title=? , project_type1_description=? , project_type2=? , project_type2_title=? , project_type2_description=? , lastest_sub_title=? , seo_title=? , seo_description=? , seo_keyword=? , seo_slug=? , call_to_action_sub_title=? , call_to_action_button_name=? , call_to_action_button_link=? , call_to_action_bar=? , publish=? , site_id=? , sub_sector_id=? where site_id=? && sub_sector_id=?"
          con.query(sql, data1, (err, res) => {
            if (err)
              response.json(err);
            response.json(res);
          })
        }
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
const edit_project_sub_sector2 = async (req, response) => {
  try {
    var sql3 = `select soft_delete from sub_project_sector_schema where sub_project_id='${req.query.sub_sector_id}'`
    con.query(sql3, (err, res5) => {
      if (err)
        return response.json(err);
      console.log(res5, "aa")
      if (res5[0]?.soft_delete == '1' || res5[0]?.soft_delete == 1) {
        response.json("already deleted")
      }
      else {
        var sql = "select * from edit_project_sub_sector inner join sub_project_sector_schema on sub_project_sector_schema.sub_project_id=edit_project_sub_sector.sub_sector_id inner join site_details on site_details.site_details_id=edit_project_sub_sector.site_id where edit_project_sub_sector.soft_delete='0' && edit_project_sub_sector.sub_sector_id=" + req.query.sub_sector_id + " && edit_project_sub_sector.site_id=" + req.query.site_id
        con.query(sql, (err, res) => {
          if (err)
            return response.json(err);
          response.json(res);
        })
      }
    })
  }
  catch (err) {
    return err
  }
}
const edit_project_sub_sector3 = async (req, response) => {
  try {
    var sql = "select * from edit_project_sub_sector"
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
const edit_project_sub_sector4 = async (req, response) => {
  try {
    var sql = "update edit_project_sub_sector set where edit_project_sub_sector_id=" + req.params.id
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
const search_tender = async (req, response) => {
  try {
    var sql = `select * from tender_schema where tender LIKE '%${req.params.id}%'`
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
const product_level = async (req, response) => {
  try {
    if (req.user.role_id == 2) {
      let obj = {
        alt_tag: req?.body?.alt_tag ? req?.body?.alt_tag : " ",
        page_image: req?.body?.page_image ? req?.body?.page_image : " ",
        banner_heading: req?.body?.banner_heading ? req?.body?.banner_heading : " ",
        banner_sub_heading: req?.body?.banner_sub_heading ? req?.body?.banner_sub_heading : " ",
        section_heading: req?.body?.section_heading ? req?.body?.section_heading : " ",
        short_description: req?.body?.short_description ? req?.body?.short_description : " ",
        detailed_description: req?.body?.detailed_description ? req?.body?.detailed_description : " ",
        product_sector_name: req?.body?.product_sector_name ? req?.body?.product_sector_name : " ",
        product_sector_select: req?.body?.product_sector_select ? req?.body?.product_sector_select : " ",
        product_detailed_description: req?.body?.product_detailed_description ? req?.body?.product_detailed_description : " ",
        project_type1: req?.body?.project_type1 ? req?.body?.project_type1 : " ",
        project_type1_title: req?.body?.project_type1_title ? req?.body?.project_type1_title : " ",
        project_type1_description: req?.body?.project_type1_description ? req?.body?.project_type1_description : " ",
        project_type2: req?.body?.project_type2 ? req?.body?.project_type2 : " ",
        project_type2_title: req?.body?.project_type2_title ? req?.body?.project_type2_title : " ",
        project_type2_description: req?.body?.project_type2_description ? req?.body?.project_type2_description : " ",
        lastest_sub_title: req?.body?.lastest_sub_title ? req?.body?.lastest_sub_title : " ",
        seo_title: req?.body?.seo_title ? req?.body?.seo_title : " ",
        seo_description: req?.body?.seo_description ? req?.body?.seo_description : " ",
        seo_keyword: req?.body?.seo_keyword ? req?.body?.seo_keyword : " ",
        seo_slug: req?.body?.seo_slug ? req?.body?.seo_slug : " ",
        call_to_action_sub_title: req?.body?.call_to_action_sub_title ? req?.body?.call_to_action_sub_title : " ",
        call_to_action_button_name: req?.body?.call_to_action_button_name ? req?.body?.call_to_action_button_name : " ",
        call_to_action_button_link: req?.body?.call_to_action_button_link ? req?.body?.call_to_action_button_link : " ",
        call_to_action_bar: req?.body?.call_to_action_bar ? req?.body?.call_to_action_bar : "0"
      }
      var data1 = [Object.values(obj)]
      var sql = "INSERT INTO edit_project_sub_sector(alt_tag,page_image,banner_heading,banner_sub_heading,section_heading,short_description,detailed_description,product_sector_name,product_sector_select,product_detailed_description,project_type1,project_type1_title,project_type1_description,project_type2,project_type2_title,project_type2_description,lastest_sub_title,seo_title,seo_description,seo_keyword,seo_slug,call_to_action_sub_title,call_to_action_button_name,call_to_action_button_link,call_to_action_bar) VALUES ?"
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
const product_level1 = async (req, response) => {
  try {
    if (req.user.role_id == 2) {
      let obj = {
        alt_tag: req?.body?.alt_tag ? req?.body?.alt_tag : " ",
        page_image: req?.body?.page_image ? req?.body?.page_image : " ",
        banner_heading: req?.body?.banner_heading ? req?.body?.banner_heading : " ",
        banner_sub_heading: req?.body?.banner_sub_heading ? req?.body?.banner_sub_heading : " ",
        section_heading: req?.body?.section_heading ? req?.body?.section_heading : " ",
        short_description: req?.body?.short_description ? req?.body?.short_description : " ",
        detailed_description: req?.body?.detailed_description ? req?.body?.detailed_description : " ",
        product_sector_name: req?.body?.product_sector_name ? req?.body?.product_sector_name : " ",
        product_sector_select: req?.body?.product_sector_select ? req?.body?.product_sector_select : " ",
        product_detailed_description: req?.body?.product_detailed_description ? req?.body?.product_detailed_description : " ",
        project_type1: req?.body?.project_type1 ? req?.body?.project_type1 : " ",
        project_type1_title: req?.body?.project_type1_title ? req?.body?.project_type1_title : " ",
        project_type1_description: req?.body?.project_type1_description ? req?.body?.project_type1_description : " ",
        project_type2: req?.body?.project_type2 ? req?.body?.project_type2 : " ",
        project_type2_title: req?.body?.project_type2_title ? req?.body?.project_type2_title : " ",
        project_type2_description: req?.body?.project_type2_description ? req?.body?.project_type2_description : " ",
        lastest_sub_title: req?.body?.lastest_sub_title ? req?.body?.lastest_sub_title : " ",
        seo_title: req?.body?.seo_title ? req?.body?.seo_title : " ",
        seo_description: req?.body?.seo_description ? req?.body?.seo_description : " ",
        seo_keyword: req?.body?.seo_keyword ? req?.body?.seo_keyword : " ",
        seo_slug: req?.body?.seo_slug ? req?.body?.seo_slug : " ",
        call_to_action_sub_title: req?.body?.call_to_action_sub_title ? req?.body?.call_to_action_sub_title : " ",
        call_to_action_button_name: req?.body?.call_to_action_button_name ? req?.body?.call_to_action_button_name : " ",
        call_to_action_button_link: req?.body?.call_to_action_button_link ? req?.body?.call_to_action_button_link : " ",
        call_to_action_bar: req?.body?.call_to_action_bar ? req?.body?.call_to_action_bar : "0"
      }
      var data1 = Object.values(obj)
      data1.push(req.params.id)
      var sql = "update edit_project_sub_sector set alt_tag=? , page_image=? , banner_heading=? , banner_sub_heading=? , section_heading=? , short_description=? , detailed_description=? , product_sector_name=? , product_sector_select=? , product_detailed_description=? , project_type1=? , project_type1_title=? , project_type1_description=? , project_type2=? , project_type2_title=? , project_type2_description=? , lastest_sub_title=? , seo_title=? , seo_description=? , seo_keyword=? , seo_slug=? , call_to_action_sub_title=? , call_to_action_button_name=? , call_to_action_button_link=? , call_to_action_bar=? where edit_project_sub_sector_id=?"
      con.query(sql, data1, (err, res) => {
        if (err)
          response.json(err);
        response.json(res);
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
const product_level2 = async (req, response) => {
  try {
    var sql = "select * from edit_project_sub_sector where edit_project_sub_sector_id=" + req.params.id
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
const product_level3 = async (req, response) => {
  try {
    var sql = "select * from edit_project_sub_sector"
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
module.exports = { product_level, product_level1, product_level2, product_level3, search_tender, edit_project_sub_sector4, edit_project_sub_sector, edit_project_sub_sector1, edit_project_sub_sector2, edit_project_sub_sector3, delete_sub_project, delete_tender, delete_sub_tender, update_sub_tender, update_tender, update_sub_project, update_sub_sub_project, update_project, edit_project_sector1, edit_project_sector3, add_tender, add_sub_tender, login, add_sub_admin, what_we_do, what_we_do1, what_we_do2, what_we_do3, get_sub_tender_by_id, get_tender, get_tender_by_id, get_user, get_sub_sub_project_by_id, get_sub_project_by_id, get_user_by_id, pending_user, add_project, sub_add_project, sub_sub_add_project, complete_user, get_project, get_project_by_id, edit_project_sector, edit_project_sector2, delete_project, delete_sub_sub_project };