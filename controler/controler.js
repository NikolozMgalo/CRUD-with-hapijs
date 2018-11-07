const Car = require('../model/car.model.js');
const CarId = ('mongodb').ObjectID;
const mongoDB = 'mongodb://user:user123@ds253203.mlab.com:53203/database-2';

module.exports = 
{
	createNew(req, h)
	{
		if(!req.payload.name)
		{
			return 'Car name is required'
		}  
		
			Car.create({
				name: req.payload.name,
				releaseYear: req.payload.releaseYear,
				condition: req.payload.condition,
				color: req.payload.color,
				mileage: req.payload.mileage
			}, (err, savedCar) => 
				{
					if(err)
						{
						return err;
						} else {	return 'ok' }
				})

		
		return 'car has been created'
	},
	findAll(req, h)
	{
		Car.find({}, (err, cars) => {
			if(err)
			{
				return err;
			} else return Car.find({})
		})
		return Car.find({});
	},

	findOne(req, h)
	{
		if(!req.params.id)
		{
			return 'error has occured'
		} 
		
			Car.findOne({_id:req.params.id}, (err, car) => {
				if(err)
				{
					return h.response({err: 'no car'});
				} else return 'ok'
			})
		
		return Car.findOne({_id: req.params.id})

	},

	updateOne(req, h)
	{
		if(!req.params.id || req.params.id === 0)
		{
			return h.response(`car with ID: ${req.params.id}, has not been found in database`)
		}

		let newCar = {};

		if(req.payload.name)
		{
			newCar.name = req.payload.name;
		}
		if(req.payload.releaseYear)
		{
			newCar.releaseYear = req.payload.releaseYear
		}
		if(req.payload.condition)
		{
			newCar.condition = req.payload.condition
		}
		if(req.payload.color)
		{
			newCar.color = req.payload.color
		}
		if(req.payload.mileage)
		{
			newCar.mileage = req.payload.mileage
		}
		Car.findOneAndUpdate({_id: req.params.id}, newCar, {new: true}, (err, newCar) => {
			if(err){
				throw err;
			} return newCar;
		})
		return newCar;

	},

	deleteOne(req, h)
	{
		if(!req.params.id){
			return `car with ID: ${req.params.id}, has not been found in database`
		} else
		{
			Car.findOneAndDelete({_id : req.params.id}, (err, car) => {
				if(err){
					throw err
				} else return 'ok'
			})
		}
		return `car has been deleted`
	}

}