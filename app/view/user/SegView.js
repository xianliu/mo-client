Ext.define('mo.view.user.SegView', {
    extend: 'Ext.Container',
    xtype: 'seg',
    requires:['Ext.dataview.List','Ext.SegmentedButton', 'mo.view.user.RecipeList', 'mo.view.user.SubmitList'],
    config:{
    	 listeners : {
	        	painted : function() {
	        		var price = getTotalPrice(recipeStore);
	        		Ext.ComponentQuery.query("seg #price")[0].setHtml('￥' + price);
	        	}	
	    },
        layout:{
            type:'card'
        },
        items:[
            {
                xtype:'toolbar',
                docked: 'top',
                items:[
                    {
                        xtype:'spacer'
                    },
                    {
                        xtype:'segmentedbutton',
                        id : 'segBtnId',
                        items: [{
                            text: '购物车', 
                            pressed: true,
                            handler : function() {
                            	var container = Ext.ComponentQuery.query("seg")[0];
						        var selectedComponent = container.getComponent("First");
						        container.setActiveItem(selectedComponent);
                            }
                        }, {
                            text: '已完成订单',
                            handler : function(segmentedbutton, button) {
                            	var container = Ext.ComponentQuery.query("seg")[0];
						        var selectedComponent = container.getComponent("Second");
						        
						        var url = host + '/mo-server/api/recipeList.json';
						        
						        Ext.data.JsonP.request({
								    url: url,
								    params: {
								    	userId: userInfo.userId
								    },
								    success: function(data) {
								    	submitRecipeStore.removeAll();
										Ext.Array.each(data, function(ele) {
								          	submitRecipeStore.add(ele);
										});
										
										container.setActiveItem(selectedComponent);
								    }
								});
                            }
                        }]
                    },
                    {
                        xtype:'spacer'
                    }
                ]
            },
            {
                xtype: 'recipe', 
                itemId: 'First'
            }, {
                xtype: 'submit-recipe', 
                itemId: 'Second'
            }, {
			    xtype: 'toolbar',
			    docked: 'bottom',
			    layout: { pack: 'right' },
			    items: [
			        {
			            xtype: 'panel',
			            html: '￥150',
			            itemId: 'price'
			        },
			        {
			            xtype: 'button',
			            text: '提交订单',
			            handler: function() {
			            	var config = {
			            		 items : [{
									xtype : 'textareafield',
									name : 'location',
									label : '地址',
									itemId : 'location',
									required : true
								}, {
									xtype : 'toolbar',
									scrollable : {
										direction : 'horizontal',
										directionLock : true
									},
									items : [{
										xtype : 'spacer'
									}, {
										text : '取消',
										scope : this,
										handler : function() {
											Ext.ComponentQuery.query("#recipe-form")[0].hide();
										}
									}, {
										text : '提交',
										ui : 'confirm',
										scope : this,
										handler : function() {
											var url = host + '/mo-server/api/saveRecipe.json';
											var sum = 0;
											
											recipeForm = Ext.ComponentQuery.query("#recipe-form")[0];
											
											recipeForm.setMasked({
							                    xtype: 'loadmask',
							                    message: '登录中'
							                });
							        		
											var params = {
												access_token : userInfo.accessToken,
												location : encodeURIComponent(Ext.ComponentQuery.query("#location")[0].getValue()),
												total_price : getTotalPrice(recipeStore),
												user_id : userInfo.userId,
												detail : JSON.stringify(getDetail(recipeStore))
											};
											
											Ext.data.JsonP.request({
											    url: url,
											    params: params,
											    success: function(data) {
											    	recipeForm.setMasked(false);
											    	recipeStore.removeAll();
											    	recipeForm.hide();
											    }
											});
										}
									}]
								}],
								id: 'recipe-form'
			            	};
			            	
			            	var msgBox = new Ext.MessageBox(config);
			            	msgBox.show({title : "提交订单", buttons : []});
			 			}
			        }
			    ]
			}
        ]
    }
});


function getDetail(recipeStore) {
	var detail = [];
	recipeStore.each(function(item, index, length) {
		var ele = {};
		ele.id = item.get('id');
		ele.sum = item.get('sum');
		detail.push(ele);
	});
	
	return detail;
}

function getTotalPrice(recipeStore) {
	var price = 0;
	recipeStore.each(function(item, index, length) {
		price = price + item.get('price')*1*item.get('sum');
	});
	
	return price;
}

