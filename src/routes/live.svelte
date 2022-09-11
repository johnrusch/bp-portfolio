<script>
	import { fly, fade } from 'svelte/transition';
	import AudioItem from './audioItem.svelte';
	export let items, clickOutside, handleClose;
	import MediaQuery from '../MediaQuery.svelte';
</script>

<slot>

	<!-- default -->
	<!-- <MediaQuery query="(min-width: 1051px)" let:matches>
		{#if matches} -->
			<div
				use:clickOutside
				on:outclick={handleClose}
				in:fly={{ y: -200, duration: 1000 }}
				out:fade={{ duration: 250 }}
				class="container default"
				class:mobile={window.innerWidth <= 515}
				class:tablet={window.innerWidth > 515 && window.innerWidth <= 1050}
			>
				{#each items as item}
					<AudioItem {item} />
				{/each}
			</div>
		<!-- {/if}
	</MediaQuery> -->

	<!-- tablet -->
	<!-- <MediaQuery query="(min-width: 516px) and (max-width: 1050px)" let:matches>
		{#if matches}
			<div
				in:fly={{ y: -200, duration: 1000 }}
				out:fade={{ duration: 250 }}
				class="container tablet"
			>
				{#each items as item}
					<AudioItem {item} />
				{/each}
			</div>
		{/if}
	</MediaQuery> -->

	<!-- mobile -->
	<!-- <MediaQuery query="(max-width: 515px)" let:matches>
		{#if matches}
			<div
				in:fly={{ y: -200, duration: 1000 }}
				out:fade={{ duration: 250 }}
				class="container mobile"
			>
				{#each items as item}
					<AudioItem {item} />
				{/each}
			</div>
		{/if}
	</MediaQuery> -->
</slot>

<style>

	.container {
		position: absolute;
		z-index: 99;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: center;
		height: auto;
		width: 60vw;
		top: 0;
		left: 20%;
		bottom: 0;
		padding: 1.5rem;
		margin: 1rem;
		border-radius: 0.5em;
		background-color: rgba(37, 105, 182, 0.75);
		overflow-y: scroll;
		overflow-x: hidden;
	}

	.container.tablet {
		left: 0;
		right: 0;
		z-index: 90;
		margin-left: auto;
		margin-right: auto;
		width: 85%;
		bottom: 17%;
	}

	.container.mobile {
		left: 0;
		right: 0;
		z-index: 90;
		margin-left: auto;
		margin-right: auto;
		width: 75%;
		bottom: 10%;
	}
</style>
