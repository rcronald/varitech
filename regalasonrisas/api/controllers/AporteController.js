/**
 * AporteController
 *
 * @description :: Server-side logic for managing aportes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	listar : function(req, res){
		Aporte
			.find()
			.then(function(registros){
				res.json(registros)
			})
			.catch(function(err){
				res.negotiate(err)
			})
	},

	detallar : function(req, res){
		var filtro = {id : req.params.id}
		Aporte
			.find()
			.where(filtro)
			.then(function(registros){
				res.json(registros)
			})
			.catch(function(err){
				res.negotiate(err)
			})
	},

	insertar : function(req, res){
		var registro = req.allParams()

		Aporte
			.create(registro)
			.then(function(registros){
				res.json(registros)
			})
			.catch(function(err){
				res.negotiate(err)
			})
	},

	actualizar : function(req, res){
		var registro = req.allParams()
		var filtro = {id : req.params.id}

		Aporte
			.update(filtro, registro)
			.then(function(registros){
				res.json(registros)
			})
			.catch(function(err){
				res.negotiate(err)
			})
	},

	eliminar : function(req, res){
		var filtro = {id : req.params.id}

		Aporte
			.destroy(filtro)
			.then(function(registros){
				res.json(registros)
			})
			.catch(function(err){
				res.negotiate(err)
			})
	}
};

