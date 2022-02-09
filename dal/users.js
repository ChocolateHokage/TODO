const pool = require("../dal/db");

class UsersDal {
  async getUserInfo(payload, answer) {
    var id = payload.user_id;
    pool.query(
      "SELECT user_id, login FROM user WHERE user_id = ?",
      id,
      (err, result) => {
        if (err) {
          console.log(err);
          answer.status(523).json(err);
        } else answer(null, result);
      }
    );
  }
  async getAllUsers(payload, answer) {
    let start = payload.start ?? 0;
    let qty = payload.qty ?? 10;
    pool.query(
      "SELECT user_id, login FROM user LIMIT ?,?",
      [start, qty],
      (err, result) => {
        if (err) {
          console.log(err);
          answer.status(523).json(err); //523 Origin Is Unreachable («источник недоступен»)
        } else answer(null, result);
      }
    );
  }
  async addUser(payload, answer) {
    let token = md5(payload.password);
    pool.query(
      "INSERT INTO user (login, token) VALUES (?, ?)",
      [payload.login, token],
      (err_insert, result) => {
        if (err_insert) {
          console.log(err_insert);
          answer.status(501).json(err_insert); //501 Not Implemented («не реализовано»)[2][3];
        } else
          pool.query(
            "SELECT user_id, login FROM user where user_id = ? ",
            result.insertId,
            (err_select, user) => {
              if (err_select) {
                console.log(err_select);
                answer.status(500).json(err_select);
              } else answer(null, user);
            }
          );
      }
    );
  }
}

module.exports = new UsersDal();
