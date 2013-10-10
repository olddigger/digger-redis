/*

	(The MIT License)

	Copyright (C) 2005-2013 Kai Davenport

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 */

var Supplier = require('digger-supplier');
var Redis = require('redis');
var _ = require('lodash');

module.exports = function(options){

	options = _.defaults(options || {}, {
    host:process.env.DIGGER_REDIS_HOST || '127.0.0.1',
    port:process.env.DIGGER_REDIS_PORT || 6379,
    pass:process.env.DIGGER_REDIS_PASSWORD || null,
    database:null
  })

  var baseclient = Redis.createClient(options);

  if(options.database!==null){
  	baseclient.select(options.database, function(){

  	}
  }

  /*
  
  	return a redis object that has the provision root prepended to keys
  	
  */
  function get_wrapper(req){
  	var resource = req.headers['x-json-resource'] || {};
  	var prefix = resource.prefix;

  	return {

  	}
  }

  var supplier = Supplier(options);

	supplier.on('load', function(req, reply){

		var client = get_wrapper(req);



	})

	supplier.on('select', function(req, reply){
		console.log('-------------------------------------------');
		console.dir(req);
	})

	supplier.on('append', function(req, reply){

	})

	supplier.on('save', function(req, reply){

	})

	supplier.on('remove', function(req, reply){

	})

	
    


})