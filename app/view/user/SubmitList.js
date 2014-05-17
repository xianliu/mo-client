(function() {
	Ext.define('mo.view.user.SubmitList', {
		extend : 'Ext.List',
		requires : ['mo.view.user.SubmitRecipeDetail'],
		xtype: 'submit-recipe',
		config : {
        	store: submitRecipeStore,
			itemTpl: '<div class="submit-recipe">{createDate}</div>',
			listeners : {
				itemtap: function(container, item, index, e, eopts) {
					recipeData = e.data;
					console.log(recipeDetailTemplate.apply(recipeData));
					var url = host + '/mo-server/api/dishes.json';
					var detail = JSON.parse(e.data.detail);
					var ids = [];
					for (var i=0; i < detail.length; i++) {
					  ids.push(detail[i].id);
					};
					
					ids = ids.join(",");
					var params = {
						ids : ids
					};
					
					Ext.data.JsonP.request({
					    url: url,
					    params : params, 
					    success: function(data) {
					    	dishInRecipeStore.removeAll();
							Ext.Array.each(data, function(dish) {
								dish.sum = getSum(dish.id, detail);
					          	dishInRecipeStore.add(dish);
							});
							
							Ext.ComponentQuery.query("userContainer")[0].push(new mo.view.user.SubmitRecipeDetail());		
					    }
					});
											
				}	
			}
		}
	});
	
	function getSum(dishId, detail) {
		for (var i=0; i < detail.length; i++) {
			if(detail[i].id == dishId) {
				return detail[i].sum;
			};
		};
	}
})();
