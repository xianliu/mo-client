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
			docked : "right",
			itemId: "button",
			handler : function(btn, e) {
				var dishId = btn.getId();
				var index = dishStore.find("id", dishId);
				var dish = dishStore.getAt(index).raw;
				var confirmMsg = "添加" + dish.name + "到订单";
				Ext.Msg.confirm("Confirmation", confirmMsg, function(result) {
					if(result === 'yes') {
						recipeStore.add(dish);
					}
				});
				
				e.stopPropagation();
			}
		}]
	},
	
	updateRecord: function(record) {
		var me = this;
		if(record !== undefined && record !== null) {
			me.down("#name").setHtml(record.get("name"));
			me.down("#button").setId(record.get("id"));	
		} 
		
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
		useComponents : true,
		listeners : {
			itemtap: function(view, item, index, e, eOpts) {
				Ext.ComponentQuery.query("shopContainer")[0].push(new mo.view.shop.DishDetail());
			}	
		}
	}
});
