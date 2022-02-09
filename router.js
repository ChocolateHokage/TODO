const {Router} = require('express'),
router = new Router()

require('./routers/user_router')(router)


module.exports = router