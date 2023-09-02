<script>
	import ContainerView from "../../components/ContainerView.svelte";
	import Item from "../../components/Item.svelte";
	export let data;
	// const items = data.body;
	$: items = data?.body.live;
</script>

<ContainerView>
	{#if items}
		{#each items as item}
			<Item item={item} />
		{/each}
	{/if}
</ContainerView>


