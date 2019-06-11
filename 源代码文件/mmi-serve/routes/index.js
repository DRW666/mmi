var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = './public/list';





/* GET home page. */
router.get('/list', function(req, res) {
  // res.render('index', { title: 'Express' });
  res.json(require("../goodsList.json"))
});
router.get('/category', function(req, res) {
  // res.render('index', { title: 'Express' });
  res.json(require("../categoryList.json"))
});
router.get('/shoppingCar', function(req, res) {
  // res.render('index', { title: 'Express' });
  res.json(require("../shoppingCar.json"))
});
router.get('/user', function(req, res) {
  // res.render('index', { title: 'Express' });
  res.json(require("../user.json"))
});


router.post('/shoppingCar', function(req, res) {
  let params =req.body;
  console.log(params)
    fs.readFile("./shoppingCar.json", function (err, data) {//读取json，读出来的是二进制
            console.log(data)
            if (err) {
                return console.error(err);
            }
            var dataString = data.toString();  //二进制的数据转换为字符串
            var dataJson = JSON.parse(dataString); //字符串转化为json对象
            dataJson = params;  //将传来的对象push进json文件
            var str = JSON.stringify(dataJson);
            //因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
            fs.writeFile("./shoppingCar.json", str, function(err) {
                  if (err) {
                      console.error(err);
                  }
                  console.log("添加成功，OK");
                  res.json({
                      dataJson
                  });
            });    
    })
})

router.post("/user", (req, res) => {//注册功能：将用户名密码保存至json文件
  let params = req.body;
  fs.readFile("./user.json", function (err, data) {//读取json，读出来的是二进制
      if (err) {
          return console.error(err);
      }
      var dataString = data.toString();  //二进制的数据转换为字符串
      var dataJson = JSON.parse(dataString); //字符串转化为json对象
      
      dataJson.user.push(params);  //将传来的对象push进json文件
      var str = JSON.stringify(dataJson);
      //因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
      fs.writeFile("./user.json", str, function (err) {
          if (err) {
              console.error(err);
          }
          console.log("用户注册操作，OK");
          res.json({
              "state": 1
          });
      });
  })
});

module.exports = router;
