<script>
	import ContainerView from "../../components/ContainerView.svelte";
	import Item from "../../components/Item.svelte";
	import { onMount } from 'svelte';

	export let data;
	$: items = data?.body.video;

	onMount(() => {
		document.title = 'BPHouse - Video';

	});
</script>

<ContainerView>
	{#if items}
		{#each items as item}
			<Item item={item} />
		{/each}
	{/if}
</ContainerView>


