<?php

$description = "Seattle kid's thoughts and creative ventures.";
$title = "Gus Glover";
$scripts = array('chart.js', 'sleep_chart_init.js');

include_once('../../partials/header.php');

?>
			
<h1>Training myself to wake up with data</h1>

<p>
Yesterday I woke up at 800AM and found myself in the same position three and a half hours later. 
Sparse weekend scheduling had wrought its unwelcome side effects on my day's timeline once again. 
I set my alarm for 730AM on normal nights and expect to get on with it from the from the instant I
hear a buzz. It’s an expectation that’s entirely unrealistic and usually accompanied with at least
4 - 5 snooze cycles. <br/><br/>

I'm sure there are loads of other chronic oversleepers out there who share 
this annoying struggle with me. I personally choose to spend this time sifting though my faucet of social 
media slop. I’d much rather read a book, fix a proper breakfast, exercise or at least have the license 
to decide for myself but it's a tough habit to crack. Let’s fix this, I’m quite tired of being late.</p>

<p>Here’s what I’ve tried to break my rut:<br/>

<dl id="attempts-list">
	<dt>Going to bed earlier</dt>
	<dd>&#x2612; Snooze until I’m forced to get up through real world obligations.</dd>
	<dt><a href="http://lifehacker.com/how-to-turn-your-phone-into-the-ultimate-alarm-clock-fo-1247925652">Gimmicky alarm apps</a></dt>
	<dd>&#x2612; Delete the app immediately.</dd>
	<dt>Putting electronics in another room</dt>
	<dd>&#x2612; Snooze repeatedly, go fetch them and return to bed.</dd>
</dl>

In this desperate life-hack I’ll be graphing the amount of irretrievable time I’ve wasted trying to get
up in the morning. Hopefully, if I’m forced to think critically everyday about the admittedly asinine 
reasons behind my lost time rather than shrug and chalk up a loss I’ll come to manage my vices with 
more control.</p>

<h2 id="total-hours">Life Wasted: <em></em> hours</h2>

<h4>Time to get out of bed</h4>
<div class="chart-container">
	<canvas id="hours-to-wake-chart" width="400" height="200"></canvas>
</div>

<h4>Time slept</h4>
<div class="chart-container">
	<canvas id="hours-slept-chart" width="400" height="100"></canvas>
</div>

<div class="divider"></div>

<p id="reasons">
</p>




<?php

include_once('../../partials/footer.php');

?>
