<script>
	import { fade, fly, blur } from 'svelte/transition';
	import { linear, cubicInOut } from 'svelte/easing';

	let name = '';
	let visible = true;
</script>

<label>
	<input type="checkbox" bind:checked={visible} />
	visible
</label>

<label>
	<input type="text" placeholder="Your name" bind:value={name} />
</label>

{#if visible}
	<p
		in:fly={{ duration: 1000, y: 300, x: 1000, easing: cubicInOut }}
		out:fly={{ duration: 1000, easing: cubicInOut, x: -1000, y: -300 }}
	>
		{name}
	</p>
{/if}

<div>Hello this is some text</div>

<style>
	p {
		max-width: 300px;
		margin: 0;
	}
</style>
