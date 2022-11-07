const mongoose = require('mongoose'); 
const teamschema = mongoose.Schema({
    name: {
        type:String,
        require: true
    },
    foundation: {
        type: Number
    },
    victories: {
        type:Number
    },
    championshipswins: {
        type:Number
    },
    lastdriver: {
        type:String,
        require:true
    },
}); 

module.exports = mongoose.model('teams', teamschema);