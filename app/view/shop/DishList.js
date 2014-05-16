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
			html: "item",
			itemId: "item"
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
				
				var spinner = Ext.create('Ext.field.Spinner', {
				    label: '份数',
				    minValue: 1,
				    maxValue: 100,
				    stepValue: 1,
				    cycle: true,
				    inputCls: 'dish-spinner',
				    id: 'dish-spinner'
				});
				
				var config = {
            		 items : [spinner]
            	};

            	var msgBox = new Ext.MessageBox(config);
				
				msgBox.confirm("Confirmation", confirmMsg, function(result) {
					if(result === 'yes') {
						var num = Ext.ComponentQuery.query("#dish-spinner")[0].getValue();
						var index = recipeStore.find("id", dishId);
						var recipe = recipeStore.getAt(index);
						var sum = (recipe && recipe.get("sum")) || 0;
						recipe = dish;
						recipe.sum = sum + num;
						recipeStore.removeAt(index);
						recipeStore.add(recipe);
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
			var price  = record.get("price");
			var itemTemplate = "<span>" + name + "</span>" + "<span>￥" + price + "</span>";
			me.down("#item").setHtml(itemTemplate);
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
				dishDetailStore.removeAll();
				dishDetailStore.add(e.data);
				Ext.ComponentQuery.query("shopContainer")[0].push(new mo.view.shop.DishDetail());
			}	
		}
	}
});
