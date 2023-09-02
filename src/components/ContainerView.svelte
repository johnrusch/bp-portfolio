<script>
	import { fly, fade } from 'svelte/transition';

</script>

<div in:fly={{ y: -200, duration: 1000 }} out:fade={{ duration: 250 }} class="container">
	<slot />
</div>

<style>
	.container {
		position: absolute;
		z-index: 90;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: flex-start;
		height: auto;
		width: 75%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 10%;
		padding: 1.5rem;
		margin: 1rem;
		margin-left: auto;
		margin-right: auto;
		border-radius: 0.5em;
		background-color: rgba(0, 0, 0, 0.75);
		overflow-y: scroll;
		overflow-x: hidden;
	}

	@media (min-width: 516px) and (max-width: 1050px) {
		.container {
			width: 85%;
			bottom: 13%;
		}
	}

	@media (min-width: 1051px) {
		.container {
			width: 60vw;
			bottom: 0;
			left: 20%;
			margin: 1rem;
			z-index: 99;
			margin-left: initial;
			margin-right: initial;
		}
	}
</style>
