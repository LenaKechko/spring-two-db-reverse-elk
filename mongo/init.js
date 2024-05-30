db = db.getSiblingDB('customers');

db.createCollection('customer');

db.customer.insertMany([
    {
        "firstname" : "Paul",
        "lastname" : "Gascoine",
        "createDate": new ISODate()
    },
    {
        "firstname" : "Alan",
        "lastname" : "Shearer",
        "createDate": new ISODate()
    },
    {
        "firstname" : "Sasha",
        "lastname" : "Rybak",
        "createDate": new ISODate()
    },
    {
        "firstname" : "Elena",
        "lastname" : "Faer",
        "createDate": new ISODate()
    }
]);