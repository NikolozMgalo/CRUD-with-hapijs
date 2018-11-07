const Hapi 			= require('hapi');
const mongoose 		= require('mongoose');
const mongoDB 		= 'mongodb://<user>:user123@<password>.mlab.com:<>/<databasename>'

mongoose.Promise 	= global.Promise;

mongoose.connect(mongoDB, { useNewUrlParser : true});

let db = mongoose.connection;

db.on('error', console.error.bind(console, "Error while connecting to database"));

db.once('open', () => { console.log("Succesfully connected to database") });


const server = new Hapi.server ({ 
	host: 'localhost',
	port: 3333
})

const carRoutes = require('./routes/car.routes.js')
server.route(carRoutes);

server.route({
	method: 'GET',
	path: '/',
	handler(req, h) {
		return 'Hello there'
	}
})
const init = async () => {
	await server.start();
	console.log(`Server has started at: ${server.info.uri}`)
	
}
init();

