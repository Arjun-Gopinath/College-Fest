const mongoose = require('mongoose');

const consumerSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    regno:{
        type: String,
        required:true    
    },
    email:{
        type: String,
        required:true
    },
    phone:{
        type: String,
        required:true
    },
    branch:{
        type: String,
        required:true
    },
    semester:{
        type: String,
        required:true
    },
    artList:{
        type:Array,
        required:true

    },
    techList:{
        type:Array,
        required:true

    }

});

const User = module.exports = mongoose.model('Users', consumerSchema);
// Get User

module.exports.getUser = function(callback, limit){
    User.find(callback).limit(limit);
    
}

module.exports.addUser = function(user, callback){
	User.create(user, callback);
}