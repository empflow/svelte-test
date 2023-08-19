<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('update');
	}
</script>

<button on:click={handleClick}>+</button>
