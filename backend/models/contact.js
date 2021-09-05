const mongoose= require('mongoose');

const contactSchema = mongoose.Schema({
  email:{
    type: String,
    required: true,
    unique: true
  } ,
  subject:{
    type: String
  },
  message: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  }
});

const Contact = mongoose.model('Contact', contactSchema);
module.exports=Contact;
