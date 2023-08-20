<script lang="ts">
	import { spring, type SpringOpts } from 'svelte/motion';

	const defaultSpringOpts: SpringOpts = {
		stiffness: 0.5,
		damping: 0.5,
		precision: 0.5
	};

	let coords = spring({ x: 50, y: 50 }, defaultSpringOpts);
	let size = spring(10, defaultSpringOpts);

	$: console.log($coords);
</script>

<svg
	on:mousemove={(e) => {
		coords.set({ x: e.clientX, y: e.clientY });
	}}
	on:mousedown={() => size.set(30)}
	on:mouseup={() => size.set(10)}
>
	<circle cx={$coords.x} cy={$coords.y} r={$size} />
</svg>

<div class="controls">
	<label>
		<h3>stiffness ({coords.stiffness})</h3>
		<input bind:value={coords.stiffness} type="range" min="0.01" max="1" step="0.01" />
	</label>

	<label>
		<h3>damping ({coords.damping})</h3>
		<input bind:value={coords.damping} type="range" min="0.01" max="1" step="0.01" />
	</label>

	<label>
		<h3>precision ({coords.precision})</h3>
		<input bind:value={coords.precision} type="range" min="0.01" max="1" step="0.01" />
	</label>
</div>

<style>
	svg {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
	}

	circle {
		fill: #ff3e00;
	}

	.controls {
		position: absolute;
		top: 1em;
		right: 1em;
		width: 200px;
		user-select: none;
	}

	.controls input {
		width: 100%;
	}
</style>
