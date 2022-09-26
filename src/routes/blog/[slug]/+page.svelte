<script>
	import { MY_TWITTER_HANDLE, SITE_URL } from '$lib/siteConfig';
	import Comments from '../../../components/Comments.svelte';
	import 'prism-themes/themes/prism-shades-of-purple.min.css';
	import Newsletter from '../../../components/Newsletter.svelte';
	import Reactions from '../../../components/Reactions.svelte';
	import { views_register, db } from '../../../Firebase';
	import { doc, getDoc, getDocs, setDoc, query, where } from 'firebase/firestore';
	import { page } from '$app/stores'
	import { onMount } from 'svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {import('$lib/types').ContentItem} */
	$: json = data.json;
	$: comments = [];

	$: canonical = SITE_URL + $page.url.pathname;
	$: views = 0;

	const setViews = async () => {
		const docRef = doc(db, 'views_register', $page.params.slug);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			await setDoc(docRef, {
				slug: $page.params.slug,
				views: docSnap.data().views + 1
			});
			views = docSnap.data().views + 1;
		} else {
			await setDoc(docRef, {
				slug: $page.params.slug,
				views: 1
			});
		}
	};

	const getViews = async () => {
		const docRef = doc(db, 'views_register', $page.params.slug);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			views = docSnap.data().views;
		} else {
			views = 1;
		}
	};

	if (typeof window !== 'undefined') {
		const BLOGS = localStorage.getItem('BLOGS') ? JSON.parse(localStorage.getItem('BLOGS')) : [];
		if (!BLOGS.includes($page.params.slug)) {
			BLOGS.push($page.params.slug);
			localStorage.setItem('BLOGS', JSON.stringify(BLOGS));
			setViews();
		} else {
			getViews();
		}
	}

	onMount(async ()=>{
		comments = await fetch(json.ghMetadata.commentsUrl).then((res) => res.json());
	})

	

</script>

<svelte:head>
	<title>{json.title}</title>
	<link rel="canonical" href={canonical} />
	<meta property="og:url" content={canonical} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={json.title} />
	<meta name="Description" content={json.description} />
	<meta property="og:description" content={json.description} />
	<meta name="twitter:card" content={json.image ? 'summary_large_image' : 'summary'} />
	<meta name="twitter:creator" content={'@' + MY_TWITTER_HANDLE} />
	<meta name="twitter:title" content={json.title} />
	<meta name="twitter:description" content={json.description} />
	{#if json.image}
		<meta property="og:image" content={json.image} />
		<meta name="twitter:image" content={json.image} />
	{/if}
</svelte:head>

<article
	class="sm:px-8 mx-auto mb-16 flex w-full max-w-4xl flex-col items-start justify-center px-4"
>
	<h1 class="mb-8 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl ">
		{json.title}
	</h1>
	<div
		class="bg sm:flex-col sm:items-start mt-2 flex w-full justify-between md:flex-row md:items-center"
	>
		<p class="flex items-center text-sm text-gray-700 dark:text-gray-300">Blackkspydo</p>
		<p class="min-w-32 flex items-center text-sm text-gray-600 dark:text-gray-400 md:mt-0">
			<span class="mr-4 font-mono text-xs text-gray-700 text-opacity-70 dark:text-gray-300"
				>{views} views</span
			>
			<a href={json.ghMetadata.issueUrl} rel="external" class="no-underline" target="_blank">
				<span class="mr-4 font-mono text-xs text-gray-700 text-opacity-70 dark:text-gray-300"
					>{json.ghMetadata.reactions.total_count} reactions</span
				>
			</a>
			{new Date(json.date).toISOString().slice(0, 10)}
		</p>
	</div>
	<div
		class=" sm:mx-0 sm:w-full my-2 flex h-1 w-[100%] bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
	/>

	<div class="prose mt-16 mb-32 w-full max-w-full text-lg dark:prose-invert">
		{@html json.content}
	</div>
</article>
<div class="mx-auto max-w-4xl">
	<div
		class="prose mb-12 flex justify-between border-t border-b border-blue-800 p-4 dark:prose-invert"
	>
		{#if json.ghMetadata.reactions.total_count > 0}
			<div>
				Reactions: <Reactions
					issueUrl={json.ghMetadata.issueUrl}
					reactions={json.ghMetadata.reactions}
				/>
			</div>
		{/if}
		<div>
			<a href={json.ghMetadata.issueUrl}>Leave a reaction </a>
			if you liked this post! 🧡
		</div>
	</div>
	<div class="mb-8">
		<Comments ghMetadata={json.ghMetadata} {comments} />
	</div>

	<Newsletter />
</div>
