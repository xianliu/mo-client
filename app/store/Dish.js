Ext.define('mo.store.Dish', {
	extend : 'Ext.data.Store',

	config : {
		fields : ['id', 'name', 'price', 'group_id','imageName']
	}
});

dishStore = new mo.store.Dish();
