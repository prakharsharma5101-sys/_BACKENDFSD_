const database = db.getSiblingDB("studentDB");

if (!database.getCollectionNames().includes("students")) {
    database.createCollection("students");
    print("Students collection created successfully!");
} else {
    print("Students collection already exists!");
}

printjson(database.getCollectionNames());