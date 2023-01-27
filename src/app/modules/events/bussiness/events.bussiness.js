var con = require('../../../db/mysql')
const get_event = async (req, response) => {
  var sql = "select * from event"
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
const get_event_id = async (req, response) => {
  var sql = "select * from event where event_id=" + req.params.id
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
const add_event = async (req, response) => {
  try {
    if (req.user.role_id == 2) {
      let obj = {
        event_name: req?.body?.event_name ? req?.body?.event_name : '',
        event_select_sector: req?.body?.event_select_sector ? req?.body?.event_select_sector : '',
        event_country: req?.body?.event_country ? req?.body?.event_country : '',
        event_date: req?.body?.event_date ? req?.body?.event_date : '',
        event_alt_tag: req?.body?.event_alt_tag ? req?.body?.event_alt_tag : '',
        event_organiser_name: req?.body?.event_organiser_name ? req?.body?.event_organiser_name : '',
        event_project: req?.body?.event_project ? req?.body?.event_project : '',
        event_tender: req?.body?.event_tender ? req?.body?.event_tender : '',
        event_companies: req?.body?.event_companies ? req?.body?.event_companies : '',
        seo_title:req?.body?.seo_title ? req?.body?.seo_title : '',
        seo_description: req?.body?.seo_description ? req?.body?.seo_description : '',
        seo_keyword: req?.body?.seo_keyword ? req?.body?.seo_keyword : '',
        seo_slug: req?.body?.seo_slug ? req?.body?.seo_slug : '',
        event_status:req?.body?.event_status ? req?.body?.event_status : 0,
        site_id:req?.body?.site_id ? req?.body?.site_id : ''
      }
      var sql = "insert into event(event_title,event_select_sector,event_country,event_date,event_alt_tag,event_description,event_project,event_tender,event_companies,seo_title,seo_description,seo_keyword,seo_slug,event_status,site_id) values ?"
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
const edit_event = async (req, response) => {
  try {
    if (req.user.role_id == 2) {
      let obj = {
        event_title: req?.body?.event_title ? req?.body?.event_title : '',
        event_select_sector: req?.body?.event_select_sector ? req?.body?.event_select_sector : '',
        event_country: req?.body?.event_country ? req?.body?.event_country : '',
        event_date: req?.body?.event_date ? req?.body?.event_date : '',
        event_alt_tag: req?.body?.event_alt_tag ? req?.body?.event_alt_tag : '',
        event_description: req?.body?.event_description ? req?.body?.event_description : '',
        event_project: req?.body?.event_project ? req?.body?.event_project : '',
        event_tender: req?.body?.event_tender ? req?.body?.event_tender : '',
        event_companies: req?.body?.event_companies ? req?.body?.event_companies : '',
        seo_title:req?.body?.seo_title ? req?.body?.seo_title : '',
        seo_description: req?.body?.seo_description ? req?.body?.seo_description : '',
        seo_keyword: req?.body?.seo_keyword ? req?.body?.seo_keyword : '',
        seo_slug: req?.body?.seo_slug ? req?.body?.seo_slug : '',
        event_status:req?.body?.event_status ? req?.body?.event_status : 0,
        site_id:req?.body?.site_id ? req?.body?.site_id : ''
      }
      var sql = "update event set event_title=? , event_select_sector=? , event_country=? , event_date=? , event_alt_tag=? , event_description=? , event_project=? , event_tender=? , event_companies=? , seo_title=? , seo_description=? , seo_keyword=? , seo_slug=? , event_status=? , site_id=? where event_id=?"
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
const delete_event = async (req, response) => {
  try {
    if (req.user.role_id == 2) {
      var sql = "delete from event where event_id=" + req.params.id
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
module.exports = { get_event, get_event_id, edit_event, delete_event, add_event };