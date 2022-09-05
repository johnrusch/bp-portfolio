<script>
	import { fly, fade } from 'svelte/transition';
	import MediaQuery from '../MediaQuery.svelte';
</script>

<slot>
	<!-- default -->
	<MediaQuery query="(min-width: 1051px)" let:matches>
		{#if matches}
			<div
				in:fly={{ y: -200, duration: 1000 }}
				out:fade={{ duration: 250 }}
				class="container default"
			>
				<h2>All inquiries can be sent to:</h2>
				<br />
				<h2>tboonep@gmail.com</h2>
			</div>
		{/if}
	</MediaQuery>

	<!-- tablet -->
	<MediaQuery query="(min-width: 516px) and (max-width: 1050px)" let:matches>
		{#if matches}
			<div
				in:fly={{ y: -200, duration: 1000 }}
				out:fade={{ duration: 250 }}
				class="container tablet"
			>
				<h2>All inquiries can be sent to:</h2>
				<br />
				<h2>tboonep@gmail.com</h2>
			</div>
		{/if}
	</MediaQuery>

	<!-- mobile -->
	<MediaQuery query="(max-width: 515px)" let:matches>
		{#if matches}
			<div
				in:fly={{ y: -200, duration: 1000 }}
				out:fade={{ duration: 250 }}
				class="container mobile"
			>
				<h2>All inquiries can be sent to:</h2>
				<br />
				<h2>tboonep@gmail.com</h2>
			</div>
		{/if}
	</MediaQuery>

</slot>

<style>
	
	.container {
		position: absolute;
		z-index: 99;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		height: auto;
		width: 60vw;
		top: 0;
		left: 20%;
		bottom: 0;
		padding: 2.5rem;
		margin: 1rem;
		border-radius: 0.5em;
		background-color: rgba(37, 105, 182, 0.75);
		overflow-y: scroll;
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
