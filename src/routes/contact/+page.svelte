<script>
	import { fly, fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	onMount(() => {
		document.title = 'BPHouse - Contact';
	});
</script>

<div in:fly={{ y: -200, duration: 1000 }} out:fade={{ duration: 250 }} class="contact">
	<h1 id="contact-email" class="crt">iamsittinginmyhouse@gmail.com</h1>
</div>

<style>
	#contact-email {
		color: #fc804d;
		font-size: 1rem;
		font-family: 'Menlo';
	}

	#contact-email:hover {
		cursor: pointer;
	}

	.contact {
		color: #ffffff;
		position: absolute;
		z-index: 99;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: flex-start;
		height: auto;
		width: 80vw;
		top: 40%;
		left: 0;
		right: 0;
		/* bottom: 0; */
		padding: 1.5rem;
		margin: auto;
		border-radius: 0.5em;
		background-color: rgba(0, 0, 0, 0.75);
		overflow-y: scroll;
		overflow-x: hidden;
	}

	@media (min-width: 516px) and (max-width: 1050px) {
		#contact-email {
			font-size: 2.2rem;
		}
	}


	@media (min-width: 1051px) {
		.contact {
			height: auto;
			width: 60vw;
			top: 40%;
			left: 20%;
			margin: 1rem;
		}
	}
</style>
