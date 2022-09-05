<script>
	import imageUrlBuilder from '@sanity/image-url';
	import { client } from './index.js';
	export let item;

	const builder = imageUrlBuilder(client);

	function urlFor(source) {
		return builder.image(source);
	}

	console.log(window.innerWidth <= 480);

	const handleClick = () => {
		window.open(item.link, '_blank');
	};
</script>

<div class="item-container" class:mobile={window.innerWidth <= 515} class:tablet={window.innerWidth <= 1050} on:click={handleClick}>
	{#if !item.thumbnail}
		<img src="src/imhLoopedPoster.png" class="thumbnail" alt="{item.title} thumbnail" />
	{:else}
		<img src={urlFor(item.thumbnail).url()} class="thumbnail" alt="temp alt" />
	{/if}

	<div class="item-info">
		<h3 class="item-title">{item.title}</h3>
		<div class="item-description">{item.description}</div>
	</div>
</div>

<style>
	.item-container {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		font-family: 'Rubik';
		/* font-size: 1.3em; */
		color: #ffffff;
		text-align: center;
		width: 40%;
		height: 38%;
		margin: 0.5rem;
		box-shadow: -1px 5px 7px 0px #093042;
		background: linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);
		background-color: #2dabf9;
		border-radius: 8px;
		border: 1px solid #0b0e07;
		padding: 1rem;
		text-decoration: none;
		text-align: center;
		text-shadow: 0px 0px 0px #263666;
	}

	.item-container:hover {
		color: rgb(0, 0, 0, 1);
		cursor: pointer;
		background-color: #0688fa;
	}

    .item-container.tablet {
        padding: .5rem;
    }

	.item-info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		margin: 0.4rem;
	}

	.item-title {
		margin: 0;
	}

	.item-description {
		font-size: 1rem;
	}

	.thumbnail {
		width: 75%;
		height: 75%;
		border-radius: 8px;
		object-fit: cover;
	}

	.mobile {
		margin: 0.5rem 1rem;
		width: 75%;
	}

	.mobile:first-child {
		margin-top: 0;
	}

	.mobile:last-child {
		margin-bottom: 0;
	}
</style>
