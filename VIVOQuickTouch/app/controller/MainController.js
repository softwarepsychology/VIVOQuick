Ext.define('VIVOQuickTouch.controller.MainController', {
	extend: 'Ext.app.Controller',
	

    views: [
        'Search','Favorites', 'Feedback','Info'
    ],
    
	init: function() {
	this.control({
		'button[action=submitContact]': {
		tap: 'submitContactForm'
			}
	
		}
	)
	},

	submitContactForm: function() {
		//console.log('button was clicked');
	}

});