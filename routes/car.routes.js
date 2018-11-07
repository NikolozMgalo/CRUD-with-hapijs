const CarControllers = require('../controler/controler.js');

module.exports =[
{
	method: 'GET', 
	path: '/cars',
	handler: CarControllers.findAll

},
{
	method: 'POST',
	path: '/cars',
	handler: CarControllers.createNew
},
{
	method: 'GET',
	path: '/cars/{id}',
	handler: CarControllers.findOne,
},
{
	method: 'DELETE',
	path: '/cars/{id}',
	handler: CarControllers.deleteOne,
},
{
	method: 'PUT',
	path: '/cars/{id}',
	handler: CarControllers.updateOne,
},
]