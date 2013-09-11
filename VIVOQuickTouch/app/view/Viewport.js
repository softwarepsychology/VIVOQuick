Ext.define('VIVOQuickTouch.view.Viewport', {
    extend: 'Ext.tab.Panel',
    
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                xtype: 'searchVIVO',
                	
                store: {
                	fields: ['publicationURI', 'publicationTitleLit'],
                	data: [
                    {publicationURI: 'http://vivo-trunk.indiana.edu/individual/Document51004',
                        publicationTitleLit: 'A comparison study of homeless and non-homeless HIV-positive persons enrolled in mental health care'
                      } ,
                      {
                        publicationURI: 'http://vivo-trunk.indiana.edu/individual/Document33887',
                        publicationTitleLit: 'Pavlovian conditioning as a product of selection'
                      }]
                }

            },
            {
            	xtype: 'favoriteSearches'
            },
            
            {
               xtype: 'vivoquickInfo'
            },
            
            {
               xtype: 'feedback'
            }
        ]
    }
});
