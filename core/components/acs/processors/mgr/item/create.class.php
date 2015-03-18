<?php

/**
 * Create an Item
 */
class acsItemCreateProcessor extends modObjectCreateProcessor {
	public $objectType = 'acsItem';
	public $classKey = 'acsItem';
	public $languageTopics = array('acs');
	//public $permission = 'create';


	/**
	 * @return bool
	 */
	public function beforeSet() {
		$name = trim($this->getProperty('name'));
		if (empty($name)) {
			$this->modx->error->addField('name', $this->modx->lexicon('acs_item_err_name'));
		}
		elseif ($this->modx->getCount($this->classKey, array('name' => $name))) {
			$this->modx->error->addField('name', $this->modx->lexicon('acs_item_err_ae'));
		}

		return parent::beforeSet();
	}

}

return 'acsItemCreateProcessor';