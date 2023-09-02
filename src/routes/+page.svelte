<script>
	import { onMount } from 'svelte';

    onMount(() => {
        document.title = 'BPHouse';

        return () => {
            document.title = 'BPHouse';
        };
    });
</script>
