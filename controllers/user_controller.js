const userService = require("../services/user_service");

class UserController {
  getUserInfo(req, res) {
    let payload = req.params
    userService.getUserInfo(payload, (err, result) => {
      if (err) {
        res.status(500).json(err.message);
        console.error(err);
      } else res.json(result);
    });
  }
  getAllUsers(req, res) {
    userService.getAllUsers(req.query, (err, result) => {
      if (err) {
        res.status(500).json(err);
        console.error(err);
      } else {
        res.json(result);
      }
    });
  }
  adduser(req, res) {
    userService.addUser(req.body(err));
  }
}
module.exports = new UserController();
