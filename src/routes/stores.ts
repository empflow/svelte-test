import { writable, readable } from 'svelte/store';

export const count = writable(0);
export const time = readable(Date.now(), (set) => {
	const interval = setInterval(() => set(Date.now()), 1);
	return () => clearInterval(interval);
});
