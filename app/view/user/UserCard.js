Ext.define('mo.view.user.UserCard', {
	extend: 'Ext.NavigationView',
	xtype: 'userContainer',
	
	requires: ['mo.view.user.UserForm'],

	config: {
		title: '用户中心',
        iconCls: 'user',
	
		items: [ {
			title: 'User Center',
			xtype: 'userForm'
		}]
	}
});
