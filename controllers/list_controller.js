const listService = require("../services/list_service")

class ListController {
  searchList(req, res) {
    listService.searchList(req, (err, result) => {
      if (err) {
        res.status(523).json(err)
        console.log(err)
      } else {
        res.json(result)
      }
    })
  }
  getAllLists(req, res) {
    listService.getAllLists(req, (err, result) => {
      if (err) {
        res.status(500).json(err)
        console.log(err)
      } else {
        res.json(result)
      }
    })
  }
  getListInfo(req, res) {
    listService.getListInfo(req, (err, result) => {
      if (err) {
        res.status(500).json(err.message)
        console.log(err)
      } else {
        res.json(result)
      }
    })
  }
}
module.exports = new ListController()
