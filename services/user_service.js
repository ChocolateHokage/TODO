const md5 = require("md5");
const users = require("../dal/users");

class UserService {
  getUserInfo(payload, answer) {
    try {
      if (!payload.user_id && !payload.token) {
        throw new Error("Отсутствует(ют) параметр(ы)");
      } else {
        let temp = {};
        if (!payload.token) temp.user_id = payload.user_id;
        else temp.token = payload.token;
        users.getUserInfo(temp, (err, result) => {
          if (err) throw answer(err);
          else {
            answer(null, result);
          }
        });
      }
    } catch (e) {
      answer(e);
    }
  }
  getAllUsers(payload, answer) {
    try {
      if (!payload.start) payload.from = 0;
      if (!payload.qty) payload.qty = 5;
      users.getAllUsers(payload, (err, result) => {
        if (err) throw answer(err);
        else {
          answer(null, result);
        }
      });
    } catch (e) {
      answer(e);
    }
  }
  addUser(payload, answer) {
    try {
      if (!payload.login || !payload.password)
        throw Error("Отсутствует(ют) параметр(ы)");
      else {
        let token = md5(payload.password);
        let temp = {
          login: payload.login,
          token: token,
        };
        users.addUser(temp, (err, result) => {
          if (err) throw answer(err);
          else answer(null, result);
        });
      }
    } catch (e) {
      answer(e);
    }
  }
}
module.exports = new UserService();
