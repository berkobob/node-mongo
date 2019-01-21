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
        const db = client.db("TodoApp");
        console.log("Connected to MongoDB server, TodoApp collection.");

        // db.collection("Todos")
        //     .find({
        //         _id: new ObjectID("5c45f34929680d38a1647fad"),
        //     })
        //     .toArray()
        //     .then(
        //         docs => {
        //             console.log("Todos");
        //             console.log(JSON.stringify(docs, undefined, 2));
        //         },
        //         err => {
        //             console.log("Unable to fetch Todos", err);
        //         },
        //     );

        // db.collection("Todos")
        //     .find()
        //     .count()
        //     .then(
        //         count => {
        //             console.log(`Todos count: ${count}`);
        //         },
        //         err => {
        //             console.log("Unable to fetch Todos", err);
        //         },
        //     );

        db.collection("Users")
            .find({ name: "Antoine" })
            .toArray()
            .then(
                docs => {
                    console.log(docs);
                },
                err => {
                    console.log("Unable to fetch Todos", err);
                },
            );

        client.close();
        console.log("Connection to MongoDB closed.");
    },
);
