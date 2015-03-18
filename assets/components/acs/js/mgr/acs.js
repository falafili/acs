var acs = function (config) {
	config = config || {};
	acs.superclass.constructor.call(this, config);
};
Ext.extend(acs, Ext.Component, {
	page: {}, window: {}, grid: {}, tree: {}, panel: {}, combo: {}, config: {}, view: {}, utils: {}
});
Ext.reg('acs', acs);

acs = new acs();