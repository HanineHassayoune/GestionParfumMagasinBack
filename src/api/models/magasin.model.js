module.exports = mongoose => {
    const Schema = mongoose.Schema;

    const MagasinSchema = new Schema({
        nomMagasin: { type: String, required: true },
        adresse: { type: String, required: true },
    }, {
        timestamps: true
    });

    MagasinSchema.method('toJSON', function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Magasin = mongoose.model('Magasin', MagasinSchema);
    return Magasin;
};
