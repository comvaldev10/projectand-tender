var con = require('../../../db/mysql')
const get_cookie = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            var sql = "select * from cookie_info where soft_delete=0"
            con.query(sql, (err, res) => {
                if (err)
                    response.json(err);
                response.json(res)
            })
        }
    }
    catch (err) {
        return err
    }
}
const get_cookie_id = async (req, response) => {
    var sql = "select * from cookie_info where soft_delete=0 && site_id=" + req.params.id
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
const get_policy = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            var sql = "select * from policy_info where soft_delete=0"
            con.query(sql, (err, res) => {
                if (err)
                    response.json(err);
                response.json(res)
            })
        }
    }
    catch (err) {
        return err
    }
}
const get_policy_id = async (req, response) => {
    var sql = "select * from policy_info where soft_delete=0 && site_id=" + req.params.id
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
const get_term = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            var sql = "select * from term_info where soft_delete=0"
            con.query(sql, (err, res) => {
                if (err)
                    response.json(err);
                response.json(res)
            })
        }
    }
    catch (err) {
        return err
    }
}
const get_term_id = async (req, response) => {
    var sql = "select * from term_info where soft_delete=0 && site_id=" + req.params.id
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

const add_cookie = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            let obj = {
                message: req?.body?.message ? req?.body?.message : '',
                seo_title: req?.body?.seo_title ? req?.body?.seo_title : '',
                seo_description: req?.body?.seo_description ? req?.body?.seo_description : '',
                seo_keyword: req?.body?.seo_keyword ? req?.body?.seo_keyword : '',
                seo_slug: req?.body?.seo_slug ? req?.body?.seo_slug : '',
                site_id: req?.body?.site_id ? req?.body?.site_id : '',
                publish: req?.body?.publish ? req?.body?.publish : '',
                soft_delete: req?.body?.soft_delete ? req?.body?.soft_delete : '0',
            }
            var sql = "insert into cookie_info(message,seo_title,seo_description,seo_keyword,seo_slug,site_id,publish,soft_delete) values ?"
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
const edit_cookie = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            let obj = {
                message: req?.body?.message ? req?.body?.message : '',
                seo_title: req?.body?.seo_title ? req?.body?.seo_title : '',
                seo_description: req?.body?.seo_description ? req?.body?.seo_description : '',
                seo_keyword: req?.body?.seo_keyword ? req?.body?.seo_keyword : '',
                seo_slug: req?.body?.seo_slug ? req?.body?.seo_slug : '',
                site_id: req?.body?.site_id ? req?.body?.site_id : '',
                publish: req?.body?.publish ? req?.body?.publish : '',
                soft_delete: req?.body?.soft_delete ? req?.body?.soft_delete : '0',
            }
            var sql = "update cookie_info set message=?,seo_title=?,seo_description=?,seo_keyword=?,seo_slug=?,site_id=?,publish=?,soft_delete=? where site_id=?"
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
const add_policy = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            let obj = {
                message: req?.body?.message ? req?.body?.message : '',
                seo_title: req?.body?.seo_title ? req?.body?.seo_title : '',
                seo_description: req?.body?.seo_description ? req?.body?.seo_description : '',
                seo_keyword: req?.body?.seo_keyword ? req?.body?.seo_keyword : '',
                seo_slug: req?.body?.seo_slug ? req?.body?.seo_slug : '',
                site_id: req?.body?.site_id ? req?.body?.site_id : '',
                publish: req?.body?.publish ? req?.body?.publish : '',
                soft_delete: req?.body?.soft_delete ? req?.body?.soft_delete : '0',
            }
            var sql = "insert into policy_info(message,seo_title,seo_description,seo_keyword,seo_slug,site_id,publish,soft_delete) values ?"
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
const edit_policy = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            let obj = {
                message: req?.body?.message ? req?.body?.message : '',
                seo_title: req?.body?.seo_title ? req?.body?.seo_title : '',
                seo_description: req?.body?.seo_description ? req?.body?.seo_description : '',
                seo_keyword: req?.body?.seo_keyword ? req?.body?.seo_keyword : '',
                seo_slug: req?.body?.seo_slug ? req?.body?.seo_slug : '',
                site_id: req?.body?.site_id ? req?.body?.site_id : '',
                publish: req?.body?.publish ? req?.body?.publish : '',
                soft_delete: req?.body?.soft_delete ? req?.body?.soft_delete : '0',
            }
            var sql = "update policy_info set message=?,seo_title=?,seo_description=?,seo_keyword=?,seo_slug=?,site_id=?,publish=?,soft_delete=? where site_id=?"
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
const add_term = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            let obj = {
                message: req?.body?.message ? req?.body?.message : '',
                seo_title: req?.body?.seo_title ? req?.body?.seo_title : '',
                seo_description: req?.body?.seo_description ? req?.body?.seo_description : '',
                seo_keyword: req?.body?.seo_keyword ? req?.body?.seo_keyword : '',
                seo_slug: req?.body?.seo_slug ? req?.body?.seo_slug : '',
                site_id: req?.body?.site_id ? req?.body?.site_id : '',
                publish: req?.body?.publish ? req?.body?.publish : '',
                soft_delete: req?.body?.soft_delete ? req?.body?.soft_delete : '0',
            }
            var sql = "insert into term_info(message,seo_title,seo_description,seo_keyword,seo_slug,site_id,publish,soft_delete) values ?"
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
const edit_term = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            let obj = {
                message: req?.body?.message ? req?.body?.message : '',
                seo_title: req?.body?.seo_title ? req?.body?.seo_title : '',
                seo_description: req?.body?.seo_description ? req?.body?.seo_description : '',
                seo_keyword: req?.body?.seo_keyword ? req?.body?.seo_keyword : '',
                seo_slug: req?.body?.seo_slug ? req?.body?.seo_slug : '',
                site_id: req?.body?.site_id ? req?.body?.site_id : '',
                publish: req?.body?.publish ? req?.body?.publish : '',
                soft_delete: req?.body?.soft_delete ? req?.body?.soft_delete : '0',
            }
            var sql = "update term_info set message=?,seo_title=?,seo_description=?,seo_keyword=?,seo_slug=?,site_id=?,publish=?,soft_delete=? where site_id=?"
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











const delete_cookie = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            var sql1 = "select soft_delete from cookie where cookie_id=" + req.params.id
            con.query(sql1, (err, res) => {
                if (err)
                    response.json(err);

                if ((res[0]?.soft_delete == '1' || res[0]?.soft_delete == 1)) {
                    response.json("already deleted")
                }
                else {
                    var sql = "delete from cookie where cookie_id=" + req.params.id
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
module.exports = {get_term,get_term_id,get_policy_id,get_policy,add_term, edit_term, get_cookie, get_cookie_id, edit_cookie, delete_cookie, add_cookie, add_policy, edit_policy };