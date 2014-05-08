(function() {
	Ext.define('mo.view.NewsList', {
		extend : 'Ext.List',
		
		// requires: [
	        // 'Ext.plugin.PullRefresh',
	        // 'Ext.plugin.ListPaging'
	    // ],
		
		config : {
			// limit: 10,
	        disableSelection: true,
	
	        // plugins: [
	            // { type: 'listpaging' },
	            // { type: 'pullrefresh' }
	        // ],
			
			title: '新闻公告',
        	iconCls: 'info',
        	store: newsStore,
			itemTpl: '{title}'
		}
	});
	
})();
