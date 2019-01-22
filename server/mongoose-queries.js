const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");
const { ObjectID } = require("mongodb");

// var id = "5c47100264c00560a65bab2f";

// console.log(ObjectID.isValid(id));

// Todo.find({ _id: id }).then(todos => {
//     console.log("Todos", todos);
// });

// Todo.findOne({ _id: id }).then(todo => {
//     console.log(todo);
// });

// Todo.findById(id)
//     .then(todo => {
//         if (!todo) {
//             return console.log("ID not found");
//         }
//         //console.log("Todo By ID:", todo);
//     })
//     .catch(e => {
//         console.log(e);
//     });

var user = "5c46f78f462194420f1b66d2";

User.findById(user)
    .then(usr => {
        if (!usr) {
            return console.log("User not found");
        }
        console.log(usr._doc);
    })
    .catch(e => {
        console.log(e);
    });
