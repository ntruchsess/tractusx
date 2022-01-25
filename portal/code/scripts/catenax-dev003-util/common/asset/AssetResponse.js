/**
 * Return the static assets required by browser documents
 */
exports.AssetResponse = {

	cacheSeconds: 0, //2419200, // 28 days
	cacheSecondsIndex: 0, //3600, // 1 hour for home page index

	types: {
		"txt": "text/plain",
		"html": "text/html",
		"css": "text/css",
		"js": "text/javascript",
		"json": "text/plain", // deliver json as plain text
		"map": "text/plain",
		"png": "image/png",
		"ico": "image/x-icon"
	},

	error: function (code, detail, data, input) {
		return {
			status: code,
			headers: {
				'content-type': this.types.json
			},
			body: JSON.stringify({
				error: {
					code: code,
					message: this[code],
					detail: detail,
					data: data,
					input: input
				}
			})
		}
	},

	getContentType: function (name) {
		const idx = name.lastIndexOf('.');
		const suffix = idx === -1 || idx === name.length - 1
			? 'txt'
			: name.substr(idx + 1)
		const type = this.types[suffix];
		return type ? type : this.types.txt
	},

	success: function (result, name) {
		return {
			status: 200,
			headers: {
				'Access-Control-Allow-Headers': 'x-catena-authorization,Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
				'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,HEAD,OPTIONS',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Max-Age': '259200',
				'content-type': this.getContentType(name),
				'cache-control': 'max-age=' + (name === 'index.html'
					? this.cacheSecondsIndex
					: this.cacheSeconds
				)
			},
			body: result
		}
	}

};
