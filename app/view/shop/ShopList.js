(function() {
	Ext.define('mo.view.shop.ShopList', {
		extend : 'Ext.List',
		xtype: 'shops',
		
		requires: ['mo.view.shop.CategoryList'],
		
		config : {
        	store: shopStore,
			itemTpl: '<div class="shop">{name}</div>',
			listeners : {
				itemtap: function(container, item, index, e, eopts) {
					var shopId = e.data.id;
					var url = host + '/mo-server/api/group.json?shopId=' + shopId;
					Ext.data.JsonP.request({
					    url: url,
					    success: function(data) {
					    	categoryStore.removeAll();
					    	
							Ext.Array.each(data, function(group) {
					          	categoryStore.add(group);
							});
							
							Ext.ComponentQuery.query("shopContainer")[0].push(new mo.view.shop.CategoryList());
					    }
					});
						
				}	
			}
		}
	});
	
	
	
})();
