/**
 * Beneficiario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	name : "string",
  	birthDate : "string",
  	history : "string",
  	picture : "string"
  }
};



//Beneficiario.create({name : "Ronald Requena", history : "lalallaal", picture:"lolololo"}).exec(console.log)