Ext.define('recipeItem', {
	extend : 'Ext.dataview.component.DataItem',
	alias: 'widget.recipeItem',
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
			html: "item",
			itemId: "item"
		}, {
			xtype : "button",
			iconCls : "delete",
			docked : "right",
			itemId: "button",
			handler : function(btn, e) {
				var dishId = btn.getId();
				var index = dishStore.find("id", dishId);
				var dish = dishStore.getAt(index).raw;
				
				var confirmMsg = "从订单删除" + dish.name ;
				
				Ext.Msg.confirm("Confirmation", confirmMsg, function(result) {
					if(result === 'yes') {
						// we can remove dish in this list
						recipeStore.removeAt(index);
						var sum = 0;
		        		recipeStore.each(function (item, index, length) {
							sum = sum + parseInt(item.get('price'));
						});
		        		Ext.ComponentQuery.query("seg #price")[0].setHtml('￥' + sum);
					}
				});
				
				e.stopPropagation();
			}
		}]
	},
	
	updateRecord: function(record) {
		var me = this;
		if(record !== undefined && record !== null) {
			var name = record.get("name");
			var sum = record.get("sum");
			var price  = record.get("price");
			var itemTemplate = "<span>" + name + "</span>" + "<span>￥" + price + "</span>";
			itemTemplate = itemTemplate + "|份数:" + sum;
			me.down("#item").setHtml(itemTemplate);
			me.down("#button").setId(record.get("id"));	
		} 
		
		me.callParent(arguments);
	}
});

Ext.define('mo.view.user.RecipeList', {

	extend: 'Ext.dataview.DataView',
	xtype: 'recipe',

	config: {
		store: recipeStore,
		defaultType : "recipeItem",
		useComponents : true
	}
});
