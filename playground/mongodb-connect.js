// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

var obj = new ObjectID();
console.log(obj);

MongoClient.connect(
    "mongodb://localhost:27017/TodoApp",
    { useNewUrlParser: true },
    (err, client) => {
        if (err) {
            return console.log("Unable to connect to MongoDB server", err);
        }
        console.log("Connected to MongoDB server");
        const db = client.db("TodoApp");

        // db.collection("Todos").insertOne(
        //     {
        //         test: "Something to do",
        //         completed: false,
        //     },
        //     (err, result) => {
        //         if (err) {
        //             return console.log("Unable to insert todo", err);
        //         }
        //         console.log(JSON.stringify(result.ops, undefined, 2));
        //     },
        // );

        // db.collection("Users").insertOne(
        //     {
        //         name: "Antoine",
        //         age: 48,
        //         location: "UK",
        //     },
        //     (err, result) => {
        //         if (err) {
        //             return console.log("Unable to inser user", err);
        //         }
        //         console.log(result.ops);
        //     },
        // );

        client.close();
        console.log("Connection to MongoDB closed.");
    },
);
