Ext.define('mo.view.shop.ShopCard', {

	extend: 'Ext.NavigationView',
	xtype: 'shopContainer',
	
	requires: ['mo.view.shop.ShopList'],

	config: {

		title: '店铺',
        iconCls: 'time',
	
		items: [ {
			title: 'Shop Detail',
			xtype: 'shops'
		}]
	}
});
