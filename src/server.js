// marko-widgetsThe following line allows application-level modules to be required as if
// they were installed into the node_modules directory.
// IMPORTANT: The search path should be modified before any modules are loaded!
require('app-module-path').addPath(__dirname + '/..');

// Configure the RaptorJS Optimizer
require('optimizer').configure({
    plugins: [ 'optimizer-marko', 'optimizer-less' ],
    resolveCssUrls: true,
    projectRoot : __dirname + '/..',
    bundlingEnabled: true,
    outputDir: "static",  // Write all bundles into the "static" directory
    "urlPrefix": "/static",
    bundles : [
        {
            name : "common",
            dependencies : [
                "./src/layout-base/optimizer.json"
            ]
        }
    ]
});

var app = require('express')();
app.use('/static', require('serve-static')(__dirname + '/../static'));
app.get('/', require('./page-home'));

var port = 3000;
app.listen(port, function() {
    console.log('Listening on port %d', port);
});