Ext.define('mo.store.Shop', {
	extend : 'Ext.data.Store',

	config : {
		fields : ['id', 'name'],
		data : [{
			id : 1,
			name : "hello"
		}, {
			id : 2,
			name : "hi"
		}]
	}
});

shopStore = new mo.store.Shop();
