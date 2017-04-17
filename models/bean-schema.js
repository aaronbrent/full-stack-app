var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BeanSchema = new Schema(
{
    name: String,
    process: String,
    varietal: String,
    region: String,
    roast: String,
    url: String,
    flavorNotes: [Number],
    labels: [String],
    description: String
    
}
);

var Bean = mongoose.model('Bean', BeanSchema);

module.exports = Bean;