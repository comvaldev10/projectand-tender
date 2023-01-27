var con = require('../../../db/mysql')
const get_bussiness_news = async (req, response) => {
  var sql = "select * from bussiness_news"
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
  var sql = "select * from bussiness_news where bussiness_news_id=" + req.params.id
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
        bussiness_news_title: req?.body?.bussiness_news_title ? req?.body?.bussiness_news_title : '',
        bussiness_news_select_sector: req?.body?.bussiness_news_select_sector ? req?.body?.bussiness_news_select_sector : '',
        bussiness_news_country: req?.body?.bussiness_news_country ? req?.body?.bussiness_news_country : '',
        bussiness_news_date: req?.body?.bussiness_news_date ? req?.body?.bussiness_news_date : '',
        bussiness_news_alt_tag: req?.body?.bussiness_news_alt_tag ? req?.body?.bussiness_news_alt_tag : '',
        bussiness_news_description: req?.body?.bussiness_news_description ? req?.body?.bussiness_news_description : '',
        bussiness_news_project: req?.body?.bussiness_news_project ? req?.body?.bussiness_news_project : '',
        bussiness_news_tender: req?.body?.bussiness_news_tender ? req?.body?.bussiness_news_tender : '',
        bussiness_news_companies: req?.body?.bussiness_news_companies ? req?.body?.bussiness_news_companies : '',
        seo_title:req?.body?.seo_title ? req?.body?.seo_title : '',
        seo_description: req?.body?.seo_description ? req?.body?.seo_description : '',
        seo_keyword: req?.body?.seo_keyword ? req?.body?.seo_keyword : '',
        seo_slug: req?.body?.seo_slug ? req?.body?.seo_slug : '',
        bussiness_news_status:req?.body?.bussiness_news_status ? req?.body?.bussiness_news_status : 0,
        site_id:req?.body?.site_id ? req?.body?.site_id : ''
      }
      var sql = "insert into bussiness_news(bussiness_news_title,bussiness_news_select_sector,bussiness_news_country,bussiness_news_date,bussiness_news_alt_tag,bussiness_news_description,bussiness_news_project,bussiness_news_tender,bussiness_news_companies,seo_title,seo_description,seo_keyword,seo_slug,bussiness_news_status,site_id) values ?"
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
        bussiness_news_title: req?.body?.bussiness_news_title ? req?.body?.bussiness_news_title : '',
        bussiness_news_select_sector: req?.body?.bussiness_news_select_sector ? req?.body?.bussiness_news_select_sector : '',
        bussiness_news_country: req?.body?.bussiness_news_country ? req?.body?.bussiness_news_country : '',
        bussiness_news_date: req?.body?.bussiness_news_date ? req?.body?.bussiness_news_date : '',
        bussiness_news_alt_tag: req?.body?.bussiness_news_alt_tag ? req?.body?.bussiness_news_alt_tag : '',
        bussiness_news_description: req?.body?.bussiness_news_description ? req?.body?.bussiness_news_description : '',
        bussiness_news_project: req?.body?.bussiness_news_project ? req?.body?.bussiness_news_project : '',
        bussiness_news_tender: req?.body?.bussiness_news_tender ? req?.body?.bussiness_news_tender : '',
        bussiness_news_companies: req?.body?.bussiness_news_companies ? req?.body?.bussiness_news_companies : '',
        seo_title:req?.body?.seo_title ? req?.body?.seo_title : '',
        seo_description: req?.body?.seo_description ? req?.body?.seo_description : '',
        seo_keyword: req?.body?.seo_keyword ? req?.body?.seo_keyword : '',
        seo_slug: req?.body?.seo_slug ? req?.body?.seo_slug : '',
        bussiness_news_status:req?.body?.bussiness_news_status ? req?.body?.bussiness_news_status : 0,
        site_id:req?.body?.site_id ? req?.body?.site_id : ''
      }
      var sql = "update bussiness_news set bussiness_news_title=? , bussiness_news_select_sector=? , bussiness_news_country=? , bussiness_news_date=? , bussiness_news_alt_tag=? , bussiness_news_description=? , bussiness_news_project=? , bussiness_news_tender=? , bussiness_news_companies=? , seo_title=? , seo_description=? , seo_keyword=? , seo_slug=? , bussiness_news_status=? , site_id=? where bussiness_news_id=?"
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
      var sql = "delete from bussiness_news where bussiness_news_id=" + req.params.id
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