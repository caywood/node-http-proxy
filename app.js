var https = require('https'),
    httpProxy = require('http-proxy');

httpProxy.createProxyServer({
    target: 'https://catalog.roblox.com',
    agent: https.globalAgent,
    headers: {
        host: 'catalog.roblox.com'
    }
}).listen(process.env.PORT || 8888);
