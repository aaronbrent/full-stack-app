var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BeanSchema = new Schema(
{
    name: String,
    species: String,
    variety: String,
    region: String,
    roast: String,
    flavorNotes: [Number],
    description: String
    
}
);

var Bean = mongoose.model('Bean', BeanSchema);

module.exports = Bean;