		</div>

		<!-- dev : /js/script.js -->
		<?php $js = PROD ? '/js/script.min.js?v=58797562341' :
			array('/components/jquery/jquery.min.js', '/js/script.js');
		$t = time();
		if (is_string($js)): ?>
		<script src="<?php echo $js ?>"></script>
		<?php else: foreach ($js as $script): ?>
		<script src="<?php echo $script ?>?v=<?php echo $t ?>"></script>
		<?php endforeach; endif; ?>
	</body>
</html>
