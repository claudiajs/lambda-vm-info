/*global require, module */
var cpPromise = require('./child-process-promise'),
	API = require('claudia-api-builder'),
	api = new API();

api.get('/ldconfig', function () {
	'use strict';
	return cpPromise.spawn('/sbin/ldconfig', ['-p']);
}, {success: { contentType: 'text/plain'}});
api.get('/packages', function () {
	'use strict';
	return cpPromise.spawn('/usr/bin/yum', ['list', 'installed']);
}, {success: { contentType: 'text/plain'}});
api.get('/env', function () {
	'use strict';
	return cpPromise.spawn('/bin/env', []);
}, {success: { contentType: 'text/plain'}});
module.exports = api;
