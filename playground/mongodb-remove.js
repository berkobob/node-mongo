const { mongoose } = require("../server/db/mongoose");
const { Todo } = require("../server/models/todo");
const { User } = require("../server/models/user");
const { ObjectID } = require("mongodb");

// Todo.remove({}).then(result => console.log(result));

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findByIdAndRemove("5c471bc11d259271c7147177").then(todo => {
    console.log(todo);
});
