const db = require('../../database/db.config');
const Magasin = db.magasins;

//create a new magasin
exports.createMagasin = (req, res) => {
  //récupération des données
const {nomMagasin, adresse} = req.body;
if(!nomMagasin || ! adresse) {
return res.status(400).send({
message: 'content can not be empty' })
}

const newMagasin = new Magasin({
    nomMagasin: nomMagasin,
    adresse: adresse,   
});
newMagasin.save(newMagasin).then((data) => {
    res.status(200).send({
    message: 'successufully created Magasin'
});
}).catch(err =>{
    console.log(err);
});
};


//get all magasins from database 
exports.findAllMagasins = (req, res) => {
    Magasin.find({
    }).then((data) => {
    res.send(data);
    }).catch((err) => {
    console.log(err);
    });
    
};



//consultation par id
exports.findOne = (req, res) => {
    const id = req.params.id;
    if(!id) {
     res.status(400).send({ message: "content is required "});
    }
    Magasin.findById(id).then((data) => {
        res.send(data); 
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ message: 'Error while fetching Magasin', error: err });
        
    });
 }



 





