var con = require('../../../db/mysql')
const get_site = async (req, response) => {
    var sql = "select * from site_details"
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
const get_site_id = async (req, response) => {
    var sql = "select * from site_details where site_details_id="+req.params.id
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
const add_site = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            let obj = {
                "site_country":req?.body?.site_country?req?.body?.site_country:'',
                "site_link":req?.body?.site_link?req?.body?.site_link:''
            }
            var sql = "insert into site_details(site_country,site_link) values ?"
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
const edit_site = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            let obj = {
                "site_country":req?.body?.site_country?req?.body?.site_country:'',
                "site_link":req?.body?.site_link?req?.body?.site_link:''
            }
            var sql = "update site_details set site_country=?,site_link=? where site_details_id=?"
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
const delete_site = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            var sql = "delete from site_details where site_details_id=" + req.params.id
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
module.exports = { get_site, get_site_id, edit_site, delete_site, add_site };