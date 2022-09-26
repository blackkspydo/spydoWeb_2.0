<script lang="ts">
	import { gtag } from 'gtagjs';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	onMount(() => {
		if (typeof gtag !== 'undefined') {
			gtag('config', 'G-4XVL7ZJKR4', {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	});
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-4XVL7ZJKR4">
	</script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'G-4XVL7ZJKR4');
	</script>
</svelte:head>
