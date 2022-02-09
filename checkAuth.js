function checkAuth(req, res, next) {
  pool.query('SELECT token from user where token=?',[req.cookies.token],(err_select,result)=>{
    if(err_select){
      console.log(err_select)
      res.status(500).json(err_select)
    }
    else{
      if (result.length>0)
        next()
      else
        res.status(401).json({message:"вы не авторизованны"})
    }
  })
}