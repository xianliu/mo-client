Ext.define('mo.store.Dish', {
	extend : 'Ext.data.Store',

	config : {
		fields : ['id', 'name']
	}
});

dishStore = new mo.store.Dish();
