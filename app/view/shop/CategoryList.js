Ext.define('mo.view.shop.CategoryList', {

	extend: 'Ext.List',
	xtype: 'category',

	requires: ['mo.view.shop.DishList'],
	
	config: {
		store: categoryStore,
		itemTpl: '<div class="shop">{name}</div>',
		listeners : {
			itemtap: function(container, item, index, e, eopts) {
				var groupId = e.data.id;
				var url = host + '/mo-server/api/dishList.json?groupId=' + groupId;
				Ext.data.JsonP.request({
				    url: url,
				    success: function(data) {
				    	dishStore.removeAll();
						Ext.Array.each(data, function(dish) {
				          	dishStore.add(dish);
						});
						
						Ext.ComponentQuery.query("shopContainer")[0].push(new mo.view.shop.DishList());
				    }
				});
			}	
		}
	}
});
