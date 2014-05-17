recipeDetailTemplate = new Ext.XTemplate("<p>下单时间：{createDate}</p><p>价格：￥{price}</p>");

Ext.define('mo.view.user.SubmitRecipeDetail', {
	extend: 'Ext.Container',
	xtype: 'submitRecipeDetail',
	requires: ['mo.view.user.DishInRecipeList'],
	config: {
		listeners : {
	        	painted : function() {
	        		Ext.ComponentQuery.query("#recipe-component")[0].setHtml(recipeDetailTemplate.apply(recipeData));
	        	}	
	    },
        layout: 'vbox',
        items : [{
        	xtype: 'component',
        	itemId: 'recipe-component'
        }, {
        	flex: 2,
        	xtype: "dishInRecipe"
        }]
    }
});