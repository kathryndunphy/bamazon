var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "hwrootbamazon",
    port: 3306,
    
    user: "root"
    password:"Welcome123",
    
    database: "hwrootbamazon"
});

connection.connent(function(err){
    if(err) throw err;
    console.log("connected as id " + connection.threadID);
    queryAllProducts();
    customerOrder();
});

function queryAllProducts() {
    connection.query("SELECT * FROM products", function(err, results) {
        // if (err) throw (err);
        for (var i = 0; i < res.length; i++){
            console.log(res[i].item_id + " | " + res[i].product_name " | " res[i].price);
        }
        console.log("-------------------------------------");
    });
}
//     inquirer
//     .prompt({
//         name: "displayCollection",
//         type: "rawlist",
//         afterConnection: "Are you ready to go wild and "
//     })
//     }))
    
// }

// let customerOrder = ; 

function customerOrder (){
    inquirer
    .prompt([{
        name: "selectproduct",
        type: "input",
        message: "To purchase our exclusive writing thingamajigs, enter the ID number",
        validate: function(itemSelected) {
            if (isNaN(itemSelected) === false) {
                return true;
            }
            return false;
        }
    },
    {
        name: "quantyWanted",
        type: "input",
        message: "We know you'd like them all but we also know you'd have to sneak this naughtiness past your husband. How many would you like to get away with today?"
        validate: function(quantyWanted) {
            if (isNaN(quantyWanted) === false) {
                return true;
            }
            return false;
        }
    }
])
.then(function(runningOrder) {
    // var itemSelected = connection.query(
    //     "UPDATE products SET ? WHERE ?",
    //     [
    //         {
    //             stock:
    //         },
    //         item_id: 
    //     ]
    // );
    // for (var i = 0; i < results.length; i++) {
    //     runningOrder = results[i];
    }
    console.log(runningOrder.sql)
}

//Display/update customer's running order quantity and total
//update inventory from warehouse based on user selections
//ask customer what other products they must want...demand an answer, use threats
//get sued by the customer for harassment, husband divorces pen enthusiast 
//pen enthusiast goes postal, defaults on her server mortgage, serves time
//pen enthusiast marketplace gets shut down
        //drop table, drop database
//connection ended

// update() {}



//     connection.query(
//         "INSERT INTO products SET ?",
//         {
//             selectProduct_name: answer.selectProduct,
//             quantyWanted_name: answer.quantyWanted
//         },

//     )
// })
// }