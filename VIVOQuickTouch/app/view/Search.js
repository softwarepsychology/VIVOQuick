Ext.define('VIVOQuickTouch.view.Search', {
    extend: 'Ext.List',
    xtype: 'searchVIVO',
   
    config: {
			title: 'SEARCH',
            iconCls: 'search',
itemTpl: '{publicationTitleLit} {publicationURI}',

            items: [{
		        	docked: 'top',
		        	xtype: 'titlebar',
		        	title: 'Search'
            		}]
     }
});
