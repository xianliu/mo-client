Ext.define('mo.store.Recipe', {
	extend : 'Ext.data.Store',

	config : {
		fields : ['id', 'name', 'price', 'groupId']
	}
});

recipeStore = new mo.store.Recipe();
