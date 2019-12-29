const Data = require('./public/mock/data.json')

module.exports={
  lintOnSave:false,
  devServer:{
    before(app){
      app.get('/api/list',(req,res)=>{
        res.json({
          errCode:0,
          list:Data
        })
      })

      const UserData = [
        {
          username: 'devin',
          pwd: '123'
        }
      ]

      app.get('/api/login', (req, res) => {
        let { username, pwd } = req.query;
        let flag = UserData.some(item => item.username === username && item.pwd === pwd)
        if (flag) {
          res.json({
            errCode: -1,
            token: `bawei_${username}_${Date.now()}`
          })
        } else {
          res.json({
            errCode: 0,
          })
        }
      })

    }
  }
}