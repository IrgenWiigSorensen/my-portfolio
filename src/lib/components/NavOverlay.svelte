<script>
  import { isOverlayActive, triggerOverlay } from '../stores/overlay.js';

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    triggerOverlay();
  }
</script>

<div class="overlay" class:overlay-slide-right={$isOverlayActive} class:overlay-slide-left={!$isOverlayActive}>
  <nav>
    <ul>
      <li class:slide-in-1={$isOverlayActive} class:slide-out-1={!$isOverlayActive}>
        <a on:click={() => scrollTo('home')} href="#home" role="button">Home</a>
      </li>
      <li class:slide-in-2={$isOverlayActive} class:slide-out-2={!$isOverlayActive}>
        <a on:click={() => scrollTo('about')} href="#about" role="button">About</a>
      </li>
      <li class:slide-in-3={$isOverlayActive} class:slide-out-3={!$isOverlayActive}>
        <a on:click={() => scrollTo('skills')} href="#skills" role="button">Skills</a>
      </li>
      <li class:slide-in-4={$isOverlayActive} class:slide-out-4={!$isOverlayActive}>
        <a on:click={() => scrollTo('projects')} href="#projects" role="button">Projects</a>
      </li>
      <li class:slide-in-5={$isOverlayActive} class:slide-out-5={!$isOverlayActive}>
        <a on:click={() => scrollTo('contact')} href="#contact" role="button">Contact</a>
      </li>
    </ul>
  </nav>
</div>
