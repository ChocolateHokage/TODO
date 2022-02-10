const userController = require("../controllers/user_controller")

module.exports = (router) => {
  router.get("/user/all", userController.getAllUsers)
  router.get("/user/:user_id", userController.getUserInfo)
  router.post("/user", userController.addUser)
  // router.put("/user", userController.updateUserData)
}
