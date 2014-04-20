Ext.define('mo.view.user.UserForm', {

	extend : 'Ext.form.Panel',
	xtype : 'userForm',
	
	requires: ['mo.view.user.RecipeList'],

	constructor : function(config) {
		this.callParent(arguments);
		// now the userForm is a global var
		userForm = this;
	},

	config : {
		defaults : {
			required : true
		},
		items : [{
			xtype : 'textfield',
			name : 'name',
			label : 'Name'
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
					Ext.ComponentQuery.query("userContainer")[0].push(new mo.view.user.RecipeList());
					console.log(userForm.getValues());
					// form.submit({
					// url: 'user.json',
					// waitMsg: 'Saving User...'
					// });
				}
			}]
		}]
	}
});
