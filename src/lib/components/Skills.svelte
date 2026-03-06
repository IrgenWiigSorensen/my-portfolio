<script>
  import { skills } from '../content.js';
</script>

<section id="skills">
  <div class="skills-section">
    <div class="section-header">
      <h1>Skills</h1>
    </div>
    <div class="skills-container">
      {#each skills as data}
        <div class="first-inner-container">
          <h3>{data.skill}</h3>
          <p>{data.info.text}</p>
        </div>

        <div class="second-inner-container">
          <div class="scroll-parent">
            <div class="skill-icon-box primary">
              {#each data.info.icons as icon}
                <div class="skill-icon">
                  <img src={icon.src} alt={icon.alt} />
                </div>
              {/each}
            </div>

            <div class="skill-icon-box secondary">
              {#each data.info.icons as icon}
                <div class="skill-icon">
                  <img src={icon.src} alt={icon.alt} />
                </div>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
