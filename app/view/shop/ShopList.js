(function() {
	Ext.define('mo.view.shop.ShopList', {
		extend : 'Ext.List',
		xtype: 'shops',
		
		requires: ['mo.view.shop.CategoryList'],
		
		config : {
        	store: shopStore,
			itemTpl: '<div class="shop">{name}</div>',
			listeners : {
				itemtap: function() {
					Ext.ComponentQuery.query("shopContainer")[0].push(new mo.view.shop.CategoryList());
				}	
			}
		}
	});
	
})();
