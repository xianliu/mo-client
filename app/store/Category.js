Ext.define('mo.store.Category', {
	extend : 'Ext.data.Store',

	config : {
		fields : ['id', 'name']
	}
});

categoryStore = new mo.store.Category();
