const user_route = require("./src/app/modules/user/routes/user.routes");
const plan_route=require('./src/app/modules/plan/routes/plan.routes')
const admin_route=require('./src/app/modules/admin/routes/admin.routes')
module.exports = [{
    path: "/api/user",
    handler: user_route
  },
  {
    path: "/api/plan",
    handler: plan_route
  },
  {
    path: "/api/admin",
    handler: admin_route
  },

]