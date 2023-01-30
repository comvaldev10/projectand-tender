var con = require('../../../db/mysql')
const get_event = async (req, response) => {
  var sql = "select * from event where soft_delete=0"
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
  var sql = "select * from event where soft_delete=0 && event_id=" + req.params.id
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
    console.log(req.body,"aa")
    if (req.user.role_id == 2) {
      let obj = {
        event_name: req?.body?.event_name ? req?.body?.event_name : '',
        event_select_sector: req?.body?.event_select_sector ? req?.body?.event_select_sector : '',
        event_country: req?.body?.event_country ? req?.body?.event_country : '',
        event_date: req?.body?.event_date ? req?.body?.event_date : '',
        event_alt_tag: req?.body?.event_alt_tag ? req?.body?.event_alt_tag : '',
        event_organiser: req?.body?.event_organiser ? req?.body?.event_organiser : '',
        event_venue: req?.body?.event_venue ? req?.body?.event_venue : '',
        event_companies: req?.body?.event_companies ? req?.body?.event_companies : '',
        mobile_no:req?.body?.mobile_no ? req?.body?.mobile_no : '',
        event_website: req?.body?.event_website ? req?.body?.event_website : '',
        event_image: req?.body?.event_image ? req?.body?.event_image : '',
        event_email: req?.body?.event_email ? req?.body?.event_email : '',
        event_status:req?.body?.event_status ? req?.body?.event_status : 0,
        site_id:req?.body?.site_id ? req?.body?.site_id : '',
      }
      var sql = "insert into event(event_name,event_select_sector,event_country,event_date,event_alt_tag,event_organiser,event_venue,event_companies,mobile_no,event_website,event_image,event_email,event_status,site_id) values ?"
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
        event_name: req?.body?.event_name ? req?.body?.event_name : '',
        event_select_sector: req?.body?.event_select_sector ? req?.body?.event_select_sector : '',
        event_country: req?.body?.event_country ? req?.body?.event_country : '',
        event_date: req?.body?.event_date ? req?.body?.event_date : '',
        event_alt_tag: req?.body?.event_alt_tag ? req?.body?.event_alt_tag : '',
        event_organiser: req?.body?.event_organiser ? req?.body?.event_organiser : '',
        event_venue: req?.body?.event_venue ? req?.body?.event_venue : '',
        event_companies: req?.body?.event_companies ? req?.body?.event_companies : '',
        mobile_no:req?.body?.mobile_no ? req?.body?.mobile_no : '',
        event_website: req?.body?.event_website ? req?.body?.event_website : '',
        event_image: req?.body?.event_image ? req?.body?.event_image : '',
        event_email: req?.body?.event_email ? req?.body?.event_email : '',
        event_status:req?.body?.event_status ? req?.body?.event_status : 0,
        site_id:req?.body?.site_id ? req?.body?.site_id : '',
      }
      var sql = "update event set event_name=?,event_select_sector=?,event_country=?,event_date=?,event_alt_tag=?,event_organiser=?,event_venue=?,event_companies=?,mobile_no=?,event_website=?,event_image=?,event_email=?,event_status=?,site_id=? where event_id=?"
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
      var sql1="select soft_delete from event where event_id=" + req.params.id 
      con.query(sql1, (err, res) => {
        if (err)
          response.json(err);
        console.log(res)
      })

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