<script>
	import { fly } from 'svelte/transition';
	import NavLink from './NavLink.svelte';
</script>

<div class="crt">
	<div in:fly={{ y: 200, duration: 500, delay: 750 }} id="tab-container">
		<nav class="text" id="tabs">
			<NavLink href="/video" title="Video" />
			<NavLink href="/audio" title="Audio" />
			<NavLink href="/live" title="Live" />
			<NavLink href="/contact" title="Contact" />
		</nav>
	</div>
</div>

<style>
	#tab-container {
		display: flex;
		justify-content: center;
		align-items: center;
		bottom: 0;
		padding: 1rem;
	}

	#tabs {
		position: fixed;
		left: 0;
		bottom: 0;
		right: 0;
		height: 10vh;
		overflow: hidden;
		z-index: 99;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		width: 100%;
		min-width: 7rem;
		padding: 0;
		padding-left: 0;
		padding-right: 0;
		border-radius: 0;
		background-color: rgba(0, 0, 0, 0.75);
		list-style: none;
	}
	
	@media (min-width: 515px) and (max-width: 1050px) {
		#tabs {
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			overflow: hidden;
			flex-direction: row;
			justify-content: space-evenly;
			margin: auto;
			padding: 0.5rem;
			padding-left: 0rem;
			padding-right: 0rem;
		}
	}

	@media (min-width: 1051px) {
		#tab-container {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 97vh;
			width: 18vw;
			top: 0;
			left: 0;
			bottom: 0;
			padding: 1rem;
		}
		#tabs {
			position: fixed;
			left: auto;
			bottom: auto;
			right: auto;
			z-index: 99;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 9rem;
			min-width: 7rem;
			height: auto;
			padding: 1em;
			padding-left: 0;
			padding-right: 0;
			margin-top: 1em;
			margin-left: 1em;
			margin-bottom: 1em;
			border-radius: 0.5em;
			background-color: rgba(0, 0, 0, 0.75);
			list-style: none;
		}
	}
</style>
