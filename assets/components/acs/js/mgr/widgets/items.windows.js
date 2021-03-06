acs.window.CreateItem = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'acs-item-window-create';
	}
	Ext.applyIf(config, {
		title: _('acs_item_create'),
		width: 550,
		autoHeight: true,
		url: acs.config.connector_url,
		action: 'mgr/item/create',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	acs.window.CreateItem.superclass.constructor.call(this, config);
};
Ext.extend(acs.window.CreateItem, MODx.Window, {

	getFields: function (config) {
		return [{
			xtype: 'textfield',
			fieldLabel: _('acs_item_name'),
			name: 'name',
			id: config.id + '-name',
			anchor: '99%',
			allowBlank: false,
		}, {
			xtype: 'textarea',
			fieldLabel: _('acs_item_description'),
			name: 'description',
			id: config.id + '-description',
			height: 150,
			anchor: '99%'
		}, {
			xtype: 'xcheckbox',
			boxLabel: _('acs_item_active'),
			name: 'active',
			id: config.id + '-active',
			checked: true,
		}];
	}

});
Ext.reg('acs-item-window-create', acs.window.CreateItem);


acs.window.UpdateItem = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'acs-item-window-update';
	}
	Ext.applyIf(config, {
		title: _('acs_item_update'),
		width: 550,
		autoHeight: true,
		url: acs.config.connector_url,
		action: 'mgr/item/update',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	acs.window.UpdateItem.superclass.constructor.call(this, config);
};
Ext.extend(acs.window.UpdateItem, MODx.Window, {

	getFields: function (config) {
		return [{
			xtype: 'hidden',
			name: 'id',
			id: config.id + '-id',
		}, {
			xtype: 'textfield',
			fieldLabel: _('acs_item_name'),
			name: 'name',
			id: config.id + '-name',
			anchor: '99%',
			allowBlank: false,
		}, {
			xtype: 'textarea',
			fieldLabel: _('acs_item_description'),
			name: 'description',
			id: config.id + '-description',
			anchor: '99%',
			height: 150,
		}, {
			xtype: 'xcheckbox',
			boxLabel: _('acs_item_active'),
			name: 'active',
			id: config.id + '-active',
		}];
	}

});
Ext.reg('acs-item-window-update', acs.window.UpdateItem);