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
        //     .deleteMany({ text: "Eat Lunch" })
        //     .then(result => {
        //         console.log(result);
        //     });

        // db.collection("Todos")
        //     .deleteOne({ text: "Eat Lunch" })
        //     .then(result => {
        //         console.log(result);
        //     });

        // db.collection("Todos")
        //     .findOneAndDelete({ completed: false })
        //     .then(result => {
        //         console.log(result);
        //     });

        db.collection("Users").deleteMany({ name: "Antoine" });

        db.collection("Users")
            .findOneAndDelete({
                _id: new ObjectID("5c461bd2fbe1e93a17c9985b"),
            })
            .then(results => {
                console.log(JSON.stringify(results));
            });

        client.close();
        console.log("Connection to MongoDB closed.");
    },
);
