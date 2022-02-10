const userService = require("../services/user_service")

class UserController {
  getUserInfo(req, res) {
    let payload = req.params
    userService.getUserInfo(payload, (err, result) => {
      if (err) {
        res.status(500).json(err.message)
        console.error(err)
      } else res.json(result)
    })
  }
  getAllUsers(req, res) {
    userService.getAllUsers(req.query, (err, result) => {
      if (err) {
        res.status(500).json(err)
        console.error(err)
      } else {
        res.json(result)
      }
    })
  }
  addUser(req, res) {
    userService.addUser(req.body, (err, result) => {
      if (err) {
        res.status(501).json(err)
        console.log(err)
      } else {
        res.json(result)
      }
    })
  }
  // updateUserData(req, res) {
  //   userService.updateUserData(req.body, (err, result) => {
  //     if(err) {
  //       res.status(501).json(err)
  //       console.log(err)
  //     } else {
  //       res.json(result)
  //     }
  //   })
  // }
  
}
module.exports = new UserController()
