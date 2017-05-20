/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	email : "string",
  	password : "string",
  	nombres : "string",
  }
};

//Usuario.find().exec(console.log)
//Usuario.create({email : "edusis@gmail.com", password:"123456", nombres:"Edwar Ponte"}).exec(console.log)
//Usuario.create({email : "carlos@gmail.com", password:"123456", nombres:"Luis"}).exec(console.log)
//Usuario.create({email : "luis@gmail.com", password:"123456", nombres:"Carlos"}).exec(console.log)

//Usuario.find({email : "luis@gmail.com"}).exec(console.log)
