const list = require("../dal/list")
const lists = require("../dal/list")
class ListService {
  searchList(payload, answer) {
    try {
      if (!payload.query.q) {
        throw Error("Отсутствует строка поиска")
      } else {
        lists.searchList(payload, (err, result) => {
          if (err) {
            answer(err)
            console.log(err)
          } else {
            answer(null, result)
          }
        })
      }
    } catch (e) {
      answer(e)
    }
  }
  getAllLists(payload, answer) {
    try {
      lists.getAllLists(payload, (err, result) => {
        if (err) throw answer(err)
        else answer(null, result)
      })
    } catch (e) {
      answer(e)
    }
  }
  getListInfo(payload, answer) {
    try {
      if (!payload.params.todo_id) {
        throw Error("Отсутствует параметр")
      } else {
        list.getListInfo(payload, (err, result) => {
          if (err) {
            answer(err)
            console.log(err)
          } else {
            answer(null, result)
          }
        })
      }
    } catch (e) {
      answer(e)
    }
  }
}
module.exports = new ListService()
