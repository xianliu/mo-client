Ext.define('mo.store.SubmitRecipe', {
	extend : 'Ext.data.Store',
	
	 config: {
		fields: ['id', 'price', 'userId', 'createDate', 'location', 'detail', 'status']
    }
	
});

submitRecipeStore = new mo.store.SubmitRecipe();
