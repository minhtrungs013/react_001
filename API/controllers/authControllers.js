const connection = require("../config/db");

const authController =  {
    // register
    registerUser:  (req, res) => {
        const user = req.body;
        query = "insert into user (username, password, email) values(?,?,?)";
        connection.query(query,[user.username, user.password, user.email], (err, result) => {
          if (!err) {
              res.status(200).json({message: 'ok nha'});
          }else {
            res.status(500).json(err);
          }
        })
      },
      


};
module.exports = authController;