const db = require("../models");

module.exports = app => {
    app.get("/",(req,res) => {
        db.Burgers.findAll({}).then(function(data){
            res.render("index", {data: data})
        }).catch(function(err){
            if(err) throw err;
        })
    
    });

    app.get("/api/:id", (req,res) => {
        db.Burgers.update({
            devoured: true
        }, {
            where: {
                id: req.params.id
            }
        }).then(function(data){
            res.json(data);
        }).catch(err => console.log(err));
    });
}