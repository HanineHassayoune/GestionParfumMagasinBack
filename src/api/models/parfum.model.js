module.exports = mongoose => {
    const Schema = mongoose.Schema;
    let ParfumSchema= new Schema ({
        imageParfum:{ type: String, required: true },
        nomParfum: { type: String, required: true },
        prix: { type: Number, required: true },
        volume: { type: Number, required: true },
        type: { type: String, required: true },
        marque: { type: String, required: true },
        idMagasin: { type: String, required: true }
    },{

        timestamps: true
    });
    ParfumSchema.method('toJSON', function(){
        const{__v,_id,...object}= this.toObject();
        object.id = _id;
        return object;
    })
    const Parfum = mongoose.model ('Parfum', ParfumSchema);
    return Parfum;
}




    
   
    
    
   
    
    
