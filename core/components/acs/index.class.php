<?php

/**
 * Class acsMainController
 */
abstract class acsMainController extends modExtraManagerController {
	/** @var acs $acs */
	public $acs;


	/**
	 * @return void
	 */
	public function initialize() {
		$corePath = $this->modx->getOption('acs_core_path', null, $this->modx->getOption('core_path') . 'components/acs/');
		require_once $corePath . 'model/acs/acs.class.php';

		$this->acs = new acs($this->modx);
		$this->addCss($this->acs->config['cssUrl'] . 'mgr/main.css');
		$this->addJavascript($this->acs->config['jsUrl'] . 'mgr/acs.js');
		$this->addHtml('
		<script type="text/javascript">
			acs.config = ' . $this->modx->toJSON($this->acs->config) . ';
			acs.config.connector_url = "' . $this->acs->config['connectorUrl'] . '";
		</script>
		');

		parent::initialize();
	}


	/**
	 * @return array
	 */
	public function getLanguageTopics() {
		return array('acs:default');
	}


	/**
	 * @return bool
	 */
	public function checkPermissions() {
		return true;
	}
}


/**
 * Class IndexManagerController
 */
class IndexManagerController extends acsMainController {

	/**
	 * @return string
	 */
	public static function getDefaultController() {
		return 'home';
	}
}