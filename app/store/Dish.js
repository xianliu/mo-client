Ext.define('mo.store.Dish', {
	extend : 'Ext.data.Store',

	config : {
		fields : ['id', 'name'],
		data : [{
			id : 1,
			name : "水煮鱼"
		}, {
			id : 2,
			name : "红烧肉"
		}]
	}
});

dishStore = new mo.store.Dish();
