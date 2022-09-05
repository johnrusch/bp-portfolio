<script context="module">
	import Video from './video.svelte';
	import Audio from './audio.svelte';
	import Live from './live.svelte';
	import Contact from './contact.svelte';

	export const tabs = [
		{ name: 'Video', component: Video },
		{ name: 'Audio', component: Audio },
		{ name: 'Live', component: Live },
		{ name: 'Contact', component: Contact }
	];
</script>
