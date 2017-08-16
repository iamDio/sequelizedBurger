const connection = require("./connection.js");

let burger = {
	all: function(tableInput, cb){
		connection.query("SELECT * FROM " + tableInput + ";", function (err, result){
			if(err)	throw err;
			cb(result);
			})
		},

	update: function(tableInput, condition, cb){
			connection.query("UPDATE " + tableInput + " SET devoured=true WHERE id = "+condition+";", function(err, result){
				if(err) throw err;
				cb(result);
			})
		},
		
	create: function(tableInput,val,cb){
		connection.query("INSERT INTO " + tableInput+ "(burger_name) VALUES ('"+val+"');", function(err,result){
			if (err)throw err;
			cb(result);
			})
		}
	}



/*let orm = {
//selectAll() method 
selectAll: function(table) {
	let queryString = "SELECT * FROM ??";
	connection.query(queryString,[table], (err, result)=> console.log(result))
},
//insertOne() 


//updateOne()
}*/
module.exports = burger;