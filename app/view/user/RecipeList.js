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
			html: "name",
			itemId: "name"
		}, {
			xtype : "button",
			iconCls : "delete",
			docked : "right",
			itemId: "button",
			handler : function(btn, e) {
				var dishId = btn.getId();
				var index = dishStore.find("id", dishId);
				var dish = dishStore.getAt(index).raw;
				
				// we can remove dish in this list
				// recipeStore.add(dish);
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

Ext.define('mo.view.user.RecipeList', {

	extend: 'Ext.dataview.DataView',
	xtype: 'recipe',

	config: {
		store: recipeStore,
		defaultType : "recipeItem",
		useComponents : true
		// itemTpl: '<div class="recipe">{name}</div>'
	}
});
