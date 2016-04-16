var sqlite = require('sqlite3').verbose(),
	db = new sqlite.Database('testdb.db');

db.run("create table if not exists testTable (sno integer not null primary key, name text)");
db.run("insert into testTable (sno, name) values (null, 'first name')");
db.each("select * from testTable", function(err, data){
	if(err) console.log('Error from Mani '+ err);
	console.log("sno " + data['sno'] + "<><><><><> name "  + data.name);
	// console.log(data.name)
});

db.close();

console.log("Hello da..");