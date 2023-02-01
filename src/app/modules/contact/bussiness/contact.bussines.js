var con = require('../../../db/mysql')
const get_contact = async (req, response) => {
  var sql = "select * from contact where soft_delete=0"
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
const get_contact_id = async (req, response) => {
  var sql = "select * from contact where soft_delete=0 && site_id=" + req.params.id
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
const add_contact_info = async (req, response) => {
    try {
        let obj = {
          name:req?.body?.name ? req?.body?.name: '',
          company_name: req?.body?.company_name ? req?.body?.company_name : '',
          email: req?.body?.email ? req?.body?.email : '', 
          mobile_no: req?.body?.mobile_no ? req?.body?.mobile_no : '',
          message: req?.body?.message ? req?.body?.message : '',
          checkout: req?.body?.checkout ? req?.body?.checkout : '',      
          soft_delete:req?.body?.soft_delete ? req?.body?.soft_delete :'0',
          site_id: req?.body?.site_id ? req?.body?.site_id : '',
        }
        var sql = "insert into contact_info(name,company_name,email,mobile_no,message,checkout,soft_delete,site_id) values ?"
        var data1 = [Object.values(obj)]
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
  const get_contact_info = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
        var sql = "select * from contact_info where soft_delete=0"
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
  const get_contact_info_id = async (req, response) => {
    try {
    if (req.user.role_id == 2) {
    var sql = "select * from contact_info where soft_delete=0 && contact_info_id=" + req.params.id
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
const add_contact = async (req, response) => {
  try {
    if (req.user.role_id == 2) {
      let obj = {
        heading:req?.body?.heading ? req?.body?.heading: '',
        sub_heading: req?.body?.sub_heading ? req?.body?.sub_heading : '',
        map_location: req?.body?.map_location ? req?.body?.map_location : '',
        our_address: req?.body?.our_address ? req?.body?.our_address : '',
        get_in_touch: req?.body?.get_in_touch ? req?.body?.get_in_touch : '',
        opening: req?.body?.opening ? req?.body?.opening : '',      
        call_to_action_descrip: req?.body?.call_to_action_descrip ? req?.body?.call_to_action_descrip : " ",
        call_to_action_button_name: req?.body?.call_to_action_button_name ? req?.body?.call_to_action_button_name : " ",
        call_to_action_button_link: req?.body?.call_to_action_button_link ? req?.body?.call_to_action_button_link : " ",
        call_to_action_heading: req?.body?.call_to_action_heading ? req?.body?.call_to_action_heading : " ",
        call_to_action_bar: req?.body?.call_to_action_bar ? req?.body?.call_to_action_bar : "0",
        seo_title: req?.body?.seo_title ? req?.body?.seo_title : '',
        seo_description: req?.body?.seo_description ? req?.body?.seo_description : '',
        seo_keyword: req?.body?.seo_keyword ? req?.body?.seo_keyword : '',
        seo_slug: req?.body?.seo_slug ? req?.body?.seo_slug : '',
        soft_delete:req?.body?.soft_delete ? req?.body?.soft_delete :'0',
        site_id: req?.body?.site_id ? req?.body?.site_id : '',
        publish: req?.body?.publish ? req?.body?.publish :'0'
      }
      var sql = "insert into contact(heading,sub_heading,map_location,our_address,get_in_touch,opening,call_to_action_descrip,call_to_action_button_name,call_to_action_button_link,call_to_action_heading,call_to_action_bar,seo_title,seo_description,seo_keyword,seo_slug,soft_delete,site_id,publish) values ?"
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
const edit_contact = async (req, response) => {
  try {
    if (req.user.role_id == 2) {
        let obj = {
            heading:req?.body?.heading ? req?.body?.heading: '',
            sub_heading: req?.body?.sub_heading ? req?.body?.sub_heading : '',
            map_location: req?.body?.map_location ? req?.body?.map_location : '',
            our_address: req?.body?.our_address ? req?.body?.our_address : '',
            get_in_touch: req?.body?.get_in_touch ? req?.body?.get_in_touch : '',
            opening: req?.body?.opening ? req?.body?.opening : '',      
            call_to_action_descrip: req?.body?.call_to_action_descrip ? req?.body?.call_to_action_descrip : " ",
            call_to_action_button_name: req?.body?.call_to_action_button_name ? req?.body?.call_to_action_button_name : " ",
            call_to_action_button_link: req?.body?.call_to_action_button_link ? req?.body?.call_to_action_button_link : " ",
            call_to_action_heading: req?.body?.call_to_action_heading ? req?.body?.call_to_action_heading : " ",
            call_to_action_bar: req?.body?.call_to_action_bar ? req?.body?.call_to_action_bar : "0",
            seo_title: req?.body?.seo_title ? req?.body?.seo_title : '',
            seo_description: req?.body?.seo_description ? req?.body?.seo_description : '',
            seo_keyword: req?.body?.seo_keyword ? req?.body?.seo_keyword : '',
            seo_slug: req?.body?.seo_slug ? req?.body?.seo_slug : '',
            soft_delete:req?.body?.soft_delete ? req?.body?.soft_delete :'0',
            site_id: req?.body?.site_id ? req?.body?.site_id : '',
            publish: req?.body?.publish ? req?.body?.publish :'0'
            }
      var sql = "update contact set heading=?,sub_heading=?,map_location=?,our_address=?,get_in_touch=?,opening=?,call_to_action_descrip=?,call_to_action_button_name=?,call_to_action_button_link=?,call_to_action_heading=?,call_to_action_bar=?,seo_title=?,seo_description=?,seo_keyword=?,seo_slug=?,soft_delete=?,site_id=?,publish=? where site_id=?"
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
const delete_contact = async (req, response) => {
  try {
    if (req.user.role_id == 2) {
      var sql1 = "select soft_delete from contact where contact_id=" + req.params.id
      con.query(sql1, (err, res) => {
        if (err)
          response.json(err);

        if ((res[0]?.soft_delete == '1' || res[0]?.soft_delete == 1)) {
          response.json("already deleted")
        }
        else
        {
          var sql = "delete from contact where contact_id=" + req.params.id
          con.query(sql, (err, res) => {
            if (err)
              response.json(err);
            response.json(res)
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
module.exports = { get_contact, get_contact_id, edit_contact, delete_contact, add_contact ,add_contact_info,get_contact_info,get_contact_info_id };