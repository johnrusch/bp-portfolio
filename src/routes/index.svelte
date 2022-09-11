<script>
	import { OnMount } from 'fractils';
	import { fly } from 'svelte/transition';
	import { tabs } from './Nav.svelte';
	import MediaQuery from '../MediaQuery.svelte';
	import View from './view.svelte';

	let selected;
	let selectedIdx;

	const selectTab = (event) => {
		if (!event.target.classList.contains('selected')) {
			selected = tabs[event.srcElement.id];
			selectedIdx = parseInt(event.srcElement.id);
			console.log('SELECTED IDX', selected.name);
		} else {
			handleClose();
		}
	};

	const clickOutside = (node) => {
		const handleClick = (event) => {
			if (!node.contains(event.target) && !event.target.classList.contains('tab-button')) {
				console.log('event', event);
				node.dispatchEvent(new CustomEvent('outclick'));
			}
		};
		document.addEventListener('click', handleClick, true);

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	};

	const handleClose = () => {
		console.log('CLICKED OUTSIDE');
		selected = null;
		selectedIdx = null;
	};

	let videos = $$props;
	console.log('ITEMS', videos);
</script>

<!-- default -->
<MediaQuery query="(min-width: 1051px)" let:matches>
	{#if matches}
		<video
			class="default"
			playsinline
			autoplay
			muted
			loop
			id="bg-video"
			src="https://s3.us-east-2.amazonaws.com/bp.house/imh+looped+(1).mp4"
			poster="src/imhLoopedPoster.png"
		/>

		<OnMount>
			<div class="default" in:fly={{ y: 200, duration: 500, delay: 750 }} id="tab-container">
				<ul class="default" id="tabs">
					{#each tabs as tab, i}
						<li
							class="tab-button default"
							class:selected={selectedIdx === i}
							role="tab"
							on:click={selectTab}
							id={i}
						>
							{tab.name}
						</li>
					{/each}
				</ul>
			</div>
		</OnMount>

		{#if selected}
			<View
				class="default"
				items={$$props[selected.name]}
				{clickOutside}
				{handleClose}
				contact={selected.name === 'Contact'}
			/>
		{/if}
	{/if}
</MediaQuery>

<!-- tablet -->
<MediaQuery query="(min-width: 516px) and (max-width: 1050px)" let:matches>
	{#if matches}
		<video
			class="tablet"
			playsinline
			autoplay
			muted
			loop
			id="bg-video"
			src="https://s3.us-east-2.amazonaws.com/bp.house/imh+looped+(1).mp4"
			poster="src/imhLoopedPoster.png"
		/>

		<ul class="tablet" id="tabs">
			{#each tabs as tab, i}
				<li
					class="tab-button tablet"
					class:selected={selectedIdx === i}
					role="tab"
					on:click={selectTab}
					id={i}
				>
					{tab.name}
				</li>
			{/each}
		</ul>

		{#if selected}
			<View
				class="tablet"
				items={$$props[selected.name]}
				{clickOutside}
				{handleClose}
				contact={selected.name === 'Contact'}
			/>
		{/if}
	{/if}
</MediaQuery>

<!-- mobile -->
<MediaQuery query="(max-width: 515px)" let:matches>
	{#if matches}
		<video
			class="mobile"
			playsinline
			autoplay
			muted
			loop
			id="bg-video"
			src="https://s3.us-east-2.amazonaws.com/bp.house/imh+looped+(1).mp4"
			poster="src/imhLoopedPoster.png"
		/>

		<OnMount>
			<ul class="mobile" id="tabs">
				{#each tabs as tab, i}
					<li
						class="tab-button mobile"
						class:selected={selectedIdx === i}
						role="tab"
						on:click={selectTab}
						id={i}
					>
						{tab.name}
					</li>
				{/each}
			</ul>
		</OnMount>
		{#if selected}
			<View
				class="mobile"
				items={$$props[selected.name]}
				{clickOutside}
				{handleClose}
				contact={selected.name === 'Contact'}
			/>
		{/if}
	{/if}
</MediaQuery>

<style>
	#bg-video {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		height: 100vh;
		width: 100vw;
		min-width: 100%;
		min-height: 100%;
		object-fit: fill;
	}

	#bg-video.tablet {
		object-fit: cover;
	}

	#bg-video.mobile {
		object-fit: cover;
	}

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
		z-index: 99;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 7rem;
		min-width: 7rem;
		height: auto;
		padding: 2em;
		margin-top: 1em;
		margin-left: 1em;
		margin-bottom: 1em;
		border-radius: 0.5em;
		background-color: rgba(37, 105, 182, 0.75);
		list-style: none;
	}

	.tab-button {
		font-family: 'Rubik';
		font-size: 1.5em;
		color: #ffffff;
		text-align: center;
		min-width: 7rem;
		margin-top: 1rem;
		margin-bottom: 1rem;
		box-shadow: -1px 5px 7px 0px #093042;
		background: linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);
		background-color: #2dabf9;
		border-radius: 8px;
		border: 1px solid #0b0e07;
		padding: 9px 2px;
		text-align: center;
		text-decoration: none;
		text-shadow: 0px 0px 0px #263666;
		overflow-x: hidden;
		text-overflow: ellipsis;
	}

	.selected {
		background: linear-gradient(to bottom, #85c6ff 5%, #7fafcd 100%);
	}

	.tab-button:hover {
		color: rgb(0, 0, 0, 1);
		cursor: pointer;
		background-color: #0688fa;
	}

	.tablet#tabs {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		overflow: hidden;
		flex-direction: row;
		justify-content: space-evenly;
		margin: auto;
		padding-left: 0rem;
		padding-right: 0rem;
	}

	.mobile#tabs {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 10vh;
		overflow: hidden;
		flex-direction: row;
		justify-content: space-evenly;
		margin: auto;
		padding: 0;
		border-radius: 0;
	}

	.tablet.tab-button {
		width: 20%;
		height: auto;
	}

	.mobile.tab-button {
		width: 10%;
		min-width: 6rem;
		height: auto;
		margin: 0;
		background: transparent;
		background-repeat: no-repeat;
		border: none;
		flex: 1;
	}

	.mobile.tab-button.selected {
		background: linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);
	}
</style>
