<script>
	import '../../tailwind.css';
	import Header from '../../../src/components/Header.svelte';
	import Footer from '../../../src/components/Footer.svelte';
	import Nav from '../../../src/components/Nav.svelte';

	import { MY_TWITTER_HANDLE, MY_YOUTUBE, REPO_URL, SITE_TITLE } from '$lib/siteConfig';
</script>

<svelte:head>
	<link
		rel="alternate"
		type="application/rss+xml"
		title={'RSS Feed for ' + SITE_TITLE}
		href="/rss.xml"
	/>
</svelte:head>

<!-- <Header /> -->
<Nav />
<main class="
	mt-14
">
	<slot />
</main>
<Footer />
