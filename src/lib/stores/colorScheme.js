import { writable } from 'svelte/store';

export const isDark = writable(false);

export function toggleColorScheme() {
  isDark.update((d) => !d);
}
