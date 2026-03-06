<script>
  import { isOverlayActive, triggerOverlay } from '../stores/overlay.js';
  import ColorScheme from './ColorScheme.svelte';
  import SidebarIcons from './SidebarIcons.svelte';
</script>

<div class="navbar-container">
  <a class="navbar-logo-name" href="#home">IWS Design</a>

  <ColorScheme />

  <!-- Nav-Menu Bars -->
  <div on:click={triggerOverlay} class="nav-menu-bars" role="button" tabindex="0" on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && triggerOverlay()}>
    <div class="nav-menu-bar1" class:change-bar1={$isOverlayActive}></div>
    <div class="nav-menu-bar2" class:change-bar2={$isOverlayActive}></div>
    <div class="nav-menu-bar3" class:change-bar3={$isOverlayActive}></div>
  </div>
</div>
<SidebarIcons />
