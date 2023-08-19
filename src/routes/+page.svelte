<script lang="ts">
	import Decrement from './Decrement.svelte';
	import Increment from './Increment.svelte';
	import Time from './Time.svelte';
	import { count, time } from './stores';
</script>

<div class="container">
	<div>
		The count is {$count}
	</div>

	<div class="buttons">
		<Decrement on:update={() => count.update((prev) => prev - 1)} />
		<Increment on:update={() => count.update((prev) => prev + 1)} />
	</div>

	<Time />
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	.buttons {
		display: flex;
		gap: 5px;
	}
</style>
