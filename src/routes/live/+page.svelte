<script>
	import ContainerView from "../../components/ContainerView.svelte";
	import Item from "../../components/Item.svelte";
	import { onMount } from 'svelte';
	export let data;
	// const items = data.body;
	$: items = data?.body.live;

	onMount(() => {
		document.title = 'BPHouse - Live';
	});
</script>

<ContainerView>
	{#if items}
		{#each items as item}
			<Item item={item} />
		{/each}
	{/if}
</ContainerView>


