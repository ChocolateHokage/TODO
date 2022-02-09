const userController = require("../controllers/user_controller");

module.exports = (router) => {
  router.get("/user/all", (req, res) => {
    userController.getAllUsers(req, res);
  });
  router.get("/user/:user_id", (req, res) => {
    userController.getUserInfo(req, res);
  });
};
