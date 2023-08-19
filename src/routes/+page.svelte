<script lang="ts">
	import Count from './Count.svelte';
	import Decrement from './Decrement.svelte';
	import Form from './Form.svelte';
	import Increment from './Increment.svelte';
	import Time from './Time.svelte';
	import { count, email, name, time } from './stores';

	$: {
		console.log($name);
		console.log($email);
	}
</script>

<div class="container">
	<Count />
	<Time />
	<Form />
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
