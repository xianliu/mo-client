Ext.define('mo.view.user.UserCard', {

	extend: 'Ext.NavigationView',
	xtype: 'userContainer',
	
	requires: ['mo.view.user.UserForm'],

	config: {
		title: 'User',
        iconCls: 'user',
	
		items: [ {
			title: 'User Center',
			xtype: 'userForm'
		}]
	}
});
