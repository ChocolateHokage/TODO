const pool = require("../dal/db")
class UsersDal {
  async getUserInfo(payload, answer) {
    var { user_id } = payload
    pool.query(
      "SELECT user_id, login FROM user WHERE user_id = ?",
      user_id,
      (err, result) => {
        if (err) {
          console.log(err)
          answer.status(523).json(err)
        } else answer(null, result)
      }
    )
  }
  async getAllUsers(payload, answer) {
    let start = payload.start ?? 0
    let qty = payload.qty ?? 10
    pool.query(
      "SELECT user_id, login FROM user LIMIT ?,?",
      [start, qty],
      (err, result) => {
        if (err) {
          console.log(err)
          answer.status(523).json(err) //523 Origin Is Unreachable («источник недоступен»)
        } else answer(null, result)
      }
    )
  }
  async addUser(payload, answer) {
    pool.query(
      "INSERT INTO user (login, token) VALUES (?, ?)",
      [payload.login, payload.token],
      (err_insert, result) => {
        if (err_insert) {
          console.log(err_insert)
          answer.status(501).json(err_insert) //501 Not Implemented («не реализовано»)[2][3];
        } else
          pool.query(
            "SELECT user_id, login FROM user where user_id = ? ",
            result.insertId,
            (err_select, user) => {
              if (err_select) {
                console.log(err_select)
                answer.status(500).json(err_select)
              } else answer(null, user)
            }
          )
      }
    )
  }
  // async updateUserData(payload, answer) {
  //   pool.query(
  //     "UPDATE user SET ?? WHERE user_id=?",
  //     [obj, req.body.user_id],
  //     (err_update, result) => {
  //       if (err_update) {
  //         console.log(err_update)
  //         res.status(501).json(err_update)
  //       } else
  //         pool.query(
  //           "SELECT user_id, login FROM user where user_id = ?",
  //           req.body.user_id,
  //           (err_select, user) => {
  //             if (err_select) {
  //               console.log(err_select)
  //               res.status(500).json(err_select)
  //             } else res.json(user)
  //           }
  //         )
  //     }
  //   )
  // }
  // async checkAuthUser(payload, answer) {
  //   pool.query(
  //     "SELECT token from user where token=?",
  //     payload.token,
  //     (err, result) => {
  //       if (err) {
  //         console.log(err)
  //         res.status(500)
  //       } else {
  //         if (result.length > 0) next()
  //         else res.status(401).json({ message: "вы не авторизованны" })
  //       }
  //     }
  //   )
  // }



}

module.exports = new UsersDal()
