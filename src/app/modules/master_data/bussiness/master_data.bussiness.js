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

const get_company_activity_type = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            var sql = "select * from company_activity where soft_delete=0"
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
const get_company_activity_type_id = async (req, response) => {
    var sql = "select * from company_activity where soft_delete=0 && company_activity_id=" + req.params.id
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
const add_company_activity_type = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            let obj = {
                company_activity: req?.body?.company_activity ? req?.body?.company_activity : '',
                soft_delete: req?.body?.soft_delete ? req?.body?.soft_delete : '0',
            }
            var sql = "insert into company_activity(company_activity,soft_delete) values ?"
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
const edit_company_activity_type = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            let obj = {
                company_activity: req?.body?.company_activity ? req?.body?.company_activity : '',
                soft_delete: req?.body?.soft_delete ? req?.body?.soft_delete : '0',
            }
            var sql = "update company_activity set company_activity=?,soft_delete=?  where company_activity_id=?"
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
const delete_company_activity_type = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            var sql1 = "select soft_delete from company_activity where company_activity_id=" + req.params.id
            con.query(sql1, (err, res) => {
                if (err)
                    response.json(err);

                if ((res[0]?.soft_delete == '1' || res[0]?.soft_delete == 1)) {
                    response.json("already deleted")
                }
                else {
                    var sql = "update company_activity set soft_delete=?  where company_activity_id=?"
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

const get_company_specialize = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            var sql = "select * from company_specialize where soft_delete=0"
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
const get_company_specialize_id = async (req, response) => {
    var sql = "select * from company_specialize where soft_delete=0 && company_specialize_id=" + req.params.id
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
const add_company_specialize = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            let obj = {
                company_specialize: req?.body?.company_specialize ? req?.body?.company_specialize : '',
                soft_delete: req?.body?.soft_delete ? req?.body?.soft_delete : '0',
            }
            var sql = "insert into company_specialize(company_specialize,soft_delete) values ?"
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
const edit_company_specialize = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            let obj = {
                company_specialize: req?.body?.company_specialize ? req?.body?.company_specialize : '',
                soft_delete: req?.body?.soft_delete ? req?.body?.soft_delete : '0',
            }
            var sql = "update company_specialize set company_specialize=?,soft_delete=?  where company_specialize_id=?"
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
const delete_company_specialize = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            var sql1 = "select soft_delete from company_specialize where company_specialize_id=" + req.params.id
            con.query(sql1, (err, res) => {
                if (err)
                    response.json(err);

                if ((res[0]?.soft_delete == '1' || res[0]?.soft_delete == 1)) {
                    response.json("already deleted")
                }
                else {
                    var sql = "update company_specialize set soft_delete=?  where company_specialize_id=?"
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

const get_what_are_you_interested_for = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            var sql = "select * from what_are_you_interested_for where soft_delete=0"
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
const get_what_are_you_interested_for_id = async (req, response) => {
    var sql = "select * from what_are_you_interested_for where soft_delete=0 && what_are_you_interested_for_id=" + req.params.id
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
const add_what_are_you_interested_for = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            let obj = {
                what_are_you_interested_for: req?.body?.what_are_you_interested_for ? req?.body?.what_are_you_interested_for : '',
                soft_delete: req?.body?.soft_delete ? req?.body?.soft_delete : '0',
            }
            var sql = "insert into what_are_you_interested_for(what_are_you_interested_for,soft_delete) values ?"
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
const edit_what_are_you_interested_for = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            let obj = {
                what_are_you_interested_for: req?.body?.what_are_you_interested_for ? req?.body?.what_are_you_interested_for : '',
                soft_delete: req?.body?.soft_delete ? req?.body?.soft_delete : '0',
            }
            var sql = "update what_are_you_interested_for set what_are_you_interested_for=?,soft_delete=?  where what_are_you_interested_for_id=?"
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
const delete_what_are_you_interested_for = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            var sql1 = "select soft_delete from what_are_you_interested_for where what_are_you_interested_for_id=" + req.params.id
            con.query(sql1, (err, res) => {
                if (err)
                    response.json(err);

                if ((res[0]?.soft_delete == '1' || res[0]?.soft_delete == 1)) {
                    response.json("already deleted")
                }
                else {
                    var sql = "update what_are_you_interested_for set soft_delete=?  where what_are_you_interested_for_id=?"
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

const get_company_type = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            var sql = "select * from company_type where soft_delete=0"
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
const get_company_type_id = async (req, response) => {
    var sql = "select * from company_type where soft_delete=0 && company_type_id=" + req.params.id
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
const add_company_type = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            let obj = {
                company_type: req?.body?.company_type ? req?.body?.company_type : '',
                soft_delete: req?.body?.soft_delete ? req?.body?.soft_delete : '0',
            }
            var sql = "insert into company_type(company_type,soft_delete) values ?"
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
const edit_company_type = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            let obj = {
                company_type: req?.body?.company_type ? req?.body?.company_type : '',
                soft_delete: req?.body?.soft_delete ? req?.body?.soft_delete : '0',
            }
            var sql = "update company_type set company_type=?,soft_delete=?  where company_type_id=?"
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
const delete_company_type = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            var sql1 = "select soft_delete from company_type where company_type_id=" + req.params.id
            con.query(sql1, (err, res) => {
                if (err)
                    response.json(err);

                if ((res[0]?.soft_delete == '1' || res[0]?.soft_delete == 1)) {
                    response.json("already deleted")
                }
                else {
                    var sql = "update company_type set soft_delete=?  where company_type_id=?"
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


const get_company_award = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            var sql = "select * from company_award where soft_delete=0"
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
const get_company_award_id = async (req, response) => {
    var sql = "select * from company_award where soft_delete=0 && company_award_id=" + req.params.id
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
const add_company_award = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            let obj = {
                company_award: req?.body?.company_award ? req?.body?.company_award : '',
                soft_delete: req?.body?.soft_delete ? req?.body?.soft_delete : '0',
            }
            var sql = "insert into company_award(company_award,soft_delete) values ?"
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
const edit_company_award = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            let obj = {
                company_award: req?.body?.company_award ? req?.body?.company_award : '',
                soft_delete: req?.body?.soft_delete ? req?.body?.soft_delete : '0',
            }
            var sql = "update company_award set company_award=?,soft_delete=?  where company_award_id=?"
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
const delete_company_award = async (req, response) => {
    try {
        if (req.user.role_id == 2) {
            var sql1 = "select soft_delete from company_award where company_award_id=" + req.params.id
            con.query(sql1, (err, res) => {
                if (err)
                    response.json(err);

                if ((res[0]?.soft_delete == '1' || res[0]?.soft_delete == 1)) {
                    response.json("already deleted")
                }
                else {
                    var sql = "update company_award set soft_delete=?  where company_award_id=?"
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

module.exports = {
    get_company_award, get_company_award_id, edit_company_award, delete_company_award, add_company_award,
    get_company_type, get_company_type_id, edit_company_type, delete_company_type, add_company_type,
    get_what_are_you_interested_for, get_what_are_you_interested_for_id, edit_what_are_you_interested_for, delete_what_are_you_interested_for, add_what_are_you_interested_for,
    get_company_specialize, get_company_specialize_id, edit_company_specialize, delete_company_specialize, add_company_specialize,
    get_request_assistance_type, get_request_assistance_type_id, edit_request_assistance_type, delete_request_assistance_type, add_request_assistance_type,
    get_company_activity_type, get_company_activity_type_id, edit_company_activity_type, delete_company_activity_type, add_company_activity_type
};