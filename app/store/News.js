Ext.define('mo.store.News', {
    extend: 'Ext.data.Store',

    config: {
        fields: ['id', 'title', 'content'],
         // data: [
	        // { id:1, title: 'Ed',    cotent: 'Spencer' },
	        // { id:2, title: 'Tommy', cotent: 'Maintz' },
	        // { id:3, title: 'Aaron', cotent: 'Conran' },
	        // { id:4, title: 'Jamie', cotent: 'Avins' }
	    // ],
	     listeners: {
            beforeload: function(){
             	 var proxy = this.getProxy();
             	 // TODO: when use my server need to change the method
            	 proxy.getMethod = function() { return "POST" };
            }
         },
         
         pageSize: 10,
         
         
         proxy : {
         	type: 'rest',
         	
         	// just use this to mock rest api
         	url: 'http://schematic-ipsum.herokuapp.com/?n=15',
            extraParams: {
                "type": "object",
                "properties[id][type]":"string",
                "properties[id][ipsum]":"id",
                "properties[title][type]":"string",
                "properties[title][ipsum]":"sentence",
                "properties[content][type]":"string",
                "properties[content][ipsum]":"sentence",
            }
         },
         
	     // proxy: {
            // type: 'jsonp',
	        // url: 'http://192.168.1.106:8080/mo-server/news'
		// },
      autoLoad: true
    }
});

newsStore = new mo.store.News();
