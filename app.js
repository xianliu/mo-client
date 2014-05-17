var host = "http://127.0.0.1:8080";
var currentDishHtml = "curemt dish content is empty";
var userInfo = {};
var price = 0;
var recipeData = {};

(function() {
	Ext.Loader.setPath({
    	'mo': 'app'
	});
	
	Ext.application({
	    startupImage: {
	        '320x460': 'resources/startup/Default.jpg', // Non-retina iPhone, iPod touch, and all Android devices
	        '640x920': 'resources/startup/640x920.png', // Retina iPhone and iPod touch
	        '640x1096': 'resources/startup/640x1096.png', // iPhone 5 and iPod touch (fifth generation)
	        '768x1004': 'resources/startup/768x1004.png', //  Non-retina iPad (first and second generation) in portrait orientation
	        '748x1024': 'resources/startup/748x1024.png', //  Non-retina iPad (first and second generation) in landscape orientation
	        '1536x2008': 'resources/startup/1536x2008.png', // : Retina iPad (third generation) in portrait orientation
	        '1496x2048': 'resources/startup/1496x2048.png' // : Retina iPad (third generation) in landscape orientation
	    },
	
	    isIconPrecomposed: false,
	    icon: {
	        57: 'resources/icons/icon.png',
	        72: 'resources/icons/icon@72.png',
	        114: 'resources/icons/icon@2x.png',
	        144: 'resources/icons/icon@144.png'
	    },
	
	    requires: [
	        'Ext.tab.Panel',
	        'mo.store.News'
	    ],
	
		store : [
			'News'
		],
		
	    launch: function() {
	        Ext.Viewport.add({
	            xtype: 'tabpanel',
	
	            tabBar: {
	                docked: 'bottom',
	
	                layout: {
	                    pack: 'center',
	                    align: 'center'
	                },
	
	                scrollable: {
	                    direction: 'horizontal',
	                    indicators: false
	                }
	            },
	
	            ui: 'light',
	
	            defaults: {
	                scrollable: true
	            },
	
	            layout: {
	                animation: false
	            },
	            
	            views: [
	            	"NewsList",
	            	"shop.ShopList",
	            	"shop.ShopCard",
	            	"user.UserCard",
	            	"user.UserForm"
	            ],
	
	            items: [
	                { xclass : 'mo.view.NewsList'},
	                { xclass : 'mo.view.shop.ShopCard'},
	                { xclass : 'mo.view.user.UserCard'}
	            ]
	        });
	    }
	});
	
})();
