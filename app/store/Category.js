Ext.define('mo.store.Category', {
	extend : 'Ext.data.Store',

	config : {
		fields : ['id', 'name'],
		data : [{
			id : 1,
			name : "炒菜"
		}, {
			id : 2,
			name : "汤菜"
		}]
	}
});

categoryStore = new mo.store.Category();
