Ext.define('mo.view.user.DishInRecipeList', {
	extend : 'Ext.List',
	xtype: 'dishInRecipe',
	
	config : {
		store: dishInRecipeStore,
		itemTpl: '<span>{name}</span><span>￥:{price}|份数:{sum}</span>'
	}
});
