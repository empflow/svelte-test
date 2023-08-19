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
		<Increment on:update={count.increment} />
		<Decrement on:update={count.decrement} />
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
