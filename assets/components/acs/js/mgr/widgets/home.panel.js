acs.panel.Home = function (config) {
	config = config || {};
	Ext.apply(config, {
		baseCls: 'modx-formpanel',
		layout: 'anchor',
		/*
		 stateful: true,
		 stateId: 'acs-panel-home',
		 stateEvents: ['tabchange'],
		 getState:function() {return {activeTab:this.items.indexOf(this.getActiveTab())};},
		 */
		hideMode: 'offsets',
		items: [{
			html: '<h2>' + _('acs') + '</h2>',
			cls: '',
			style: {margin: '15px 0'}
		}, {
			xtype: 'modx-tabs',
			defaults: {border: false, autoHeight: true},
			border: true,
			hideMode: 'offsets',
			items: [{
				title: _('acs_items'),
				layout: 'anchor',
				items: [{
					html: _('acs_intro_msg'),
					cls: 'panel-desc',
				}, {
					xtype: 'acs-grid-items',
					cls: 'main-wrapper',
				}]
			}]
		}]
	});
	acs.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(acs.panel.Home, MODx.Panel);
Ext.reg('acs-panel-home', acs.panel.Home);
