var sqlite = require('sqlite3').verbose(),
	db = new sqlite.Database('testdb.db');

// db.run("create table if not exists testTable (sno integer not null primary key, name text)");
// db.run("insert into testTable (sno, name) values (null, 'first name')");
// db.run("update testTable set name = 'sabari' where sno > 1 and sno < 4");

// db.each("select * from testTable", function(err, data){
// 	if(err) console.log('Error from Mani '+ err);
// 	console.log("before deleting..")
// 	console.log("sno " + data['sno'] + "<><><><><> name "  + data.name);
// });

// db.run("delete from testTable where sno > 8");

// db.each("select * from testTable", function(err, data){
// 	if(err) console.log('Error from Mani '+ err);
// 	console.log("after deleting");
// 	console.log("sno " + data['sno'] + "<><><><><> name "  + data.name);
	
// });

// db.close();

// console.log("Hello da..");
var vals = {$id : null, $jiraId : "CS-1234", $assigenedDate:"12-12-12", $taskType:"site addition", $noOfSites: 2, $status: "In Progress", $history: "{'12-12-12': 'In Analysis'}"}
createTable(db, "schemaTest")
insertValues(db, "schemaTest", vals)
fetchOne(db, "schemaTest", ['jiraId', 'taskType'], null, function(err, row){
	console.log(row);
})

fetchAll(db, "schemaTest", ['jiraId', 'taskType'], null, function(err, row){
	console.log(row);
})


function createTable(db, tableName){
	db.run("create table if not exists schemaTest (id integer primary key, jiraId text, assigenedDate text, taskType text, noOfSites integer not null, status text not null, history text not null)");
}

function insertValues(db, tableName, values){
	values.$tableName = tableName;
	console.log(values)
	db.run("insert into "+ tableName + " (id, jiraId, assigenedDate, taskType, noOfSites, status, history) values (null, '$jiraId', '$assigenedDate', '$taskType', 3, $status, $history)", {'$history':values.$history, '$status':values.$status});
}

function fetchOne(db, tableName, columns, conditions, callback){
	columns = columns.toString();
	var query = "select "+ columns +" from schemaTest";
	if(conditions) query += "where " + conditions;
	db.get(query, callback)
}

function fetchAll(db, tableName, columns, conditions, callback){
	columns = columns.toString();
	var query = "select "+ "*" +" from schemaTest";
	if(conditions) query += "where " + conditions;
	db.all(query, callback)
}
