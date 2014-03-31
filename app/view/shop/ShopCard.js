Ext.define('mo.view.shop.ShopCard', {

	extend: 'Ext.NavigationView',
	xtype: 'shopContainer',
	
	requires: ['mo.view.shop.ShopList'],

	config: {

		title: 'Shop',
        iconCls: 'time',
	
		items: [ {
			title: 'Shop Detail',
			xtype: 'shops'
		}]
	}
});
