
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


exports.promotion = function(req, res) {
    
    console.log('called fruits');
	mongo.connect("mongodb://admin:123@ds123351.mlab.com:23351/shoppingbuddy", function (err, db) {
   
     if(err) throw err;
    db.collection('item', function(err, collection) {
       collection.find().toArray(function(err, items) {
          if (err) {
            console.log(err);
          } else {
            console.log(items);
          }          
	   console.log('length: ' +items);
        res.send(items);
        });
    });
	});
};

exports.discount = function(req, res) {
    
    console.log('called Discounts');
	mongo.connect("mongodb://admin:123@ds123351.mlab.com:23351/shoppingbuddy", function (err, db) {
   
     if(err) throw err;
    db.collection('promotion', function(err, collection) {
       collection.find().toArray(function(err, items) {
          if (err) {
            console.log(err);
          } else {
            console.log(items);
          }          
        
	   //console.log('length: ' +items);
        res.send(items);
        });
    });
	});
};

exports.offer = function(req, res) {
    
    console.log('called Meat');
	mongo.connect("mongodb://admin:123@ds123351.mlab.com:23351/shoppingbuddy", function (err, db) {
   
     if(err) throw err;
    db.collection('item', function(err, collection) {
       collection.find().toArray(function(err, items) {
          if (err) {
            console.log(err);
          } else {
            console.log(items);
          }          
        
	   console.log('length: ' +items);
        res.send(items);
        });
    });
	});
};


