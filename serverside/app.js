const express = require('express');

const bodyParser  = require('body-parser');

const mongoose = require('mongoose');
//specify where to find the schema
const announcement = require('./models/announcement')
// connect and display the status 
mongoose.connect('mongodb://localhost:27017/IT6203Group1', { useNewUrlParser: true })

//mongoose.connect('mongodb+srv://rvaidya1:Revatee1994@IT6203-1kssw.mongodb.net/IT6203Group1', { useNewUrlParser: true })

  .then(() => { console.log("connected"); })
  .catch(() => { console.log("error connecting"); });

const app = express();
// use the following code on any request that matches the specified mount path

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use((req, res, next) => {
   console.log('This line is always called');
   res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE'); //allowable methods
   res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
   next();
});


app.get('/announcements', (req, res, next) => {
  //call mongoose method find (MongoDB db.Students.find())
  announcement.find() 
  //if data is returned, send data as a response 
  .then(data => res.status(200).json(data))
  //if error, send internal server error
  .catch(err => {
  console.log('Error: ${err}');
  res.status(500).json(err);
});

});

// serve incoming post requests to /students
app.post('/announcements', (req, res, next) => {
    
// create a new student variable and save request’s fields 
const Announcement = new announcement({
  title: req.body.title,
  message: req.body.message
});
//send the document to the database 
Announcement.save()
  //in case of success
  .then(() => { console.log('Success');})
  //if error
  .catch(err => {console.log('Error:' + err);});

  });

  // serve incoming put requests to /students
  app.put('/announcements/:id', (req, res, next) => {
    console.log("id: " + req.params.id)
    // check that the parameter id is valid 
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
      //find a document and set new first and last names
      announcement.findOneAndUpdate({_id: req.params.id},
        {$set:{title : req.body.title,
          message : req.body.message}},{new:true}) 
       .then((Announcement) => {
          if (Announcement) { //what was updated
            console.log(Announcement);
          } else {
            console.log("no data exist for this id");
          }
       })
      .catch((err) => {
        console.log(err);
       });
   } else {
     console.log("please provide correct id");
   }
    
  });

//:id is a dynamic parameter that will be extracted from the URL
app.delete("/announcements/:id", (req, res, next) => {
  announcement.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json("Deleted!");
  });
});


//to use this middleware in other parts of the application
module.exports=app;
