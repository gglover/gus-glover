<?php

$description = "An ongoing log of modern garments tailored together from Goodwill bargain racks.";
$title = "Goodwill Alterations: Two-tone Polo | Gus Glover";
$scripts = array();

include_once('../../partials/header.php');

?>

<h1>Two-tone Polo</h1>
<h4>Goodwill Alterations #4 | <a href="/blog/goodwill-alterations-asymmetric-cargo-shorts">< prev</a></h4>

<?php

$columns = "two";
$image = "italian";
$caption = "<strong>$5.99</strong> Fürstenberg Vintage Polo";
include('../../partials/lightbox_img.php');

$columns = "two";
$image = "hm";
$caption = "<strong>$4.99</strong> H&M Polo";
include('../../partials/lightbox_img.php');

?>

<div class="expense-total">Total Expenses: <strong>$10.98</strong></div>

<h2>The Project</h2>

<?php

$columns = "one";
$image = "front";
$caption = "";
include('../../partials/lightbox_img.php');

?>

<p>Gus ~ 7/13/2016</p>

<?php

include_once('../../partials/footer.php');

?>
