const user_route = require("./src/app/modules/user/routes/user.routes");
const plan_route=require('./src/app/modules/plan/routes/plan.routes')
const admin_route=require('./src/app/modules/admin/routes/admin.routes')
const site_route=require('./src/app/modules/site_details/routes/site_details.routes')
const bussiness_route=require('./src/app/modules/bussinessnews/routes/bussinessnews.routes')
const event=require('./src/app/modules/events/routes/events.routes')
const about=require('./src/app/modules/about/routes/about.routes')
const contact=require('./src/app/modules/contact/routes/contact.routes')
const policy=require('./src/app/modules/policy/routes/policy.routes')
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
  {
    path: "/api/site",
    handler: site_route
  },
  {
    path: "/api/bussiness_news",
    handler: bussiness_route
  },
  {
    path: "/api/event",
    handler:event
  },
  {
    path: "/api/about",
    handler:about
  },
  {
    path: "/api/contact",
    handler:contact
  },
  {
    path: "/api/policy",
    handler:policy
  },
]