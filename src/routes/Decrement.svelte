<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const disptach = createEventDispatcher();

	function handleClick() {
		disptach('update', {
			text: 'hello this is passed from handleClick inside Decrement.svelte'
		});
	}
</script>

<button on:click={handleClick}>-</button>
