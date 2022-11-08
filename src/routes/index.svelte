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
			console.log('SELECTED IDX', selected);
		} else {
			handleClose();
		}
	};

	const clickOutside = (node) => {
		const handleClick = (event) => {
			if (!node.contains(event.target) && !event.target.classList.contains('tab-button')) {
				console.log('event', event);
				node.dispatchEvent(new CustomEvent('outclick'));
			} else if (node.contains(event.target) && event.target.classList.contains('selected')) {
				node.dispatchEvent(new CustomEvent('outclick'));
				event.target.style.color = '#fc804d';
			}
		};
		document.addEventListener('click', handleClick, true);
		console.log('infooo', node);
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

	let items = $$props;
	console.log("items", items);
	
</script>

<svelte:body class="crt" />

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
		<div class="crt">
			<OnMount>
				<div class="default" in:fly={{ y: 200, duration: 500, delay: 750 }} id="tab-container">
					<ul class="default text" id="tabs">
						{#each tabs as tab, i}
							<li
								class="tab-button crt default"
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
					class="default crt"
					items={items[selected.name]}
					{clickOutside}
					{handleClose}
					contact={selected.name === 'Contact'}
					design={selected.name === 'Design'}
				/>
			{/if}
		</div>
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
		<div class="crt">
			<OnMount>
				<ul class="tablet crt" id="tabs">
					{#each tabs as tab, i}
						<li
							class="tab-button crt tablet"
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
					class="tablet"
					items={$$props[selected.name]}
					{clickOutside}
					{handleClose}
					contact={selected.name === 'Contact'}
					design={selected.name === 'Design'}
				/>
			{/if}
		</div>
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
		<div class="crt">
			<OnMount>
				<ul class="mobile crt" id="tabs">
					{#each tabs as tab, i}
						<li
							class="tab-button crt mobile"
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
					design={selected.name === 'Design'}
				/>
			{/if}
		</div>
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

	.tab-button {
		font-family: 'Menlo';
		font-size: 1.5em;
		color: #fc804d;
		min-width: 7rem;
		margin-top: 1rem;
		margin-bottom: 1rem;
		background: transparent;
		padding: 9px 5px;
		text-align: left;
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
		padding: 0.5rem;
		padding-left: 0rem;
		padding-right: 0rem;
	}

	.mobile#tabs {
		position: fixed;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		/* min-width: 360px; */
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
		min-width: 3rem;
		height: auto;
		text-align: center;
		font-size: 1.3em;
	}

	.mobile.tab-button {
		/* width: 10%; */
		min-width: 3rem;
		color: #fc804d;
		height: auto;
		margin: 0;
		padding-left: 0;
		padding-right: 0;
		background: transparent;
		background-repeat: no-repeat;
		border: none;
		flex: 1;
		font-size: 2.2vh;
		text-align: center;
	}

	.mobile.tab-button.selected {
		background: linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);
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
	.crt::after {
		content: ' ';
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
		animation: flicker 0.3s infinite;
	}
	.crt::before {
		content: ' ';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
			linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
		z-index: 2;
		background-size: 100% 2px, 3px 100%;
		pointer-events: none;
	}
	.crt {
		animation: textShadow 1.6s infinite;
		/* z-index: 120; */
	}
</style>
