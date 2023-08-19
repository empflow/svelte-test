<script lang="ts">
	import { email, name } from './stores';
</script>

<form>
	<div class="input-group">
		<label for="email">Email</label>
		<input id="email" type="email" bind:value={$email} />
	</div>

	<div class="input-group">
		<label for="name">Name</label>
		<input type="text" id="name" bind:value={$name} />
	</div>
</form>

<style>
	.input-group {
		display: flex;
		flex-direction: column;
		max-width: 200px;
	}
</style>
