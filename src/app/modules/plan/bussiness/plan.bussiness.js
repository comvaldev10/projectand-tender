var con = require('../../../db/mysql')
const get_plan = async (req, response) => {
  console.log("jayate",req.params.id)
  var sql = "select * from plan_purchase inner join plan_description on plan_description.plan_id=plan_purchase.ppid"
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
const get_plan_des = async (req, response) => {
  console.log("jayate",req.params.id)
  var sql = "select * from plan_purchase inner join plan_compare_description on plan_compare_description.plan_id=plan_purchase.ppid"
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
    var sql = "select * from plan_purchase inner join plan_compare_description on plan_compare_description.plan_id=plan_purchase.id inner join plan_description on plan_description.plan_id=plan_purchasepp.id"
    var data1 = [Object.values(req.body)]
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
  const edit_plan = async (req, response) => {
    var sql = "select * from plan_purchase inner join plan_compare_description on plan_compare_description.plan_id=plan_purchase.id inner join plan_description on plan_description.plan_id=plan_purchase.id"
    var data1 = [Object.values(req.body)]
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
  const delete_plan = async (req, response) => {
    var sql = "select * from plan_purchase inner join plan_compare_description on plan_compare_description.plan_id=plan_purchase.id inner join plan_description on plan_description.plan_id=plan_purchase.id"
    var data1 = [Object.values(req.body)]
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
module.exports = {get_plan,get_plan_des,edit_plan,delete_plan,add_plan};