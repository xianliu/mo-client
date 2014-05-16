Ext.define('mo.store.Recipe', {
	extend : 'Ext.data.Store',

	config : {
		fields : ['id', 'name', 'price', 'sum']
	}
});

recipeStore = new mo.store.Recipe();
