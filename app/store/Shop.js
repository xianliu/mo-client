Ext.define('mo.store.Shop', {
	extend : 'Ext.data.Store',
	
	 config: {
		fields: ['id', 'name', 'location'],
		listeners: {
			beforeload: function(){
				var proxy = this.getProxy();
				proxy.getMethod = function() { return "GET"; };
			}
		},
         
		pageSize: 10,
		
		proxy: {
			type: 'jsonp',
			url: host + '/mo-server/api/shops.json'
		},
		autoLoad: true
    }
	
});

shopStore = new mo.store.Shop();
