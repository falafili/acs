<?php
/** @noinspection PhpIncludeInspection */
require_once dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php';
/** @noinspection PhpIncludeInspection */
require_once MODX_CORE_PATH . 'config/' . MODX_CONFIG_KEY . '.inc.php';
/** @noinspection PhpIncludeInspection */
require_once MODX_CONNECTORS_PATH . 'index.php';
/** @var acs $acs */
$acs = $modx->getService('acs', 'acs', $modx->getOption('acs_core_path', null, $modx->getOption('core_path') . 'components/acs/') . 'model/acs/');
$modx->lexicon->load('acs:default');

// handle request
$corePath = $modx->getOption('acs_core_path', null, $modx->getOption('core_path') . 'components/acs/');
$path = $modx->getOption('processorsPath', $acs->config, $corePath . 'processors/');
$modx->request->handleRequest(array(
	'processors_path' => $path,
	'location' => '',
));