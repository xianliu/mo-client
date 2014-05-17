Ext.define('mo.store.News', {
    extend: 'Ext.data.Store',

    config: {
		fields: ['id', 'title', 'content'],
		listeners: {
			beforeload: function(){
				var proxy = this.getProxy();
				proxy.getMethod = function() { return "GET"; };
			}
		},
         
		pageSize: 10,
		
		proxy: {
			type: 'jsonp',
			url: host + '/mo-server/api/news.json'
		},
		autoLoad: true
    }
});

newsStore = new mo.store.News();
