var con = require('../../../db/mysql')
const get_request_assistance_type = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            var sql = "select * from request_assistance_type where soft_delete=0"
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
const get_request_assistance_type_id = async (req, response) => {
    var sql = "select * from request_assistance_type where soft_delete=0 && request_assistance_type_id=" + req.params.id
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
const add_request_assistance_type = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            let obj = {
                request_assistance_type: req?.body?.request_assistance_type ? req?.body?.request_assistance_type : '',
                soft_delete: req?.body?.soft_delete ? req?.body?.soft_delete : '0',
            }
            var sql = "insert into request_assistance_type(request_assistance_type,soft_delete) values ?"
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
const edit_request_assistance_type = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            let obj = {
                request_assistance_type: req?.body?.request_assistance_type ? req?.body?.request_assistance_type : '',
                soft_delete: req?.body?.soft_delete ? req?.body?.soft_delete : '0',
            }
            var sql = "update request_assistance_type set request_assistance_type=?,soft_delete=?  where request_assistance_type_id=?"
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
const delete_request_assistance_type = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            var sql1 = "select soft_delete from request_assistance_type where request_assistance_type_id=" + req.params.id
            con.query(sql1, (err, res) => {
                if (err)
                    response.json(err);

                if ((res[0]?.soft_delete == '1' || res[0]?.soft_delete == 1)) {
                    response.json("already deleted")
                }
                else {
                    var sql = "update request_assistance_type set soft_delete=?  where request_assistance_type_id=?"
                    var data1 = ["1"]
                    data1.push(req.params.id)
                    con.query(sql, data1, (err, res) => {
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
module.exports = { get_request_assistance_type, get_request_assistance_type_id, edit_request_assistance_type, delete_request_assistance_type, add_request_assistance_type };