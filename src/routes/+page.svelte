<script>
	import '../tailwind.css';
	import Newsletter from '../components/Newsletter.svelte';
	import FeatureCard from '../components/FeatureCard.svelte';
	import {
		SITE_URL,
		REPO_URL,
		SITE_TITLE,
		SITE_DESCRIPTION,
		DEFAULT_OG_IMAGE,
		MY_TWITTER_HANDLE
	} from '$lib/siteConfig';
	import Header from '../components/Header.svelte';
	import Cards from '../components/Cards.svelte';
	import Circle from '../components/Circle.svelte';
	import Footer from '../components/Footer.svelte';
	export const prerender = true; // index page is most visited, lets prerender
</script>

<svelte:head>
	<title>{SITE_TITLE}</title>
	<link rel="canonical" href={SITE_URL} />
	<link rel="alternate" type="application/rss+xml" href={SITE_URL + '/rss.xml'} />
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={SITE_TITLE} />
	<meta name="Description" content={SITE_DESCRIPTION} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content={DEFAULT_OG_IMAGE} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content={'@' + MY_TWITTER_HANDLE} />
	<meta name="twitter:title" content={SITE_TITLE} />
	<meta name="twitter:description" content={SITE_DESCRIPTION} />
	<meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
</svelte:head>

<Header />
<main
	class="max-w-screen-2xl 
	pt-14 
	ml-auto 
	flex 
	items-center 
	justify-between	
	"
>
	<Cards />
	<Circle />
</main>
<Footer />

<style type="scss">
	.flex {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1700px;
		margin-left: auto;
		padding-top: 3.5rem;
		overflow-x: clip;
	}
	@media (max-width: 1150px) {
		.flex {
			flex-direction: column;
			&:first-child {
				order: 2;
			}
		}
	}
</style>
