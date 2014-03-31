Ext.define('dishItem', {
	extend : 'Ext.dataview.component.DataItem',
	alias: 'widget.dishItem',
	config : {
		padding: 10,
		layout : {
			type : 'hbox'
		},
		defaults : {
			margin : 5
		},
		items: [{
			xtype : "component",
			html: "name",
			itemId: "name"
		}, {
			xtype : "button",
			iconCls : "add",
			docked : "right"
		}]
	},
	
	updateRecord: function(record) {
		var me = this;
		me.down("#name").setHtml(record.get("name"));
		
		me.callParent(arguments);
	}
});


Ext.define('mo.view.shop.DishList', {

	extend: 'Ext.dataview.DataView',
	xtype: 'dish',
	
	requires: ['mo.view.shop.DishDetail'],

	config: {
		store: dishStore,
		defaultType : "dishItem",
		useComponents : true
		// itemTpl: '<div class="shop">{name}</div>',
		// listeners : {
			// itemtap: function() {
				// Ext.ComponentQuery.query("shopContainer")[0].push(new mo.view.shop.DishDetail());
			// }	
		// }
	}
});
