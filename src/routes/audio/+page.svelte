<script>
	import ContainerView from "../../components/ContainerView.svelte";
	import Item from "../../components/Item.svelte";
	import { onMount } from 'svelte';
	export let data;
	// const items = data.body;
	$: items = data?.body.audio;

	onMount(() => {
		document.title = 'BPHouse - Audio';
	});
</script>

<ContainerView>
	{#if items}
		{#each items as item}
			<Item item={item} />
		{/each}
	{/if}
</ContainerView>


