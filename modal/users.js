// const Sequelize = require('../db/connect');
// const sequelize = require('sequelize');
// const Users = Sequelize.define("usersDetails",{
//     id:{
//         type:sequelize.INTEGER,
//         autoIncrement:true,
//         primaryKey:true,
//         allowNull:false,
//     },
//     firstname:{
//         type:sequelize.STRING,
//         allowNull:false
//     },
//     lastname:{
//         type:sequelize.STRING,
//         allowNull:false  
//     },
//     email:{
//         type:sequelize.STRING,
//         unique:true,
//         allowNull:false, 
//     },
//     password:{
//      type:sequelize.STRING,
//      allowNull:false,
//     },
//     gender:{
//         type:sequelize.STRING,
//         allowNull:true
//     },
//     dob:{
//         type:sequelize.STRING,
//         allowNull:true
//     },
//     address:{
//         type:sequelize.STRING,
//         allowNull:true,
//     },
//     city:{
//         type:sequelize.STRING,
//         allowNull:true
//     },
//     state:{
//         type:sequelize.STRING,
//         allowNull:true,
//     },
//     zipcode:{
//         type:sequelize.TEXT,
//         allowNull:true,
//     },
//     profilepic:{
//         type:sequelize.CHAR,
//         allowNull:true,
//     },
//     images:{
//         type:sequelize.STRING,
//         allowNull:true
//     },
//     videos:{
//       type:sequelize.CHAR,
//       allowNull:true,  
//     },
//    carname:{
//     type:sequelize.CHAR,
//     allowNull:true,
//    },
//    series:{
//     type:sequelize.CHAR,
//     allowNull:true,
//    },
//    chassis:{
//     type:sequelize.CHAR,
//     allowNull:true
//    },
//    engine:{
//     type:sequelize.CHAR,
//     allowNull:true
//    },
//    model:{
//     type:sequelize.CHAR,
//     allowNull:true,
//    },
//    generation:{
//     type:sequelize.STRING,
//     allowNull:true
//    },
//    drivetrain:{
//     type:sequelize.STRING,
//     allowNull:true
//    },
//    employment:{
//     type:sequelize.CHAR,
//     allowNull:true
//    }
// });
// module.exports=Users;