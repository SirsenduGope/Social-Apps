const electron = require("electron");
const app = electron.app;

const path = require('path');
const url = require('url');


const BrowserWindow = electron.BrowserWindow;

var mainWindow;
app.on('ready',function(){
	mainWindow = new BrowserWindow({width:1000, height: 600, icon: __dirname 
	 + '/logo.ico'});
	mainWindow.setMenu(null);
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'app/index.html'),
		protocol: 'file:',
		slashes: true
	}));
});

