const listController = require("../controllers/list_controller")

module.exports = (router) => {
  router.get("/list/search", listController.searchList)
  router.get("/list/all", listController.getAllLists)
  router.get('/list/:todo_id', listController.getListInfo)
}
