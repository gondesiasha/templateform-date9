var hapi=require('@hapi/hapi');
require("dotenv").config();
var mysql=require('mysql');
var Joi=require('@hapi/joi');



var server=new hapi.Server({
    host:'localhost',
    port:9100,
    routes : {
            cors : true
        }
});

server.route({
    method:"GET",
    path:"/api/data",
    handler:(request,reply)=>{
      return new Promise((resolve,reject)=>{
            var connection = mysql.createConnection({
                host     : process.env.DB_HOST,
                user     : process.env.DB_USER,
                password : process.env.DB_PASSWORD,
                database : process.env.DB_NAME
              });
              connection.connect();
              connection.query(`SELECT * from studentdata`, function (error,data, fields) {
                if (error) reject(error);
                resolve(data);
              }); 
              connection.end();
        })
      } 
});

server.route({
    method:"POST",
    path:"/api/data",
    options:{
        validate:{
            payload:{
                fullname:Joi.string().min(4).required(),
                lastname:Joi.string().min(4).required(),
                Email:Joi.string().email().required(),
                date:Joi.string().required(),
                phone:Joi.string().required(),
                // mobile:Joi.number().min(10).required(),
                land:Joi.string().min(10).required(),
                states:Joi.string().required(),
                colleges:Joi.string().required(),
                
               
            }
        }
    },
   
    handler:(request,reply)=>{        
    
        var newstudentdata=request.payload;
            return new Promise((resolve,reject)=>{
                var connection = mysql.createConnection({
                    host     : process.env.DB_HOST,
                    user     : process.env.DB_USER,
                    password : process.env.DB_PASSWORD,
                    database : process.env.DB_NAME
                  });
                  connection.connect();
         
                  connection.query(`INSERT INTO studentdata(fullname,lastname,Email,date,phone,land,states,colleges) VALUES
                  ('${newstudentdata.fullname}',  '${newstudentdata.lastname}','${newstudentdata.Email}',
                  '${newstudentdata.date}','${newstudentdata.phone}','${newstudentdata.land}',
                  '${newstudentdata.states}','${newstudentdata.colleges}')`, function (error, data, fields) {
                    if (error) reject(error);
                    resolve(data);
                  });
                   
                  connection.end();
            })
            
        }
    
        
    });



server.start((err)=>{
    if(err) throw err;
    
})
console.log("Server is started"+ server.info.uri)
