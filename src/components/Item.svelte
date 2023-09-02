<script lang="ts">
	import { fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	const getThumbnail = () => {
		if (item.thumbnail) {
			return item.thumbnail;
		} else if (item.link.includes('youtu')) {
			return `https://img.youtube.com/vi/${item.link?.split('/').at(-1)}/hqdefault.jpg`;
		} else {
			return 'https://s3.us-east-2.amazonaws.com/bp.house/imhLoopedPoster.jpg';
		}
	};

	const handleClick = () => {
		if (item.link) {
			window.open(item.link, '_blank');
		}
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Enter' || event.key === ' ') {
			handleClick();
		}
	};

	export let item: any;
</script>

<div
	class="item-container"
	role="button"
	tabindex="0"
	on:click={handleClick}
	on:keydown={handleKeyDown}
	transition:fade={{ duration: 500, delay: 500, easing: quintOut }}
>
	<div class="thumbnail-container">
		<img src={getThumbnail()} class="thumbnail" alt="{item.title} thumbnail" />
	</div>

	<div class="item-info crt-text">
		<div class="item-title">{item.title || ''}</div>
		<h2 class="item-description">{item.description || ''}</h2>
	</div>
</div>

<style>
	.item-container {
		display: flex;
		flex-direction: column;
		justify-content: safe;
		align-items: center;
		font-family: 'Menlo';
		/* font-size: 1.3em; */
		color: #ffffff;
		text-align: center;
		width: 75%;
		height: auto;
		margin: 0.5rem 1rem;
		background: transparent;
		border-radius: 8px;
		padding: 0.5rem;
		text-decoration: none;
		text-align: center;
		text-shadow: 0px 0px 0px #263666;
		transition: all 0.2s ease-in-out;
		text-overflow: ellipsis;
		/* flex-basis: 25%; */
	}

	.item-container:hover {
		color: rgb(0, 0, 0, 1);
		cursor: pointer;
		background-color: #4aabff6e;
	}

	.item-info {
		padding: 10px;
	}

	.item-title {
		font-weight: bold;
		margin: 10px;
	}

	.item-description {
		font-size: 1rem;
	}

	.thumbnail {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 8px;
		object-fit: cover;
	}

	.thumbnail-container {
		width: 100%;
		height: 0;
		padding-bottom: 100%;
		position: relative;
	}

	@media (min-width: 1051px) {
		.item-container {
			padding: 1rem;
			margin: 0.5rem;
			width: 40%;
		}
	}
</style>
