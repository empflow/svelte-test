<script lang="ts">
	import { email, name } from './stores';
</script>

<form>
	<div class="input-group">
		<label for="name">Name</label>
		<input bind:value={$name} />
	</div>
	<button on:click={() => ($name += '!')}>Add '!'</button>
	<button on:click={() => ($name = '?')}>Turn into a question mark</button>
	<button on:click={() => ($name = '')}>Clear</button>
</form>

<style>
	.input-group {
		display: flex;
		flex-direction: column;
		max-width: 200px;
	}
</style>
