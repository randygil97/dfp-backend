'use strict'



/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//Route.on('/').render('welcome')
//Route.get('/', 'IndexController.index')
Route.group(() => {
	Route.post('/auth/register', 'AuthController.register')
	Route.post('/auth/login', 'AuthController.login')
	Route.post('/auth/refresh', 'AuthController.refresh')
	Route.post('/auth/forgot', 'AuthController.forgot')
	Route.post('/auth/recover/:token', 'AuthController.recover')
	Route.get('/countries','CountryController.index')

}).prefix('api')