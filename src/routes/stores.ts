import { writable, readable, derived } from 'svelte/store';

export const count = writable(0);
export const time = readable(Date.now(), (set) => {
	const interval = setInterval(() => set(Date.now()), 1);
	return () => clearInterval(interval);
});
export const timeDividedBy1000 = derived(time, ($time) => {
	return $time / 1000;
});
