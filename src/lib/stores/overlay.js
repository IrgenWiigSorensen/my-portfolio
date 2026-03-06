import { writable } from 'svelte/store';

export const isOverlayActive = writable(false);

export function triggerOverlay() {
  isOverlayActive.update((v) => !v);
}
