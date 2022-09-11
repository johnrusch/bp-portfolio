import MediaQuery from './MediaQuery.svelte';

export const renderView = () => {
    return (
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
			<svelte:component this={selected.component} class="default" items={$$props[selected.name]} />
		{/if}
	{/if}
    );
</MediaQuery>
}