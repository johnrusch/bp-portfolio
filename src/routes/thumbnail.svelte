<script>
    export let link;
	export let image;
	export let type;
</script>
{#if image}
    <img src={image} alt={link} />
{:else if type === 'video' || type === 'live'}
	<img
		src="https://img.youtube.com/vi/{link?.split('/').at(-1)}/maxresdefault.jpg"
		class="thumbnail"
		alt="{item.title} video thumbnail"
	/>
{:else}
	<img src={image} class="thumbnail"  />
{/if}
