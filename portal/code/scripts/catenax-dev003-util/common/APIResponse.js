const APIResponse = {

	400: 'Bad Request',
	401: 'Unauthorized',
	404: 'Not Found',
	405: 'Method Not Allowed',
	500: 'Internal Server Error',
	501: 'Not Implemented',

	allowOrigins: /^https?:\/\/(([a-zA-Z0-9_-]{1,40}\.){0,3}.(azure.com|azurewebsites.net)|localhost(:[0-9]{1,5})?)$/,

	headers: {
		"Access-Control-Allow-Credentials": "true",
		"Access-Control-Allow-Headers": "x-catenax-authorization,Cookie,Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
		"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,HEAD,OPTIONS",
		"Access-Control-Allow-Origin": "http://localhost:3000",
		"Access-Control-Max-Age": "600", //TODO: increase after development
		"Vary": "Origin"
	},

	addCORS: function(response, event) {
		const origin = event.headers.origin;
		if (origin && this.allowOrigins.test(origin)) {
			response.headers['Access-Control-Allow-Origin'] = origin;
		}
		return response;
	},

	error: function (code, detail, data, input) {
		const time = new Date().toISOString().substring(0, 19).replace('T', ' ')
		return {
			status: code,
			headers: this.headers,
			body: JSON.stringify({
				error: {
					time: time,
					code: code,
					message: this[code],
					detail: detail,
					data: data,
					input: input
				}
			})
		}
	},

	success: function (result, raw, headers) {
		const successHeaders = Object.assign({}, this.headers, headers);
		if (!successHeaders.hasOwnProperty('cache-control')) {
			successHeaders['cache-control'] = 'max-age=36000';
		}
		console.log('APIResponse.success')
		console.log(JSON.stringify(result, null, 4))
		console.log(JSON.stringify(successHeaders, null, 4))
		return {
			status: 200,
			headers: successHeaders,
			body: raw ? result : JSON.stringify({ result: result })
		}
	}

};

exports.APIResponse = APIResponse;
