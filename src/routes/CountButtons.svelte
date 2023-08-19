<script>
	import Decrement from './Decrement.svelte';

	import Increment from './Increment.svelte';
	import { count } from './stores';
</script>

<div class="buttons">
	<Increment on:update={count.increment} />
	<Decrement on:update={count.decrement} />
</div>
