<script>
  import JokeTeller from './JokeTeller.svelte';

  let modal = false;

  const toggleModal = () => {
    modal = !modal;
  };

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      modal = false;
    }
  };

  $: {
    if (typeof document !== 'undefined') {
      if (modal) {
        document.body.classList.add('active-modal');
      } else {
        document.body.classList.remove('active-modal');
      }
    }
  }
</script>

<button on:click={toggleModal} class="project-button">Joke</button>

{#if modal}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div on:click={handleOutsideClick} class="modal" role="dialog" aria-modal="true">
    <div class="modal-content">
      <JokeTeller />
  <div on:click={toggleModal} class="modal-menu-bars" role="button" tabindex="0" on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleModal()}>
        <div class="modal-menu-bar1"></div>
        <div class="modal-menu-bar2"></div>
        <div class="modal-menu-bar3"></div>
      </div>
    </div>
  </div>
{/if}
