const {Router} = require('express'),
router = new Router()

require('./routers/user_router')(router)
require('./routers/list_router')(router)

module.exports = router