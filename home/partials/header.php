<!DOCTYPE html>

<html>
	<head>
		<title><?= $title ?></title>
		<meta name="description" content="<?= $description ?>" >

		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

		<link href="/general.css" type="text/css" rel="stylesheet" />
		<link href="/specific.css" type="text/css" rel="stylesheet" />

		<link rel="icon" type="image/png" href="/images/favicon.png">
	</head>

	<body>

		<div id="content">
			<?php if (!isset($noBanner)) { ?>
				<div class="divider large"></div>
				<header>
					<h1><a href="/">gus glover</a></h1>
					<div id="tagline">
						<em>~world headquarters</em>
					</div>
				</header>
				<div class="divider"></div>
			<?php } ?>

			<main>