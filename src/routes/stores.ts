import { writable, readable, derived } from 'svelte/store';

function createCount() {
	const { update, set, subscribe } = writable(0);
	return {
		subscribe,
		increment: () => update((prev) => prev + 1),
		decrement: () => update((prev) => prev - 1),
		reset: () => set(0)
	};
}
export const count = createCount();
export const time = readable(Date.now(), (set) => {
	const interval = setInterval(() => set(Date.now()), 1);
	return () => clearInterval(interval);
});
export const timeDividedBy1000 = derived(time, ($time) => {
	return $time / 1000;
});
