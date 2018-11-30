const express = require('express');
const upload = require('express-fileupload');
var router = express.Router();

var {Doctor} = require('../model/doctor');
var ObjectId = require('mongoose').Types.ObjectId;


router.get('/' , (req, res) => {
   Doctor.find((err, docs) => {
       if (!err) {res.send(docs); }
       else
       { console.log("Error in retriving doctors:" + JSON.stringify(err,undefined,2));}
   });
});

router.get('/:id' ,(req,res) =>{
   if(!ObjectId.isValid(req.params.id))
   return res.status(400).send(`No record with given id :  ${req.params.id}`);

   Doctor.findById (req.params.id , (err , doc) =>
   {
       if(!err) res.send(doc);
       else
       {console.log("Error in retriving doctor:" + JSON.stringify(err,undefined,2));}
   });
});

router.put('/:id' , (req,res)=>{
   if(!ObjectId.isValid(req.params.id))
   return res.status(400).send(`No record wiht given id : + ${req.params.id}`);

   var emp= {

           firstname : req.body.firstname,
           lastname : req.body.lastname,
           speciality : req.body.speciality,
           gender : req.body.gender,
           image:req.body.image,


           degree : req.body.degree,
           college : req.body.college,
           eoc : req.body.eoc,
           eoy : req.body.eoy ,

           clinicname : req.body.clinicname,
           cliniccity : req.body.cliniccity,
           clinicaddress : req.body.clinicaddress

   };

   Doctor.findByIdAndUpdate(req.params.id, {$set :emp }, {new :true} ,(err,doc)=>
   {
       if(!err) res.send(doc);
       else
       {console.log("Error in retriving employees:" + JSON.stringify(err,undefined,2));}
   });

});



router.post("/images",(req, res) => {
       if(req.files)
       {


           var file= req.files.file;
           var filename= file.name;

           file.mv("./images/" + filename , function(err){
               if(err) {
                   console.log(err);
                   res.send("error occured");
               }
               else
               {
               res.send("done");
               }
           })

       }

    }
 );




router.post('/' , (req, res)=>
{
   var emp=  new Doctor({

           email : req.body.email,
           password : req.body.password,

           firstname : req.body.firstname,
           lastname : req.body.lastname,
           speciality : req.body.speciality,
           gender : req.body.gender,
           image:req.body.image,


           degree : req.body.degree,
           college : req.body.college,
           eoc : req.body.eoc,
           eoy : req.body.eoy ,

           clinicname : req.body.clinicname,
           cliniccity : req.body.cliniccity,
           clinicaddress : req.body.clinicaddress,


   });

   emp.save((err, doc)=>{
       if(!err) {res.send(doc);}
       else
       {console.log("Error in doctors save:" + JSON.stringify(err,undefined,2));}
   });
});


router.delete('/:id', (req,res) =>{
   if(!ObjectId.isValid(req.params.id))
   return res.status(400).send(`No record wiht given id : ${req.params.id}` );

   Doctor.findByIdAndRemove(req.params.id, (err,doc)=>
   {
       if(!err) res.send(doc);
       else
       {console.log("Error in retriving employees:" + JSON.stringify(err,undefined,2));}
   })
})


module.exports = router;

