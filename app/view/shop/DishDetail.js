Ext.define('mo.view.shop.DishDetail', {

	extend: 'Ext.Container',
	xtype: 'dishDetail',

	config: {
		layout: 'vbox',
		items: [
            {
                xtype: 'component',
                cls: 'dark',
                html: 'Speakers'
            }
		]

	}
});
