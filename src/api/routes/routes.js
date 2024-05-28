module.exports = app => {
    const router = require('express'). Router();
    const parfumController= require('../controllers/parfum.controller');
    const magsinController =require ('../controllers/magasin.controller');
    router.post('/parfums', parfumController.create);
    router.get('/parfums', parfumController.findAll);
    router.get('/parfums/:id',parfumController.findOne);
    router.delete('/parfums/:id',parfumController.delete);
    router.put('/parfums/:id',parfumController.update);
    router.post('/magasins', magsinController.createMagasin);
    router.get('/magasins', magsinController.findAllMagasins);
    router.get('/magasins/:id',magsinController.findOne);
    app.use('/api/', router);
}
        