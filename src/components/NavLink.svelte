<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	const handleClick = (e: Event) => {
		if ($page.route.id === href) {
			e.preventDefault();
			goto('/');
		}
	};

	export let title: string;
	export let href: string;
</script>

<a class="tab-button crt" class:active={$page.route.id == href} on:click={handleClick} {href}
	>{title}</a
>

<style>
	.tab-button {
		font-family: 'Menlo';
		font-size: 2.2vh;
		color: #fc804d;
		height: auto;
		min-width: 3rem;
		margin: 0;
		margin-top: 0;
		margin-bottom: 0;
		background: transparent;
		background-repeat: no-repeat;
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1;
		padding-left: 0;
		padding-right: 0;
		text-decoration: none;
		text-shadow: 0px 0px 0px #263666;
		overflow-x: hidden;
		text-overflow: ellipsis;
	}

	.tab-button:hover {
		color: rgb(0, 0, 0, 1);
		cursor: pointer;
		background-color: #0688fa;
	}

	.tab-button.active {
		background: linear-gradient(to bottom, #85c6ff 5%, #7fafcd 100%);
		color: rgb(0, 0, 0, 1);
	}

	@media (min-width: 516px) and (max-width: 1050px) {
		.tab-button {
			width: 20%;
			min-width: 3rem;
			height: auto;
			text-align: center;
			font-size: 1.3em;
		}
	}

	@media (min-width: 1051px) {
		.tab-button {
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
	}
</style>
