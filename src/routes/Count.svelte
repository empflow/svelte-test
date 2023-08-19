<script>
	import CountButtons from './CountButtons.svelte';
	import { count } from './stores';
</script>

<div>
	<div>
		The count is {$count}
	</div>
	<CountButtons />
</div>
