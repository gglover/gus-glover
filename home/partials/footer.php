</main>
<div class="divider large"></div>
<footer>

				<div class="footer-focus">
					<a href="/"><img class="icon" src="/images/gus_icon.png"/></a>
					<a href="mailto:gglover@uw.edu">email</a><br/>
					<a href="https://github.com/gglover">github</a>
				</div>

				<div id="audio" class="hidden footer-focus">
					<a href="http://www.last.fm/user/Asparagus22"><img class="icon" id="audio-album-cover"/></a>
					<span id="audio-song"></span><br/>
					<span id="audio-album"></span>
				</div>
			</footer>
		</div>

		<script src="/index.js" type="text/javascript"></script>
		
		<?php foreach ($scripts as $script): ?>
			<script src="<?= $script ?>" type="text/javascript"></script>
		<?php endforeach; ?>

		<script>
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-46781516-2', 'auto');
		  ga('send', 'pageview');

		</script>

	</body>

</html>