Ext.define('VIVOQuickTouch.view.Info',
				{
					extend : 'Ext.Panel',
					xtype : 'vivoquickInfo',

					config : {
						title : 'INFO',
						iconCls : 'info',

						styleHtmlContent : true,
						scrollable : true,

						items : [
								{
									docked : 'top',
									xtype : 'titlebar',
									title : 'VIVO Quick [beta]'
								},
								{
									// height is not working in the following
									// statement.
									html : [ '<embed src="http://www.vivoweb.org/about"  width="100%" height="800px" />' ].join("")
								} ]

					// html: '<embed
					// src="http://www.vivoweb.org/about"></embed>'

					}

				});