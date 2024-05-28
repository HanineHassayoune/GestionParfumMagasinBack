const db = require('../../database/db.config');
const Parfum = db.parfums;
//create a new parfum
exports.create=(req, res) => {
//récupération des données
const {imageParfum,nomParfum, prix, volume, type, marque,idMagasin } = req.body;
if(!imageParfum || !nomParfum || ! prix || ! volume || !type || !marque|| !idMagasin) {
return res.status(400).send({
message: 'content can not be empty' })
}

const newParfum = new Parfum({
    imageParfum:imageParfum,
    nomParfum: nomParfum,
    prix: prix,
    volume: volume,
    type: type,
    marque: marque,
    idMagasin:idMagasin
});
newParfum.save(newParfum).then((data) => {
    res.status(200).send({
    message: 'successufully created Parfums'
});
}).catch(err =>{
    console.log(err);
});
}


exports.findAll = (req, res)=> {
    Parfum.find({
    }).then((data) => {
    res.send(data);
    }).catch((err) => {
    console.log(err);
    });
    }

//consultation par id
exports.findOne = (req, res) => {
    const id = req.params.id;
    if(!id) {
     res.status(400).send({ message: "content is required "});
    }
    Parfum.findById(id).then((data) => {
        res.send(data); 
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ message: 'Error while fetching Parfums', error: err });
        
    });
 }

//suppression par id 
exports.delete = (req, res) => {
    const id = req.params.id;
    if(!id) {
     res.status(400).send({ message: "content is required "});
    }
    Parfum.findByIdAndDelete(id).then((data) => {
     if(!data){
         res.status(404).send({ message: "Parfum not found "});  
     }
     res.status(200).send({ message: "Parfum was successfull deleted "});
    })
  };


//update 
exports.update =(req, res) =>{
    const id = req.params.id;
    const {imageParfum,nomParfum, prix, volume, type, marque,idMagasin} = req.body;
    if(!imageParfum ||!nomParfum || ! prix || ! volume || !type || !marque|| !idMagasin)  {
        res.status(400).send({ message: "content is required "});
       }
    Parfum.findByIdAndUpdate(id,
       {
        imageParfum:imageParfum,
        nomParfum: nomParfum,
        prix: prix,
        volume: volume,
        type: type,
        marque: marque,
        idMagasin:idMagasin},
       {useFindAndModify: false}).then((data) =>{
        if(!data){
            res.status(404).send({ message: `Can not update Parfum with id=${id}`});
        }
        res.status(200).send({ message: `Parfum was successfully updated`});
    }).catch((err) =>{
        console.log(err);
    });
 }


