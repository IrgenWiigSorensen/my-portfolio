<script>
  import { isDark } from '../stores/colorScheme.js';
  import { onMount } from 'svelte';
  import Particles, { particlesInit } from '@tsparticles/svelte';
  import { loadAll } from '@tsparticles/all';

  let loaded = false;

  $: particleColor = $isDark ? '#000000' : '#f5f5f5';

  onMount(async () => {
    await particlesInit(async (engine) => {
      await loadAll(engine);
    });
    loaded = true;
  });
</script>

{#if loaded}
  <Particles
    id="tsparticles"
    options={{
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: 'push' },
          onHover: { enable: true, mode: 'repulse' },
          resize: true,
        },
        modes: {
          push: { quantity: 6 },
          repulse: { distance: 130, duration: 0.4 },
        },
      },
      particles: {
        color: { value: particleColor },
        links: {
          color: particleColor,
          distance: 90,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: { enable: true },
        move: {
          directions: 'none',
          enable: true,
          outModes: { default: 'bounce' },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: { enable: true, area: 800 },
          value: 80,
        },
        opacity: { value: 0.5 },
        shape: { type: 'circle' },
        size: { value: { min: 1, max: 5 } },
      },
      detectRetina: true,
    }}
  />
{/if}
