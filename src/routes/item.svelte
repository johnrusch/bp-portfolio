<script>
	export let item;

	const handleClick = () => {
		window.open(item.link, '_blank');
	};
</script>

<div class="item-container" class:mobile={window.innerWidth <= 515} on:click={handleClick}>
	{#if !item.thumbnail}
		<img
			src="https://img.youtube.com/vi/{item.link?.split('/').at(-1)}/hqdefault.jpg"
			class="thumbnail"
			class:mobile={window.innerWidth <= 515}
			alt="{item.title} video thumbnail"
		/>
	{:else}
		<img
			src={item.thumbnail}
			class:mobile={window.innerWidth <= 515}
			class="thumbnail"
			alt="temp alt"
		/>
	{/if}
	<div class="item-info" class:mobile={window.innerWidth <= 515}>
		<h4 class="item-title">{item.title}</h4>
		<div class="item-description">{item.description}</div>
	</div>
</div>

<style>
	.item-container {
		display: flex;
		justify-content: flex-start;
		font-family: 'Rubik';
		font-size: 1.3em;
		height: auto;
		width: 90%;
		color: #ffffff;
		text-align: center;
		margin-top: 1rem;
		margin-bottom: 1rem;
		box-shadow: -1px 5px 7px 0px #093042;
		background: linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);
		background-color: #2dabf9;
		border-radius: 8px;
		border: 1px solid #0b0e07;
		padding: 0.4rem 2rem;
		text-decoration: none;
		text-shadow: 0px 0px 0px #263666;
	}
	.item-container:hover {
		color: rgb(0, 0, 0, 1);
		cursor: pointer;
		background-color: #0688fa;
	}

	.item-info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		margin-left: 1rem;
	}

	.item-title {
		align-self: flex-start;
		margin-top: 0;
		margin-bottom: 0.5rem;
		overflow: hidden;
		display: block;
	}

	.item-description {
		font-size: 1rem;
	}

	.thumbnail {
		max-width: 22%;
		width: 60%;
		height: 100%;
		border-radius: 8px;
		object-fit: cover;
	}

	.item-container.mobile {
		flex-direction: column;
		align-items: center;
		margin: 0.5rem 1rem;
		width: 75%;
	}

	.item-container.mobile:first-child {
		margin-top: 0;
	}

	.item-container.mobile:last-child {
		margin-bottom: 0;
	}

	.item-info.mobile {
		align-items: center;
	}

	.thumbnail.mobile {
		min-width: 80%;
		height: auto;
	}
</style>
