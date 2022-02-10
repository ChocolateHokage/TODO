const res = require("express/lib/response")
const pool = require("./db")

class ListDal {
  async searchList(payload, answer) {
    pool.query(
      "SELECT * FROM list WHERE name LIKE ?",
      ["%" + payload.query.q + "%"],
      (err, result) => {
        if (err) {
          answer(err)
          console.log(err)
        } else {
          answer(null, result)
        }
      }
    )
  }
  async getAllLists(payload, answer) {
    pool.query("SELECT * FROM list", (err, result) => {
      if (err) {
        answer(err)
        console.log(err)
      } else {
        answer(null, result)
      }
    })
  }
  async getListInfo(payload, answer) {
    pool.query(
      "SELECT * FROM list WHERE todo_id = ?",
      payload.params.todo_id,
      (err, result) => {
        if (err) {
          answer(err)
          console.log(err)
        } else {
          answer(null, result)
        }
      }
    )
  }
}

module.exports = new ListDal()
