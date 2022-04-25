var express = require("express");
var router = express.Router();
let controller = require("../controller");

// call retrieveProjects from controller
router.get('/', (req, res) => {
    controller.projectController.retrieveProjects(req,res) 
})

// call createProjects from controller
router.post('/', (req,res) => {
    controller.projectController.createProjects(req,res)
})

module.exports = router;