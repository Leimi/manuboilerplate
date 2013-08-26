<!DOCTYPE html>
<?php $page = !empty($page) ? "page--".$page.' ' : ''; ?>
<!--[if lt IE 7]>      <html lang="fr" class="<?php echo $page ?>no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="fr" class="<?php echo $page ?>no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html lang="fr" class="<?php echo $page ?>no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="fr" class="<?php echo $page ?>no-js "> <!--<![endif]-->
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title><?php echo !empty($title) ? $title : APP_TITLE  ?></title>
		<meta name="description" content="<?php echo !empty($description) ? $description : APP_TITLE ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<!-- dev : /css/style.css -->
		<?php $css = PROD ? '/css/style.min.css?v=957465612021901' : '/css/style.css?v='.time() ?>
		<link rel="stylesheet" href="<?php echo $css ?>">
		<script src="/js/modernizr.custom.js"></script>
	</head>
	<body>

		<!--[if lte IE 8]>
			<p class="obsolete-browser">Vous utilisez un navigateur <strong>obsolète</strong>. <a href="http://browsehappy.com/" target="_blank">Mettez-le à jour</a> pour naviguer sur Internet de façon <strong>sécurisée</strong> !</p>
		<![endif]-->

		<div id="container">
			<?php if (!empty($flash)): ?>
			<?php foreach ($flash as $type => $message): ?>
				<p class="flash flash--<?php echo $type ?>"><?php echo $message ?></p>
			<?php endforeach ?>
			<?php endif ?>