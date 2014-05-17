Ext.define('mo.store.DishInRecipe', {
	extend : 'Ext.data.Store',

	config : {
		fields : ['id', 'name', 'price', 'sum']
	}
});

dishInRecipeStore = new mo.store.DishInRecipe();
