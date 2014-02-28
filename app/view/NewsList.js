(function() {
	Ext.define('mo.view.NewsList', {
		extend : 'Ext.List',
		config : {
			title: 'Settings',
        	iconCls: 'settings',
        	store: {
			fields:['name'],
			data: [
				{name : 'Tom'},
				{name : 'Jack'}
				]
			},
			itemTpl: '{name}'
		}
		
	});
	
})();
