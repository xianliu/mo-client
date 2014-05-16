Ext.define('mo.view.user.UserForm', {

	extend : 'Ext.form.Panel',
	xtype : 'userForm',

	requires : ['mo.view.user.RecipeList', 'mo.view.user.SegView'],

	constructor : function(config) {
		this.callParent(arguments);
		userForm = this;
	},

	config : {
		defaults : {
			required : true
		},
		items : [{
			xtype : 'textfield',
			name : 'username',
			label : 'User Name'
		}, {
			xtype : 'passwordfield',
			name : 'password',
			label : 'Password'
		}, {
			xtype : 'toolbar',
			docked : 'bottom',
			scrollable : {
				direction : 'horizontal',
				directionLock : true
			},
			items : [{
				xtype : 'spacer'
			}, {
				text : 'Reset',
				scope : this,
				handler : function() {
					userForm.reset();
				}
			}, {
				text : 'Submit',
				ui : 'confirm',
				scope : this,
				handler : function() {
					userForm.setMasked({
	                    xtype: 'loadmask',
	                    message: '登录中'
	                });
					
					var url = host + '/mo-server/api/login.json';
					Ext.data.JsonP.request({
					    url: url,
					    params: userForm.getValues(),
					    success: function(data) {
					    	userForm.setMasked(false);
					    	if(data.code != null && data.code == 503) {
								Ext.Msg.alert('登录信息', '用户名或者密码错误', Ext.emptyFn);
					    	} else {
					    		Ext.ComponentQuery.query("userContainer")[0].push(new mo.view.user.SegView());
					    		userInfo = data;
					    	}
					    }
					});
					
				}
			}]
		}]
	}
});
