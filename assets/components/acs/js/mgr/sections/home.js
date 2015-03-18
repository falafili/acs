acs.page.Home = function (config) {
	config = config || {};
	Ext.applyIf(config, {
		components: [{
			xtype: 'acs-panel-home', renderTo: 'acs-panel-home-div'
		}]
	});
	acs.page.Home.superclass.constructor.call(this, config);
};
Ext.extend(acs.page.Home, MODx.Component);
Ext.reg('acs-page-home', acs.page.Home);