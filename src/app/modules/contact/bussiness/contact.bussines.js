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
        soft_delete:req?.body?.soft_delete ? req?.body?.soft_delete : '0',
        site_id: req?.body?.site_id ? req?.body?.site_id : '',
        publish: req?.body?.publish ? req?.body?.publish :'0'
      }
      var sql = "insert into contact(heading,sub_heading,map_location,our_address,get_in_touch,opening,call_to_action_descrip,call_to_action_button_name,call_to_action_button_link,call_to_action_bar,call_to_action_heading,seo_title,seo_description,seo_keyword,seo_slug,soft_delete,site_id,publish) values ?"
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
            alt_tag:req?.body?.alt_tag ? req?.body?.alt_tag: '',
            banner_heading: req?.body?.banner_heading ? req?.body?.banner_heading : '',
            banner_image: req?.body?.banner_image ? req?.body?.banner_image : '',
            contact_heading: req?.body?.contact_heading ? req?.body?.contact_heading : '',
            contact_description: req?.body?.contact_description ? req?.body?.contact_description : '',
            success_heading: req?.body?.success_heading ? req?.body?.success_heading : '',
            success_description: req?.body?.success_description ? req?.body?.success_description : '',
            success_subscriber1: req?.body?.success_subscriber1 ? req?.body?.success_subscriber1 : '',
            success_subscriber2: req?.body?.success_subscriber2 ? req?.body?.success_subscriber2 : '',
            success_year1: req?.body?.success_year1 ? req?.body?.success_year1 : '',
            success_year2: req?.body?.success_year2 ? req?.body?.success_year2 : '',
            success_key_region1: req?.body?.success_key_region1 ? req?.body?.success_key_region1 : '',
            success_key_region2: req?.body?.success_key_region2 ? req?.body?.success_key_region2 : '',
            who_heading: req?.body?.who_heading ? req?.body?.who_heading : '',
            who_alt_tag: req?.body?.who_alt_tag ? req?.body?.who_alt_tag : '',
            who_image: req?.body?.who_image ? req?.body?.who_image : '',
            who_description: req?.body?.who_description ? req?.body?.who_description : '',
            mission_heading: req?.body?.mission_heading ? req?.body?.mission_heading : '',
            mission_description: req?.body?.mission_description ? req?.body?.mission_description : '',
            mission_our: req?.body?.mission_our ? req?.body?.mission_our : '',
            mission_vision: req?.body?.mission_vision ? req?.body?.mission_vision : '',
            mission_value: req?.body?.mission_value ? req?.body?.mission_value : '',
            access_heading: req?.body?.access_heading ? req?.body?.access_heading : '',
            access_description: req?.body?.access_description ? req?.body?.access_description : '',
            access_button: req?.body?.access_button ? req?.body?.access_button : '',
            access_link: req?.body?.access_link ? req?.body?.access_link : '',
            why_you_heading: req?.body?.why_you_heading ? req?.body?.why_you_heading : '',
            why_you_description: req?.body?.why_you_description ? req?.body?.why_you_description : '',
            why_you_list: req?.body?.why_you_list ? req?.body?.why_you_list : '',
            why_you_alt_tag: req?.body?.why_you_alt_tag ? req?.body?.why_you_alt_tag : '',
            why_you_image: req?.body?.why_you_image ? req?.body?.why_you_image : '',
            ourclent_heading: req?.body?.ourclent_heading ? req?.body?.ourclent_heading : '',
            ourclent_description: req?.body?.ourclent_description ? req?.body?.ourclent_description : '',
            ourclent_alt_tag: req?.body?.ourclent_alt_tag ? req?.body?.ourclent_alt_tag : '',
            ourclent_image: req?.body?.ourclent_image ? req?.body?.ourclent_image : '',
            ourclent_check: req?.body?.ourclent_check ? req?.body?.ourclent_check : '0',
            testo_heading: req?.body?.testo_heading ? req?.body?.testo_heading : '',
            testo_image: req?.body?.testo_image ? req?.body?.testo_image : '',
            testo_alt: req?.body?.testo_alt ? req?.body?.testo_alt : '',
            testo_descrip: req?.body?.testo_descrip ? req?.body?.testo_descrip : '',
            testo_check: req?.body?.testo_check ? req?.body?.testo_check : '0',
            testo2_check: req?.body?.testo2_check ? req?.body?.testo2_check : '0',
            testo2_input: req?.body?.testo2_input ? req?.body?.testo2_input : '',
            call_to_action_descrip: req?.body?.call_to_action_descrip ? req?.body?.call_to_action_descrip : " ",
            call_to_action_button_name: req?.body?.call_to_action_button_name ? req?.body?.call_to_action_button_name : " ",
            call_to_action_button_link: req?.body?.call_to_action_button_link ? req?.body?.call_to_action_button_link : " ",
            call_to_action_heading: req?.body?.call_to_action_heading ? req?.body?.call_to_action_heading : " ",
            call_to_action_bar: req?.body?.call_to_action_bar ? req?.body?.call_to_action_bar : "0",
            seo_title: req?.body?.seo_title ? req?.body?.seo_title : '',
            seo_description: req?.body?.seo_description ? req?.body?.seo_description : '',
            seo_keyword: req?.body?.seo_keyword ? req?.body?.seo_keyword : '',
            seo_slug: req?.body?.seo_slug ? req?.body?.seo_slug : '',
            latest_heading: req?.body?.latest_heading ? req?.body?.latest_heading : '',
            latest_descrip: req?.body?.latest_descrip ? req?.body?.latest_descrip : '',
            soft_delete:req?.body?.soft_delete ? req?.body?.soft_delete : '0',
            site_id: req?.body?.site_id ? req?.body?.site_id : '',
            publish: req?.body?.publish ? req?.body?.publish :'0'
          }
      var sql = "update contact set alt_tag=?,banner_heading=?,banner_image=?,contact_heading=?,contact_description=?,success_heading=?,success_description=?,success_subscriber1=?,success_subscriber2=?,success_year1=?,success_year2=?,success_key_region1=?,success_key_region2=?,who_heading=?,who_alt_tag=?,who_image=?,who_description=?,mission_heading=?,mission_description=?,mission_our=?,mission_vision=?,mission_value=?,access_heading=?,access_description=?,access_button=?,access_link=?,why_you_heading=?,why_you_description=?,why_you_list=?,why_you_alt_tag=?,why_you_image=?,ourclent_heading=?,ourclent_description=?,ourclent_alt_tag=?,ourclent_image=?,ourclent_check=?,testo_heading=?,testo_image=?,testo_alt=?,testo_descrip=?,testo_check=?,testo2_check=?,testo2_input=?,call_to_action_descrip=?,call_to_action_button_name=?,call_to_action_button_link=?,call_to_action_bar=?,call_to_action_heading=?,seo_title=?,seo_description=?,seo_keyword=?,seo_slug=?,lastest_heading=?,lastest_descrip=?,soft_delete=?,site_id=?,publish=? where contact_id=?"
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
module.exports = { get_contact, get_contact_id, edit_contact, delete_contact, add_contact };