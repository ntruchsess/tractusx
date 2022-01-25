const os = require('os')

module.exports = async function (context, req) {
    const resources = req.params.resource.split(',')
    const result = {}
    if (resources.includes('hello')) {
        result.hello = { "message": "hello world" }
    }
    if (resources.includes('context')) {
        result.context = context
    }
    if (resources.includes('req')) {
        result.req = req
    }
	if (resources.includes('process')) {
        try {
    		result.process = process.report.getReport()
        } catch (e) {
            result.process = e
        }
	}
	if (resources.includes('os')) {
        try {
            result.os = {
                EOL: os.EOL,
                arch: os.arch(),
                constants: os.constants,
                cpus: os.cpus(),
                endianness: os.endianness(),
                freemem: os.freemem(),
                getPriority: os.getPriority(),
                homedir: os.homedir(),
                hostname: os.hostname(),
                loadavg: os.loadavg(),
                networkInterfaces: os.networkInterfaces(),
                platform: os.platform(),
                release: os.release(),
                tmpdir: os.tmpdir(),
                totalmem: os.totalmem(),
                type: os.type(),
                uptime: os.uptime(),
                userInfo: os.userInfo(),
                version: os.version()
    		}
        } catch (e) {
            result.os = e
        }
	}
    context.res = {
        // status: 200, /* default */
        body: JSON.stringify(result)
    }
}
