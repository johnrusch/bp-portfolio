<script>
	import { fly, fade } from 'svelte/transition';
	import Item from './item.svelte';
	export let items, clickOutside, handleClose, contact;
</script>

<slot>
	{#if !contact}
		<div
			use:clickOutside
			on:outclick={handleClose}
			in:fly={{ y: -200, duration: 1000 }}
			out:fade={{ duration: 250 }}
			class="container"
			class:mobile={window.innerWidth <= 515}
			class:tablet={window.innerWidth > 515 && window.innerWidth <= 1050}
			class:default={window.innerWidth > 1050}
		>
			<a class="close-icon" on:click={handleClose}>X</a>
			{#if items}
				{#each items as item}
					<Item class="text" {item} />
				{/each}
			{/if}
		</div>
	{:else}
		<div
			use:clickOutside
			on:outclick={handleClose}
			in:fly={{ y: -200, duration: 1000 }}
			out:fade={{ duration: 250 }}
			class="contact"
		>
			<h2>All inquiries can be sent to:</h2>
			<br />
			<h2>tboonep@gmail.com</h2>
		</div>
	{/if}
</slot>

<style>
	.container {
		position: absolute;
		z-index: 99;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: flex-start;
		height: auto;
		width: 60vw;
		top: 0;
		left: 20%;
		bottom: 0;
		padding: 1.5rem;
		margin: 1rem;
		border-radius: 0.5em;
		background-color: rgba(0, 0, 0, 0.75);
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
		bottom: 13%;
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

	#close-icon {
		color: #ffffff;
		position: absolute;
		top: 0.1rem;
		right: 0.4rem;
		width: 2rem;
		height: 2rem;
		margin: 0.2rem;
	}

	#close-icon:hover {
		color: #5a5a5a;
		cursor: pointer;
	}

	.contact {
		color: #ffffff;
		position: absolute;
		z-index: 99;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: flex-start;
		height: auto;
		width: 60vw;
		top: 40%;
		left: 20%;
		/* bottom: 0; */
		padding: 1.5rem;
		margin: 1rem;
		border-radius: 0.5em;
		background-color: rgba(0, 0, 0, 0.75);
		overflow-y: scroll;
		overflow-x: hidden;
	}
</style>
