var express  = require('express');
var dateformat = require('dateformat');
var bodyParser  = require('body-parser');
var app = express();
var mongoose  = require('mongoose');

mongoose.connect('mongodb://localhost/clientes');
var Cliente = mongoose.model('Cliente',mongoose.Schema({
	nome: String,
	datanasc: Date,
	datacad: Date,
	cpf: String,
	servcont: String
}));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/client'));

app.get('/api/clientes',function(req,res){
	Cliente.find(function(err,clientes){
		if(err)
			res.send(err);
		res.json(clientes);
	});

});

app.get('/api/clientes/:id',function(req,res){
	Cliente.findOne({_id:req.params.id}, function(err,cliente){
		if(err)
			res.send(err);
		res.json(cliente);
	});

});

app.post('/api/clientes',function(req,res){
	Cliente.create(req.body,function(err,clientes){
		if(err)
			res.send(err);
		res.json(clientes);
	});

});

app.delete('/api/clientes/:id',function(req,res){
	Cliente.findOneAndRemove({_id:req.params.id}, function(err,cliente){
		if(err)
			res.send(err);
		res.json(cliente);
	});

});

app.put('/api/clientes/:id',function(req,res){
		var dataAtual = new Date();
		var dataMod = dateformat(dataAtual,'yyyy-mm-dd h:MM:ss');
		
	var query = {
		nome:req.body.nome,
		datanasc:req.body.datanasc,
		datacad:req.body.datacad,
		cpf:req.body.cpf,
		servcont:req.body.servcont
	};

	Cliente.findOneAndUpdate({_id:req.params.id}, query ,function(err,cliente){
		if(err)
			res.send(err);
		res.json(cliente);
	});

});


app.listen(3000,function(){
	console.log('server 3000');
});