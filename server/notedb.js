var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('notedb', server);

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'nodedb' database");
        db.collection('notes', {strict: true}, function(err, collection) {
            if(err) {
                console.log("The notes collection does not exist. Creating it");
                //populateDB();
            }
        });
    }
});

exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving note ' + id);
    db.collection('notes', function (err, collection){
        collection.findOne({'_id': new BSON.ObjectID(id)}, function (err, item) {
            res.send(item);
        });
    });
};

exports.findAll = function(req, res) {
    db.collection('notes', function(err, collection){
        collection.find().toArray(function(err, items){
            res.send(items);
        });
    });
};

exports.addNote = function(req, res){
    var note = req.body;
    console.log('Adding note: ' + JSON.stringify(note));
    db.collection('notes', function(err, collection){
       collection.insert(note, {safe:true}, function(err, result) {
           if (err) {
               res.send({'error':'An error has occurred'});
           } else {
               console.log('Success: ' + JSON.stringify(result[0]));
               res.send(result[0]);
           }
       });
    });
};

exports.updateNote = function(req, res) {
    var id = req.params.id;
    var note = req.body;
    console.log('Updating note: ' + id);
    console.log(JSON.stringify(note));
    db.collection('notes', function(err, collection) {
        collection.update({'_id': new BSON.ObjectID(id)}, note, {safe:true}, function(err, result){
            if(err) {
                console.log('Error updating note: ' + err);
                res.send({'error': 'An error has occurred' });
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(note);
            }
        });
    });
};

exports.deleteNote = function (req, res) {
    var id = req.params.id;
    console.log('Deleting note: ' + id);
    db.collection('notes', function (err, collection) {
       collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function (err, result){
            if(err) {
                res.send({'error': 'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
       });
    });
};

