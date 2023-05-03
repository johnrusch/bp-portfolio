<script>
	import imageUrlBuilder from '@sanity/image-url';
	import client from '../sanityClient';
	import { fade, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { createEventDispatcher, onDestroy } from 'svelte';
	export let item, id, designItem, selected, containerElement;

	const builder = imageUrlBuilder(client);

	function urlFor(source) {
		return builder.image(source);
	}

	const dispatch = createEventDispatcher();

	const handleClick = () => {
		if (item.link) {
			window.open(item.link, '_blank');
		}

		if (designItem) {
			window.open(item.image, '_blank');
			// if (!isSelected) {
			// 	dispatch('design', { selected: id });
			// } else {
			// 	dispatch('design', { selected: null });
			// }
		}
	};

	$: isSelected = id === selected;
</script>

<div
	class="item-container"
	class:isSelected
	class:mobile={window.innerWidth <= 515}
	class:tablet={window.innerWidth <= 1050}
	on:click={handleClick}
	transition:fade={{ duration: 500, delay: 500, opacity: 0.5, start: 0.5, easing: quintOut }}
>
	<!-- {#if isSelected}
		<div class="crt" id="close-icon" on:click={() => handleClose(itemElement)}>x</div>
	{/if} -->
	{#if item.thumbnail}
		<img src={item.thumbnail} class="album-thumbnail" alt="{item.title} cover" />
	{:else if item.link.includes('youtu')}
		<img
			src="https://img.youtube.com/vi/{item.link?.split('/').at(-1)}/hqdefault.jpg"
			class="video-thumbnail"
			class:mobile={window.innerWidth <= 515}
			alt="{item.title} video thumbnail"
		/>
	{:else}
		<img
			src="https://s3.us-east-2.amazonaws.com/bp.house/imhLoopedPoster.jpg"
			class="thumbnail"
			alt="{item.title} thumbnail"
		/>
	{/if}

	<div class="item-info">
		{#if !isSelected}
			<div class="item-title crt">{item.title || ''}</div>
			<div class="item-description crt">{item.description || ''}</div>
		{/if}
	</div>
</div>

<style>
	.item-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		font-family: 'Menlo';
		/* font-size: 1.3em; */
		color: #ffffff;
		text-align: center;
		width: 40%;
		height: auto;
		margin: 0.5rem;
		background: transparent;
		border-radius: 8px;
		padding: 1rem;
		text-decoration: none;
		text-align: center;
		text-shadow: 0px 0px 0px #263666;
		transition: all 0.2s ease-in-out;
		text-overflow: ellipsis;
		/* flex-basis: 25%; */
	}

	.isSelected {
		transform: scale(2.3);
		position: fixed;
		transform-origin: 0 0;
		opacity: 2;
		top: 0vh;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 100;
		overflow: hidden;
		backdrop-filter: blur(3px);
	}

	.item-container:hover {
		color: rgb(0, 0, 0, 1);
		cursor: pointer;
		background-color: #4aabff6e;
	}

	.isSelected:hover {
		background-color: none !important;
	}

	.item-container.tablet {
		padding: 0.5rem;
		min-height: 50%;
	}

	.item-container.mobile {
		padding: 0.5rem;
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
		width: 75%;
		height: 75%;
		border-radius: 8px;
		object-fit: cover;
	}

	.video-thumbnail {
		width: 75%;
		height: auto;
		border-radius: 8px;
		object-fit: cover;
	}

	.album-thumbnail {
		width: 65%;
		height: auto;
		border-radius: 8px;
		object-fit: cover;
	}

	.mobile {
		margin: 0.5rem 1rem;
		width: 75%;
	}

	.mobile.isSelected {
		transform: scale(1.8);
		margin: 0;
		top: 50%;
		width: 100%;
		height: 100%;
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
		justify-content: center;
	}

	.mobile:first-child {
		margin-top: 0;
	}

	.mobile:last-child {
		margin-bottom: 0;
	}

	.mobile .album-thumbnail {
		width: 85%;
	}

	@keyframes flicker {
		0% {
			opacity: 0.27861;
		}
		5% {
			opacity: 0.34769;
		}
		10% {
			opacity: 0.23604;
		}
		15% {
			opacity: 0.27861;
		}
		20% {
			opacity: 0.18128;
		}
		25% {
			opacity: 0.23604;
		}
		30% {
			opacity: 0.26559;
		}
		35% {
			opacity: 0.37288;
		}
		40% {
			opacity: 0.26559;
		}
		45% {
			opacity: 0.24387;
		}
		50% {
			opacity: 0.20313;
		}
		55% {
			opacity: 0.08594;
		}
		60% {
			opacity: 0.20313;
		}
		65% {
			opacity: 0.37288;
		}
		70% {
			opacity: 0.36108;
		}
		75% {
			opacity: 0.37288;
		}
		80% {
			opacity: 0.24387;
		}
		85% {
			opacity: 0.20313;
		}
		90% {
			opacity: 0.24387;
		}
		95% {
			opacity: 0.36108;
		}
		100% {
			opacity: 0.24387;
		}
	}
	@keyframes textShadow {
		0% {
			text-shadow: 0.4389924193300864px 0 1px rgba(0, 30, 255, 0.5),
				-0.4389924193300864px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		5% {
			text-shadow: 2.7928974010788217px 0 1px rgba(0, 30, 255, 0.5),
				-2.7928974010788217px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		10% {
			text-shadow: 0.02956275843481219px 0 1px rgba(0, 30, 255, 0.5),
				-0.02956275843481219px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		15% {
			text-shadow: 0.40218538552878136px 0 1px rgba(0, 30, 255, 0.5),
				-0.40218538552878136px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		20% {
			text-shadow: 3.4794037899852017px 0 1px rgba(0, 30, 255, 0.5),
				-3.4794037899852017px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		25% {
			text-shadow: 1.6125630401149584px 0 1px rgba(0, 30, 255, 0.5),
				-1.6125630401149584px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		30% {
			text-shadow: 0.7015590085143956px 0 1px rgba(0, 30, 255, 0.5),
				-0.7015590085143956px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		35% {
			text-shadow: 3.896914047650351px 0 1px rgba(0, 30, 255, 0.5),
				-3.896914047650351px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		40% {
			text-shadow: 3.870905614848819px 0 1px rgba(0, 30, 255, 0.5),
				-3.870905614848819px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		45% {
			text-shadow: 2.231056963361899px 0 1px rgba(0, 30, 255, 0.5),
				-2.231056963361899px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		50% {
			text-shadow: 0.08084290417898504px 0 1px rgba(0, 30, 255, 0.5),
				-0.08084290417898504px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		55% {
			text-shadow: 2.3758461067427543px 0 1px rgba(0, 30, 255, 0.5),
				-2.3758461067427543px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		60% {
			text-shadow: 2.202193051050636px 0 1px rgba(0, 30, 255, 0.5),
				-2.202193051050636px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		65% {
			text-shadow: 2.8638780614874975px 0 1px rgba(0, 30, 255, 0.5),
				-2.8638780614874975px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		70% {
			text-shadow: 0.48874025155497314px 0 1px rgba(0, 30, 255, 0.5),
				-0.48874025155497314px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		75% {
			text-shadow: 1.8948491305757957px 0 1px rgba(0, 30, 255, 0.5),
				-1.8948491305757957px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		80% {
			text-shadow: 0.0833037308038857px 0 1px rgba(0, 30, 255, 0.5),
				-0.0833037308038857px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		85% {
			text-shadow: 0.09769827255241735px 0 1px rgba(0, 30, 255, 0.5),
				-0.09769827255241735px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		90% {
			text-shadow: 3.443339761481782px 0 1px rgba(0, 30, 255, 0.5),
				-3.443339761481782px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		95% {
			text-shadow: 2.1841838852799786px 0 1px rgba(0, 30, 255, 0.5),
				-2.1841838852799786px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		100% {
			text-shadow: 2.6208764473832513px 0 1px rgba(0, 30, 255, 0.5),
				-2.6208764473832513px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
	}
	/* .crt::after {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(18, 16, 16, 0.1);
    opacity: 0;
    z-index: 2;
    pointer-events: none;
    animation: flicker 0.2s infinite;
	overflow: scroll;
  }
  .crt::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
    z-index: 2;
    background-size: 100% 2px, 3px 100%;
    pointer-events: none;
	overflow: scroll;
  } */
	.crt {
		animation: textShadow 1.6s infinite;
	}
</style>
