var APP = {};

APP = (function() {
	var MAIN = {
		mainTabGroup:null
	};
	
	//initialize the app
	MAIN.init = function() {
		Ti.API.info('init!');
	};
	
	//build and show the mobile app
	MAIN.showMobile = function()
	{
		// main window
		Titanium.UI.setBackgroundColor('#000');
		
		// create tab group
		APP.mainTabGroup = Titanium.UI.createTabGroup();
		
		//create window and tabs
		var win1 = Titanium.UI.createWindow({ title:'Win 1',   backgroundColor:'#fff' });
		var tab1 = Titanium.UI.createTab({ icon:'KS_nav_ui.png',title:'Tab 1', window:win1 });
		
		var label1 = Titanium.UI.createLabel({ color:'#999', text:'I am Window 1', font:{fontSize:20,fontFamily:'Helvetica Neue'}, textAlign:'center', width:'auto' });
		win1.add(label1);
		
		var win2 = Titanium.UI.createWindow({ title:'Win 2',   backgroundColor:'#fff' });
		var tab2 = Titanium.UI.createTab({ icon:'KS_nav_ui.png',title:'Tab 2', window:win2 });
		
		var label2 = Titanium.UI.createLabel({ color:'#999', text:'I am Window 2', font:{fontSize:20,fontFamily:'Helvetica Neue'}, textAlign:'center', width:'auto' });
		win2.add(label2);
		
		//add tabs to the tab group
		APP.mainTabGroup.addTab( tab1 );
		APP.mainTabGroup.addTab( tab2 );
		
		// open tab group
		APP.mainTabGroup.open();
	}; //end showMobile
	
	return MAIN;
})();