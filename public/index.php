<?php
	require dirname(__FILE__).'/../app/config/init.php';

	$app->get('/', function() use ($app) {
		$app->render('home.php', array());
	})->name('home');

	$app->run();
?>