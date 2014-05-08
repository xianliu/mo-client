Ext.define('mo.view.shop.DishDetail', {

	extend: 'Ext.List',
	xtype: 'dishDetail',
	
	config: {
        store: dishDetailStore,
		itemTpl: '<img style="widht:300px;height:200px" src="'+ host + '/mo-server/upload/{imageName}" /><p>菜名：{name}</p><p>价格(￥):{price}</p>' 
		
    }
});