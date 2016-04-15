var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('mydb.db');
var check;
db.serialize(function() {

  db.run("CREATE TABLE if not exists user_info (info TEXT)");
  var stmt = db.prepare("INSERT INTO user_info VALUES (?)");
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
  }
  stmt.finalize();

  db.each("SELECT rowid AS id, info FROM user_info", function(err, row) {
      console.log(row.id + ": " + row.info);
  });
});

db.close();

// var sqlite3 = require('sqlite3').verbose();  
// var file = "testdb.db";  
// var db = new sqlite3.Database(file);  
// db.all("SELECT name FROM marks", function(err, rows) {  
//         rows.forEach(function (row) {  
//             console.log(row.name);  
//         })  
//     });   
// db.close();  

//http://www.w3resource.com/node.js/nodejs-sqlite.php