Ext.define('VIVOQuickTouch.view.Feedback', {
    extend: 'Ext.form.Panel',
    xtype: 'feedback',
    
    config: {
		title: 'FEEDBACK',
		iconCls: 'action',
		layout:'vbox',

		items: [
		        {
		        	docked: 'top',
		        	xtype: 'titlebar',
		        	title: 'Feedback'
		        },
		        {
		        	xtype: 'fieldset',
		        	title: 'Feedback / Comments / Questions:',
		        	instructions: 'Email is optional.',
		        	
		        	items: [
		        	        {xtype: 'textfield',
		        	        label: 'Name',
		        	        name: 'name'
		        	        },
		        	        {xtype: 'emailfield',
		        	        label: 'Email',
		        	        name: 'email'
		        	        },
		        	        {xtype: 'textareafield',
		        	        label: 'Message',
		        	        name: 'message'
		        	        }]
		        	},
        	        {
        	        	xtype: 'button',
        	        	ui: 'confirm',
        	        	text: 'Send',
        	        	action: 'submitContact'
        	        }
		        	
		        ]
    }

});