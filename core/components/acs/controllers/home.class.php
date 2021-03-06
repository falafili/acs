<?php

/**
 * The home manager controller for acs.
 *
 */
class acsHomeManagerController extends acsMainController {
	/* @var acs $acs */
	public $acs;


	/**
	 * @param array $scriptProperties
	 */
	public function process(array $scriptProperties = array()) {
	}


	/**
	 * @return null|string
	 */
	public function getPageTitle() {
		return $this->modx->lexicon('acs');
	}


	/**
	 * @return void
	 */
	public function loadCustomCssJs() {
		$this->addCss($this->acs->config['cssUrl'] . 'mgr/main.css');
		$this->addCss($this->acs->config['cssUrl'] . 'mgr/bootstrap.buttons.css');
		$this->addJavascript($this->acs->config['jsUrl'] . 'mgr/misc/utils.js');
		$this->addJavascript($this->acs->config['jsUrl'] . 'mgr/widgets/items.grid.js');
		$this->addJavascript($this->acs->config['jsUrl'] . 'mgr/widgets/items.windows.js');
		$this->addJavascript($this->acs->config['jsUrl'] . 'mgr/widgets/home.panel.js');
		$this->addJavascript($this->acs->config['jsUrl'] . 'mgr/sections/home.js');
		$this->addHtml('<script type="text/javascript">
		Ext.onReady(function() {
			MODx.load({ xtype: "acs-page-home"});
		});
		</script>');
	}


	/**
	 * @return string
	 */
	public function getTemplateFile() {
		return $this->acs->config['templatesPath'] . 'home.tpl';
	}
}