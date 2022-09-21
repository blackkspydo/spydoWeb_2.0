<script>
	import { navigation } from '../store/data';
	let isOpen = false;
	const navHandler = () => {
		isOpen = !isOpen;
	};
</script>

<button
	class="toggle
z-10  border-none bg-none 
px-0
py-6
md:visible
"
	on:click={navHandler}
>
	<span
		class="
		mb-3 h-1
		w-14
		rounded-2xl
		bg-black
		dark:bg-white
		"
	/>
	<span
		class="
		h-1
		w-14
		rounded-2xl
		bg-black
		dark:bg-white"
	/>
</button>

<nav
	class:active={isOpen}
	class="
		fixed
		top-0
		right-0
		bottom-0
		z-10
		h-screen
		w-[350px]
		max-w-[50%]
		bg-white
		dark:bg-slate-700
		md:visible
"
>
	<button
		on:click={navHandler}
		class="
	 	absolute
		top-7
		right-3
		z-10
		border-none 
		bg-none 
		text-black
		dark:text-white
	"
	>
		<svg width="35" height="35" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M2.02156 0.330291C0.57464 0.960308 -0.216755 2.63535 0.134844 4.32326C0.267855 4.96162 2.47327 7.29481 11.4187 16.2616L22.5375 27.4067L11.5398 38.4303C5.49107 44.4933 0.423751 49.6881 0.27882 49.9744C-0.42843 51.3731 0.264279 53.4408 1.74171 54.3416C2.5977 54.8636 4.05011 54.9626 4.85843 54.554C5.14471 54.4091 10.3403 49.3413 16.4037 43.2919L27.4285 32.2929L38.4532 43.2919C44.5169 49.3413 49.7122 54.4091 49.9985 54.554C50.8068 54.9626 52.2592 54.8636 53.1152 54.3416C54.5926 53.4408 55.2853 51.3731 54.5781 49.9744C54.4331 49.6881 49.3658 44.4933 43.3171 38.4303L32.3194 27.4067L43.4447 16.2616C53.1078 6.58112 54.5907 5.00143 54.7285 4.24126C55.2427 1.4063 52.7865 -0.739285 50.1489 0.240901C49.7799 0.378204 44.5169 5.44599 38.4532 11.503L27.4285 22.5158L16.4037 11.503C10.3403 5.44599 5.07701 0.378204 4.70801 0.240901C3.81722 -0.0901976 2.91855 -0.0601627 2.02156 0.330291Z"
				fill="currentColor"
			/>
		</svg>
	</button>
	<ul
		class="
	mt-[20px]
	w-[200px]
	"
	>
		{#each navigation as item}
			<li>
				<a href={item.url} class="text-black hover:text-yellow-900 dark:text-white">{item.name}</a>
			</li>
		{/each}
	</ul>
</nav>

<style type="scss">
	@import '../theme/scss/mixins.scss';
	@import '../theme/scss/variables.scss';
	.toggle {
		background: none;
		border: none;
		z-index: 10;
		padding: 25px 0;
		span {
			display: block;
			&:first-child {
				width: 55px;
				margin-bottom: 10px;
			}
			height: 6px;
			border-radius: 15px;
			width: 40px;
		}
	}

	.active {
		margin-right: 0 !important ;
	}
	nav {
		position: fixed;
		top: 0;
		bottom: 0;
		height: 100vh;
		right: 0;
		// background-color: $white;
		z-index: 10;
		width: min(350px, 50%);
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		margin-right: -500px;
		transition: all 0.3s ease-out;
	}
	ul {
		margin-top: 50px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
		z-index: 5;
		li {
			list-style: none;
			margin: toRem(10) 0;
			margin-left: 20%;
			a {
				text-decoration: none;
				font-size: 1.2em;
				padding: toRem(10) toRem(5);

				transition: $transition;
				position: relative;
			}
		}
	}
	@media (min-width: 590px) {
		nav {
			display: none;
		}
		.toggle {
			display: none;
		}
	}
</style>
