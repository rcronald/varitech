/**
 * Beneficiario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	nombres : "string",
  	edad : "int",
  	sexo : "string",
  	descripcion : "string",
  	historia : "string",
  	imagen : "string",
  }
};


//Beneficiario.find().exec(console.log)
//Beneficiario.create({nombres : "Juanita Roman", edad : 3, sexo:"Mujer", descripcion:"Juanita "}).exec(console.log)
//Beneficiario.create({nombres : "Julio Paredez", edad : 5, sexo:"Hombre", descripcion:"Juanita "}).exec(console.log)
//Beneficiario.create({nombres : "Carlos Quispe", edad : 6, sexo:"Hombre", descripcion:"Juanita "}).exec(console.log)
//Beneficiario.create({nombres : "Edson Durand", edad : 6, sexo:"Hombre", descripcion:"Juanita "}).exec(console.log)
//Beneficiario.create({nombres : "Manuel Huaman", edad : 4, sexo:"Hombre", descripcion:"Juanita "}).exec(console.log)
//Beneficiario.create({nombres : "Paula Tasaico", edad : 8, sexo:"Mujer", descripcion:"Juanita "}).exec(console.log)