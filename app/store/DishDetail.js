Ext.define('mo.store.DishDetail', {
	extend : 'Ext.data.Store',

	config : {
		fields : ['id', 'name', 'price', 'group_id','imageName']
	}
});

dishDetailStore = new mo.store.DishDetail();
