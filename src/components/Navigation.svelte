<script>
	import { navigation } from '../store/data';
</script>

<nav
	class="
	md:hidden
"
>
	<ul
		class="
		z-5 relative flex flex-row items-center justify-center gap-x-2
	"
	>
		{#each navigation as item}
			<li
				class="
				relative
				list-none
			"
			>
				<a
					href={item.url}
					class="
					after:content['']
					after:transition:all
					py-3 
					px-1
					text-xl
					text-black
					no-underline
					after:absolute
					after:bottom-[-3px]
					after:left-0
					after:h-1
					after:w-0
					after:origin-left
					after:bg-black
					after:duration-500
					after:ease-in-out	
					after:rounded
					hover:no-underline
					hover:after:w-full
					hover:after:bg-black
					dark:hover:after:bg-white
					hover:after:duration-500
					hover:text-black
					dark:text-white
					dark:hover:text-white
				">{item.name}</a
				>
			</li>
		{/each}
	</ul>
</nav>
