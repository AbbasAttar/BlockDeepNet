const routes = require("next-routes")();

routes
  .add("/campaigns/new", "/campaigns/new")
  .add("/campaigns/:address", "/campaigns/show")
  .add("/campaigns/:address/requests", "/campaigns/requests/index")
  .add("/campaigns/:address/requests/new", "/campaigns/requests/new")
  .add("/usr/:address/created", "/usr/created")
  .add("/usr/:address/backed", "/usr/backed");

module.exports = routes;
