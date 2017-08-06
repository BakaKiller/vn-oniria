let ntk = require('ntk');
ntk.createClient( (err, app) => {
    let mainWindow = app.createWindow({width: 500, height:300, title:"Hello World"});
    mainWindow.on('mousedown', (e) => {
        mainWindow.setTitle('click : ' + [e.x, e.y].join(','));
    });
    mainWindow.map();
});