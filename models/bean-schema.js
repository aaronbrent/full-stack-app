var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BeanSchema = new Schema(
{
    name: String,
    process: String,
    varietal: String,
    region: String,
    roast: String,
    rank: Number,
    url: String,
    image: String,
    pieChart: Boolean,
    flavorNotes: [Number],
    labels: [String],
    description: String
    
}
);

var Bean = mongoose.model('Bean', BeanSchema);

module.exports = Bean;