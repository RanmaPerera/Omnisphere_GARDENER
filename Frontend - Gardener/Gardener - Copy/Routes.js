import MySqlConnection from 'react-native-my-sql-connection';
 
// const express = require("express");
// const mysql = require("mysql");

// const app = express();
// app.use(express.json());

// const db = MySqlConnection.createConnection({
//     user: "root",
//     host: "localhost",
//     password: " ",
//     database: "gardener",
// });

// app.post('/Sign_In',(req,res) => {

//     const UserName = req.body.UserName
//     const Email = req.body.Email
//     const Password = req.body.Password
//     const Confirm_Password = req.body.Confirm_Password

//     db.query("INSERT INTO login_details (UserName,Email,Password,Confirm_Password) VALUES (?,?,?,?) ",
//     [UserName,Email,Password,Confirm_Password],(err,result) => {console.log(err)} )})




// app.listenerCount(3000, () => {
//     console.log("running server");
// });
let config = {
    host:'hostname',
    database:'mydatabase',
    user:'myUser',
    password:'myPassword',
    };
    try{
        const connection = await MySqlConnection.createConnection(config);
        let res = await connection.executeQuery('SELECT * FROM myTable');
        connection.close();
    }catch(err){
        // handle error
    }