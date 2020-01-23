const db = require("../models");

module.exports = app => {
    app.post("/api/add", function(req,res) {
        db.Burgers.create(req.body, function(data) {
            res.json(data);
        }).catch(function(err) {
            if(err) throw err;
        })
    })
}