var express = require("express");
var beanRoute = express.Router();
var Bean = require("../models/bean-schema");

beanRoute

.get("/", function (req, res) {
    Bean.find(req.query, function (err, beanArray) {
        res.send(beanArray);
    })
})

.post("/", function (req, res) {
    newBean = new Bean(req.body);
    newBean.save(function (err, savedBean) {
        res.send(savedBean);
    });
})

.delete("/:id", function(req, res){
    Bean.findByIdAndRemove(req.params.id, function(err, deletedBean){
       res.send(deletedBean)
    })
})

.put("/:id", function(req, res){
    Bean.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, editedBean){
        res.send(editedBean); 
    })
})

module.exports = beanRoute;