
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


exports.fruit = function(req, res) {
    
    console.log('called fruits');
	mongo.connect("mongodb://admin:123@ds123351.mlab.com:23351/shoppingbuddy", function (err, db) {
   
     if(err) throw err;
    db.collection('item', function(err, collection) {
       collection.find({"category":"Friuts"}).toArray(function(err, items) {
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

exports.vege = function(req, res) {
    
    console.log('called Vegitables');
	mongo.connect("mongodb://admin:123@ds123351.mlab.com:23351/shoppingbuddy", function (err, db) {
   
     if(err) throw err;
    db.collection('item', function(err, collection) {
       collection.find({"category":"Vegetables"}).toArray(function(err, items) {
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

exports.meat = function(req, res) {
    
    console.log('called Meat');
	mongo.connect("mongodb://admin:123@ds123351.mlab.com:23351/shoppingbuddy", function (err, db) {
   
     if(err) throw err;
    db.collection('item', function(err, collection) {
       collection.find({"category":"Meat"}).toArray(function(err, items) {
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

exports.beverage = function(req, res) {
    
    console.log('called Beverages');
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

exports.dairy = function(req, res) {
    
    console.log('called Dairy');
	mongo.connect("mongodb://admin:123@ds123351.mlab.com:23351/shoppingbuddy", function (err, db) {
   
     if(err) throw err;
    db.collection('item', function(err, collection) {
       collection.find({"category":"Dairy"}).toArray(function(err, items) {
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

exports.canned= function(req, res) {
    
    console.log('called Canned Goods');
	mongo.connect("mongodb://admin:123@ds123351.mlab.com:23351/shoppingbuddy", function (err, db) {
   
     if(err) throw err;
    db.collection('item', function(err, collection) {
       collection.find({"category":"Canned"}).toArray(function(err, items) {
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

exports.paper = function(req, res) {
    
    console.log('called Paper Items');
	mongo.connect("mongodb://admin:123@ds123351.mlab.com:23351/shoppingbuddy", function (err, db) {
   
     if(err) throw err;
    db.collection('item', function(err, collection) {
       collection.find({"category":"Paper"}).toArray(function(err, items) {
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

exports.personal = function(req, res) {
    
    console.log('called Personal Items');
	mongo.connect("mongodb://admin:123@ds123351.mlab.com:23351/shoppingbuddy", function (err, db) {
   
     if(err) throw err;
    db.collection('item', function(err, collection) {
       collection.find({"category":"Personal"}).toArray(function(err, items) {
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

exports.other = function(req, res) {
    
    console.log('called Other');
	mongo.connect("mongodb://admin:123@ds123351.mlab.com:23351/shoppingbuddy", function (err, db) {
   
     if(err) throw err;
    db.collection('item', function(err, collection) {
       collection.find({"category":"Other"}).toArray(function(err, items) {
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
