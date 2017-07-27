
var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

//var MongoClient = require('mongodb').MongoClient;

// Connect to the db
mongo.connect("mongodb://admin:123@ds147072.mlab.com:47072/shpbuddy", function (err, db) {
   
     if(err) throw err;

     //Write databse Insert/Update/Query code here..
      Db = db;          
});
/*
Db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'shop' database");
    }
	else{
		console.log(err);
	}
});
*/

exports.test = function(req, res) {
    var id = req.params.id;
    var age = req.params.age;
    //var name = req.data.name;
	mongo.connect("mongodb://admin:123@ds123351.mlab.com:23351/shoppingbuddy", function (err, db) {
   
     if(err) throw err;
	console.log('logged as: ' + id);
    console.log('age: ' + age);
    db.collection('Login', function(err, collection) {
       collection.findOne({'name':id}, function(err, item) {
		   console.log('item: ' + item);
        res.send(item);
        });
    });	
     //Write databse Insert/Update/Query code here..
      //Db = db; 
	db.close();	  
});
    //console.log('logged as: ' + req.data.name);
    
};

exports.fruit = function(req, res) {
    
    //var name = req.data.name;

    //console.log('logged as: ' + req.data.name);
    console.log('called fruits');
	mongo.connect("mongodb://admin:123@ds123351.mlab.com:23351/shoppingbuddy", function (err, db) {
   
     if(err) throw err;
    //console.log('age: ' + age);
    db.collection('item', function(err, collection) {
       collection.find().toArray(function(err, items) {
          if (err) {
            console.log(err);
          } else {
            console.log(items);
            //resolve(items);
          }          
        
	   //var a = cursor.toArray();
	   //var b = JSON.stringify(a)
	   console.log('length: ' +items);
        res.send(items);
        });
    });
	});
};

exports.vege = function(req, res) {
    
    //var name = req.data.name;

    //console.log('logged as: ' + req.data.name);
    console.log('called fruits');
	mongo.connect("mongodb://admin:123@ds123351.mlab.com:23351/shoppingbuddy", function (err, db) {
   
     if(err) throw err;
    //console.log('age: ' + age);
    db.collection('item', function(err, collection) {
       collection.find().toArray(function(err, items) {
          if (err) {
            console.log(err);
          } else {
            console.log(items);
            //resolve(items);
          }          
        
	   //var a = cursor.toArray();
	   //var b = JSON.stringify(a)
	   console.log('length: ' +items);
        res.send(items);
        });
    });
	});
};