// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect(
    "mongodb://localhost:27017/TodoApp",
    { useNewUrlParser: true },
    (err, client) => {
        if (err) {
            return console.log("Unable to connec to MongoDB server", err);
        }
        console.log("Connected to MongoDB");
        const db = client.db("TodoApp");

        // db.collection("Todos")
        //     .findOneAndUpdate(
        //         {
        //             _id: new ObjectID("5c46e7c7e29e7f2ad656ce0a"),
        //         },
        //         {
        //             $set: {
        //                 completed: true,
        //             },
        //         },
        //         {
        //             returnOriginal: false,
        //         },
        //     )
        //     .then(result => {
        //         console.log(result);
        //     });

        db.collection("Users")
            .findOneAndUpdate(
                { _id: new ObjectID("5c46e9dce29e7f2ad656ce0c") },
                {
                    $set: { name: "Antoine Lever" },
                    $inc: { age: 1 },
                },
                {
                    returnOriginal: false,
                },
            )
            .then(result => {
                console.log(result);
            });

        client.close();
        console.log("Connection to MongoDB closed.");
    },
);
