const remote = require('electron').remote;
const BrowserWindow = remote.BrowserWindow;


function whatsapp(){
	var win = new BrowserWindow({width:1000, height:780, icon: __dirname 
	 + '/logo.ico'});
	win.setMenu(null);
	win.loadURL("https://web.whatsapp.com/");
}

function instragram(){
	var win = new BrowserWindow({width:1000, height:780, icon: __dirname 
	 + '/logo.ico'});
	win.setMenu(null);
	win.loadURL("https://www.instagram.com/");
}


function linkedin(){
	var win = new BrowserWindow({width:1000, height:780, icon: __dirname 
	 + '/logo.ico'});
	win.setMenu(null);
	win.loadURL("https://www.linkedin.com/");
}



