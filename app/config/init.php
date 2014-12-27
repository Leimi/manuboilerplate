<?php
session_cache_limiter(false);
session_start();

date_default_timezone_set('Europe/Paris');

define('APP_PATH', __DIR__.'/..');
define('CONFIG_PATH', __DIR__);
define('ROUTES_PATH', APP_PATH.'/routes');
define('LIB_PATH', APP_PATH.'/lib');
define('MODELS_PATH', APP_PATH.'/models');
define('WEBROOT_PATH', __DIR__.'/../../public');

require APP_PATH.'/config/app.php';

if (!defined('PROD'))
	define('PROD', (!empty($_SERVER['SERVER_NAME']) && strpos($_SERVER['SERVER_NAME'], APP_SERVER) !== false));
error_reporting(PROD ? 0 : E_ALL);

require APP_PATH.'/config/database.php';
require APP_PATH.'/vendor/autoload.php';
require LIB_PATH.'/PlatesView.php';

RedBean_Facade::setup("mysql:host=".DB_HOST.";dbname=".DB_NAME."", DB_USER, DB_PASSWORD);
RedBean_Facade::freeze(PROD);
RedBean_Facade::$writer->setUseCache(true);

$view = new PlatesView();
$app = new \Slim\Slim(array(
	'view' => $view,
	'templates.path' => APP_PATH.'/views',
	'debug' => intval(!PROD),
	'mode' => 'development'
));

define('HOST', $app->request()->getUrl());
define('CURRENT', $app->request()->getPath());

$app->hook('slim.before.dispatch', function() use ($app) {
	$app->view()->setData('app', $app);
});