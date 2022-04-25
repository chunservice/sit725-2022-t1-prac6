let client = require("../dbConnect");
let projectsCollection;
setTimeout(() => {
    projectCollection = client.mongoClient.db().collection("fruits");
}, 2000)

const insertProjects = (project,callback) => {
    projectCollection.insert(project,callback); // insert into project
}

// getProjects function. MongoDB query, whatever variable storing in projectCollection, find with no criteria, getting all objects in the collection. Return as an array.
const getProjects =(callback) => {
    projectCollection.find({}).toArray(callback);
}

// export retrieveProjects and createProjects functions
module.exports = {
    insertProjects, getProjects
}