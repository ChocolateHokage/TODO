

var express = require('express')

var cookieParser = require('cookie-parser');
const { request } = require('http');
// const Pool = require('mysql/lib/Pool');
// var pool = mysql.createPool({
//   host: '127.0.0.1',
//   user: 'root',
//   password: 'chocolate',
//   database: 'todolist',
//   connectionLimit: 10,
//   port: 3010
// });

app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser('todolistaboba228'))


app.use('/api',require("./router"))
// app.get('/user/all', (req, res) => {
//   let start = req.query.start ?? 0
//   let qty = req.query.qty ?? 10
//   pool.query('SELECT user_id, login FROM user LIMIT ?,?', [start, qty], (err, result) => {
//     if (err) {
//       console.log(err)
//       res.status(523).json(err) //523 Origin Is Unreachable («источник недоступен»)
//     }
//     else res.json(result)
//   })

// })
// app.use("/api",require('./router'))
// app.get('/user/:id', (req, res) => {
//   pool.query('SELECT user_id, login FROM user WHERE user_id = ?', [req.params.id], (err, result) => {
//     if (err) {
//       console.log(err)
//       res.status(523).json(err)
//     }
//     else
//       res.json(result)
//   })
// })

// app.post('/user', (req, res) => {
//   let token = md5(req.body.password)
//   pool.query('INSERT INTO user (login, token) VALUES (?, ?)', [req.body.login, token], (err_insert, result) => {
//     if (err_insert) {
//       console.log(err_insert)
//       res.status(501).json(err_insert) //501 Not Implemented («не реализовано»)[2][3];
//     }
//     else
//       pool.query('SELECT user_id, login FROM user where user_id = ? ', result.insertId, (err_select, user) => {
//         if (err_select) {
//           console.log(err_select)
//           res.status(500).json(err_select)
//         }
//         else
//           res.json(user)
//       })
//   })
// })

// //изменение логина и пароля
// app.put('/user',checkAuth, (req, res) => {
//   let obj = {
//     login: req.body.login,
//     token: md5(req.body.password)
//   }
//   pool.query("UPDATE user SET ?? WHERE user_id=?", [obj, req.body.user_id], (err_update, result) => {
//     if (err_update) {
//       console.log(err_update)
//       res.status(501).json(err_update)
//     }
//     else
//       pool.query('SELECT user_id, login FROM user where user_id = ?', req.body.user_id, (err_select, user) => {
//         if (err_select) {
//           console.log(err_select)
//           res.status(500).json(err_select)
//         }
//         else
//           res.json(user)
//       })
//   })
// })


// //удаление пользователя
// app.delete('/user',checkAuth, (req, res) => {
//   pool.query('DELETE FROM user WHERE user_id=?', req.body.user_id, (err_delete, result) => {
//     if (err_delete) {
//       console.log(err_delete)
//       res.status(501).json(err_delete)
//     }
//     else
//       res.send('success')
//   })
// })


// // поиск по строке
// //work
// app.get('/list/search', (req, res) => {
//   pool.query('SELECT * FROM list WHERE name LIKE ?', [req.query.q + '%'], (err_select, result) => {
//     if (err_select) {
//       console.log(err_select)
//       res.status(523).json(err_select)
//     }
//     else res.json(result)
//   })
// })

// //work
// app.get('/list/all', (req, res) => {
//   pool.query('SELECT * FROM list', (err_select, result) => {
//     if (err_select) {
//       console.log(err_select)
//       res.status(523).json(err_select)
//     }
//     else
//       res.json(result)
//   })
// })

// //work
// app.get('/list/:id', (req, res) => {
//   pool.query('SELECT * FROM list WHERE todo_id = ?', req.params.id, (err_select, result) => {
//     if (err_select) {
//       console.log(err_select)
//       res.status(523).json(err_select)
//     }
//     else res.json(result)
//   })
// })



// //work
// app.post('/list', checkAuth, (req, res) => {
//   pool.query('INSERT INTO list (name, user_id, description) VALUES (?, ?, ?)', [req.body.name, req.body.user_id, req.body.description], (err_insert, result) => {
//     if (err_insert) {
//       console.log(err_insert)
//       res.status(501).json(err_insert)
//     } else
//       pool.query('SELECT * FROM list WHERE todo_id=?', result.insertId, (err_select, list) => {
//         if (err_select) {
//           console.log(err_select)
//           res.status(501).json(err_select)
//         }
//         else
//           res.json(list)
//       })
//   })
// })

// //work
// app.put('/list', checkAuth, (req, res) => {
//   pool.query("UPDATE list SET ? WHERE todo_id =?", [req.body, req.body.todo_id], (err_update, result) => {
//     if (err_update) {
//       console.log(err_update)
//       res.status(501).json(err_update)
//     }
//     else
//       pool.query('SELECT * FROM list WHERE todo_id = ?', req.body.todo_id, (err_select, list) => {
//         if (err_select) {
//           console.log(err_select)
//           res.status(501).json(err_select)
//         }
//         else res.json(list)
//       })
//   })
// })

// //work
// app.delete('/list',checkAuth, (req, res) => {
//   pool.query('DELETE FROM list WHERE todo_id=?', req.body.todo_id, (err_delete, result) => {
//     if (err_delete) {
//       console.log(err_delete)
//       res.status(501).json(err_delete)
//     }
//     else res.send('Success')
//   })
// })

// app.post('/login', (req, res) => {
//   pool.query('SELECT login, token FROM user WHERE login=? and token=?', [req.body.login, md5(req.body.password)], (err_select, result) => {
//     if (err_select) {
//       console.log(err_select)
//       res.status(500).json(err_select)
//     }
//     else {
//       if (result.length > 0) {
//         res.cookie('token', md5(req.body.password))
//         res.json('success')
//       }
//       else {
//         res.status(404).send()
//       }
//     }
//   })
// })

// app.delete('/logout', checkAuth, (req, res) => {
//   res.clearCookie('token').send("success")
// })



// function checkAuth(req, res, next) {
//   pool.query('SELECT token from user where token=?',[req.cookies.token],(err_select,result)=>{
//     if(err_select){
//       console.log(err_select)
//       res.status(500).json(err_select)
//     }
//     else{
//       if (result.length>0)
//         next()
//       else
//         res.status(401).json({message:"вы не авторизованны"})
//     }
//   })
// }




// кароче, сделай получение всех записей туду, получение одной записи туду по айди, сделай получение записей туду по названию (типо поиск тудушки). пример - есть список: помидоры, помойка, печенье. если искать записи по имени 'п', то выводит все записи, так как все начинаются с этой будквы, если искать по 'пом', то выводит две записи, так как именно столько начиаются так, ну и если поиск по 'помидор', то выводится одна запись так как одно совпадение. надеюсь, ты понял. ну и редактирование и удаление тудушек. а так же изменение статуса туду









app.listen(3000, () => {
  console.log('Server started')
})
