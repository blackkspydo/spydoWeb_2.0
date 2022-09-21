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
			max-w-[calc(100%_-_600px)]	
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
			




"
>
	<a href="/" class="relative z-10 text-black  dark:text-white ">
		<h2 class="text-2xl font-bold">Blackk Spydo</h2></a
	>
	<Navigation />
	<MobNavigation />
</header>

<style type="scss">
	@media (max-width: 552px) {
		.flex-container {
			top: 20px;
			margin: 0 auto;
			left: 0;
		}
	}
	@media (min-width: 552px) {
		.flex-container {
			// max-width: min(1000px, calc(100% - 700px));
		}
	}
</style>
