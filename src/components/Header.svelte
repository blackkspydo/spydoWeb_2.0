<script>
	import Navigation from './Navigation.svelte';
	import MobNavigation from './MobileNavigation.svelte';
</script>

<header
	class="flex-container 
			w-9/10	
 			md:w-100
 			relative 
			right-0
			top-8 
			left-[5%] 
			flex 
			max-w-[calc(100%_-_650px)]	
			flex-row 
			items-center 
			justify-between 
			md:top-0 
			md:max-w-full 
			md:items-center
			md:justify-between
			md:px-3
			md:py-0
			lg:min-w-[600px]
			md:mx-auto
			md:my-0
			md:left-0
"
>
	<a
		href="/"
		class="relative z-10 text-black  hover:text-black  hover:no-underline dark:text-white hover:dark:text-white"
	>
		<h2 class="text-2xl font-bold ">Blackk Spydo</h2></a
	>
	<Navigation />
	<MobNavigation />
</header>

