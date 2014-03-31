Ext.define('mo.view.shop.CategoryList', {

	extend: 'Ext.List',
	xtype: 'category',

	requires: ['mo.view.shop.DishList'],
	
	config: {
		store: categoryStore,
		itemTpl: '<div class="shop">{name}</div>',
		listeners : {
			itemtap: function() {
				Ext.ComponentQuery.query("shopContainer")[0].push(new mo.view.shop.DishList());
			}	
		}
	}
});
